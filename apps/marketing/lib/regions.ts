import { siteLinks } from '@/lib/site-links';

/**
 * Website availability for each country. This decides what the public site
 * may show. It does not replace tenancy law, privacy rules, or finance rules.
 * A country with enabled: false is kept for later and is not offered yet.
 */
export const REGIONS = {
  AU: {
    code: 'AU',
    name: 'Australia',
    enabled: true,
    currency: 'AUD',
    software: true,
    inspectionService: true,
    fullManagement: true,
    summary: 'All services available',
  },
  NZ: {
    code: 'NZ',
    name: 'New Zealand',
    enabled: true,
    currency: 'NZD',
    software: true,
    inspectionService: false,
    fullManagement: false,
    summary: 'Free software only',
  },
  UK: {
    code: 'UK',
    name: 'United Kingdom',
    enabled: false,
    currency: 'GBP',
    software: true,
    inspectionService: false,
    fullManagement: false,
    summary: 'Not open yet',
  },
} as const;

export type RegionCode = keyof typeof REGIONS;

export const REGION_COOKIE = 'crossub_region';
export const IP_COUNTRY_COOKIE = 'crossub_ip_country';
export const REGION_HEADER = 'x-crossub-region';

const PUBLIC_PATHS = new Set(['/', '/software', '/about', '/help', '/privacy', '/terms', '/book-a-demo']);

export function enabledRegions() {
  return (Object.values(REGIONS) as (typeof REGIONS)[RegionCode][]).filter((region) => region.enabled);
}

export function isRegionCode(value: string | null | undefined): value is RegionCode {
  return value === 'AU' || value === 'NZ' || value === 'UK';
}

export function regionFromPathname(pathname: string): RegionCode {
  const match = pathname.match(/^\/(AU|NZ)(?=\/|$)/i);
  const code = match?.[1]?.toUpperCase();
  if (code === 'NZ') return 'NZ';
  return 'AU';
}

export function regionFromHeader(headerList: { get(name: string): string | null }): RegionCode {
  const code = headerList.get(REGION_HEADER)?.toUpperCase();
  if (code === 'NZ') return 'NZ';
  return 'AU';
}

export function stripRegion(pathname: string): string {
  const stripped = pathname.replace(/^\/(AU|NZ)(?=\/|$)/i, '');
  return stripped === '' ? '/' : stripped;
}

export function offersServices(region: RegionCode): boolean {
  const config = REGIONS[region];
  return config.inspectionService || config.fullManagement;
}

export function isPathAllowed(region: RegionCode, pathname: string): boolean {
  const config = REGIONS[region];
  if (!config?.enabled) return false;
  const path = stripRegion(pathname);
  if (PUBLIC_PATHS.has(path)) return true;
  if (path === '/inspections') return config.inspectionService;
  if (path === '/full-service') return config.fullManagement;
  if (path === '/property-services' || path === '/service-pricing') {
    return config.inspectionService || config.fullManagement;
  }
  return false;
}

export function withRegion(region: RegionCode, href: string): string {
  if (/^https?:\/\//.test(href)) return href;
  const hashAt = href.indexOf('#');
  const hash = hashAt === -1 ? '' : href.slice(hashAt);
  const path = hashAt === -1 ? href : href.slice(0, hashAt);
  const normalized = path === '' || path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  return `/${region}${normalized}${hash}`;
}

export function switchRegionHref(pathname: string, next: RegionCode): string {
  const rest = stripRegion(pathname);
  if (!isPathAllowed(next, rest)) return `/${next}`;
  return withRegion(next, rest);
}

export function registerHref(region: RegionCode): string {
  try {
    const url = new URL(siteLinks.startFree);
    url.searchParams.set('country', region);
    return url.toString();
  } catch {
    return siteLinks.startFree;
  }
}
