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
  inspections: '/inspections',
  fullService: '/full-service',
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
} as const;

export const company = {
  email: 'info@crossub.com.au',
  salesEmail: 'sales@crossub.com.au',
  phoneDisplay: '+61 2 5023 5015',
  phoneTel: '+61250235015',
  emergencyDisplay: '1300 399 836',
  emergencyTel: '1300399836',
  street: '104/66 Berry Street',
  locality: 'North Sydney NSW 2060',
} as const;

export function isExternalHref(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://');
}
