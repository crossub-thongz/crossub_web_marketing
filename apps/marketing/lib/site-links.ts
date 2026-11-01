/**
 * Public site destinations. Marketing pages live on this site.
 * Log in and Start for free open the agent product, not the old marketing site.
 */
const env = (name: string, fallback: string): string =>
  process.env[name]?.trim() || fallback;

export const siteLinks = {
  home: '/',
  software: '/software',
  ai: '/software#ai',
  propertyServices: '/property-services',
  inspections: '/inspections',
  fullService: '/full-service',
  pricing: '/service-pricing',
  about: '/about',
  help: '/help',
  contact: '/help#contact',
  privacy: '/privacy',
  bookDemo: '/book-a-demo',
  login: env(
    'NEXT_PUBLIC_LOGIN_URL',
    'https://crossub-mobile-agent-prod.onrender.com/login',
  ),
  startFree: env(
    'NEXT_PUBLIC_REGISTER_URL',
    'https://crossub-mobile-agent-prod.onrender.com/register',
  ),
  tenantPortal: env('NEXT_PUBLIC_TENANT_PORTAL_URL', 'https://tenant.crossub.com.au/login'),
  /** Region-specific sign-in. Falls back to the shared portal and adds ?country=. */
  agentLoginAu: env('NEXT_PUBLIC_AGENT_LOGIN_URL_AU', ''),
  agentLoginNz: env('NEXT_PUBLIC_AGENT_LOGIN_URL_NZ', ''),
  tenantLoginAu: env('NEXT_PUBLIC_TENANT_PORTAL_URL_AU', ''),
  tenantLoginNz: env('NEXT_PUBLIC_TENANT_PORTAL_URL_NZ', ''),
  appStore: env('NEXT_PUBLIC_APP_STORE_URL', 'https://testflight.apple.com/join/mT8qJ9aR'),
  googlePlay: env(
    'NEXT_PUBLIC_GOOGLE_PLAY_URL',
    'https://play.google.com/apps/internaltest/4699912119089397915',
  ),
} as const;

export const company = {
  email: 'info@crossub.com.au',
  salesEmail: 'sales@crossub.com.au',
  street: '104/66 Berry Street',
  locality: 'North Sydney NSW 2060',
} as const;

export function isExternalHref(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://');
}

function withCountry(href: string, region: 'AU' | 'NZ'): string {
  try {
    const url = new URL(href);
    url.searchParams.set('country', region);
    return url.toString();
  } catch {
    return href;
  }
}

/** Managing Agent and Tenant sign-in for the region selected on the public site. */
export function loginHrefs(region: 'AU' | 'NZ' | 'UK'): { agent: string; tenant: string } {
  const code = region === 'NZ' ? 'NZ' : 'AU';
  const agent =
    (code === 'NZ' ? siteLinks.agentLoginNz : siteLinks.agentLoginAu) || siteLinks.login;
  const tenant =
    (code === 'NZ' ? siteLinks.tenantLoginNz : siteLinks.tenantLoginAu) || siteLinks.tenantPortal;
  return { agent: withCountry(agent, code), tenant: withCountry(tenant, code) };
}
