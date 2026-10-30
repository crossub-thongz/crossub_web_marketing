import { NextResponse, type NextRequest } from 'next/server';

import { IP_COUNTRY_COOKIE, REGION_COOKIE, REGION_HEADER, isPathAllowed, type RegionCode } from '@/lib/regions';

const COOKIE_OPTIONS = {
  path: '/',
  maxAge: 60 * 60 * 24 * 365,
  sameSite: 'lax' as const,
};

function clientIp(request: NextRequest): string | null {
  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '';
  const raw = (forwarded || request.headers.get('x-real-ip') || '').trim().replace(/^::ffff:/, '');
  if (!raw) return null;
  if (raw === '::1' || raw === '127.0.0.1' || raw.startsWith('10.') || raw.startsWith('192.168.')) return null;
  const privateBlock = raw.match(/^172\.(\d+)\./);
  if (privateBlock) {
    const second = Number(privateBlock[1]);
    if (second >= 16 && second <= 31) return null;
  }
  return raw;
}

async function detectCountry(request: NextRequest): Promise<string | null> {
  const headerCountry = (
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    request.headers.get('x-country-code') ||
    ''
  ).toUpperCase();
  if (/^[A-Z]{2}$/.test(headerCountry) && headerCountry !== 'XX') return headerCountry;

  const saved = request.cookies.get(IP_COUNTRY_COOKIE)?.value?.toUpperCase() ?? '';
  if (/^[A-Z]{2}$/.test(saved)) return saved;
  if (saved === 'UNKNOWN') return null;

  const ip = clientIp(request);
  if (!ip) return null;
  try {
    const response = await fetch(`https://api.country.is/${encodeURIComponent(ip)}`, {
      headers: { accept: 'application/json' },
      signal: AbortSignal.timeout(1200),
    });
    if (!response.ok) return null;
    const data = (await response.json()) as { country?: string };
    const code = data.country?.toUpperCase() ?? '';
    return /^[A-Z]{2}$/.test(code) ? code : null;
  } catch {
    return null;
  }
}

function suggestedRegion(saved: string | undefined, country: string | null): RegionCode {
  if (saved === 'AU' || saved === 'NZ') return saved;
  return country === 'NZ' ? 'NZ' : 'AU';
}

function rememberIp(response: NextResponse, request: NextRequest, country: string | null) {
  if (request.cookies.get(IP_COUNTRY_COOKIE)?.value) return;
  response.cookies.set(IP_COUNTRY_COOKIE, country ?? 'UNKNOWN', {
    ...COOKIE_OPTIONS,
    maxAge: country ? 60 * 60 * 24 * 7 : 60 * 60,
  });
}

function barePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);
  return pathname;
}

function redirectTo(request: NextRequest, pathname: string, region: RegionCode, status: 307 | 308) {
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  const response = NextResponse.redirect(url, status);
  response.cookies.set(REGION_COOKIE, region, COOKIE_OPTIONS);
  return response;
}

export async function middleware(request: NextRequest) {
  const pathname = barePath(request.nextUrl.pathname);
  const regionMatch = pathname.match(/^\/(au|nz)(\/.*)?$/i);

  const country = regionMatch || pathname === '/' || isPathAllowed('AU', pathname) || isPathAllowed('NZ', pathname)
    ? await detectCountry(request)
    : null;

  if (regionMatch) {
    const region = regionMatch[1].toUpperCase() as RegionCode;
    const rest = regionMatch[2] ? barePath(regionMatch[2]) : '/';
    if (!isPathAllowed(region, rest)) {
      return rememberCountry(redirectTo(request, `/${region}`, region, 307), request, country);
    }
    if (regionMatch[1] !== region) {
      const canonical = `/${region}${rest === '/' ? '' : rest}`;
      return rememberCountry(redirectTo(request, canonical, region, 308), request, country);
    }
    const url = request.nextUrl.clone();
    url.pathname = rest;
    const headers = new Headers(request.headers);
    headers.set(REGION_HEADER, region);
    const response = NextResponse.rewrite(url, { request: { headers } });
    response.cookies.set(REGION_COOKIE, region, COOKIE_OPTIONS);
    return rememberCountry(response, request, country);
  }

  if (!isPathAllowed('AU', pathname) && !isPathAllowed('NZ', pathname) && pathname !== '/') {
    const known =
      pathname === '/inspections' ||
      pathname === '/full-service' ||
      pathname === '/property-services' ||
      pathname === '/service-pricing' ||
      pathname === '/software' ||
      pathname === '/about' ||
      pathname === '/help' ||
      pathname === '/privacy' ||
      pathname === '/terms' ||
      pathname === '/book-a-demo';
    if (!known) return NextResponse.next();
  }

  const region = suggestedRegion(request.cookies.get(REGION_COOKIE)?.value?.toUpperCase(), country);
  if (!isPathAllowed(region, pathname)) {
    return rememberCountry(redirectTo(request, `/${region}`, region, 307), request, country);
  }
  const destination = pathname === '/' ? `/${region}` : `/${region}${pathname}`;
  return rememberCountry(redirectTo(request, destination, region, 307), request, country);
}

function rememberCountry(response: NextResponse, request: NextRequest, country: string | null) {
  rememberIp(response, request, country);
  return response;
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
