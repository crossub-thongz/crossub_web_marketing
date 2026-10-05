/**
 * Destinations for the public homepage. Change these in one place
 * (or with NEXT_PUBLIC_* env vars) when a real page moves.
 * Hash links are used only where no live page exists yet.
 */
const env = (name: string, fallback: string): string =>
  process.env[name]?.trim() || fallback;

export const siteLinks = {
  login: env('NEXT_PUBLIC_LOGIN_URL', 'https://agent.crossub.com.au/'),
  startFree: env(
    'NEXT_PUBLIC_REGISTER_URL',
    'https://crossub-mobile-agent-prod.onrender.com/register',
  ),
  bookDemo: env(
    'NEXT_PUBLIC_DEMO_URL',
    'https://crossub-web-prod.onrender.com/book-with-expert',
  ),
  inspections: env(
    'NEXT_PUBLIC_INSPECTIONS_URL',
    'https://www.crossub.com.au/rental_inspection/',
  ),
  fullService: env(
    'NEXT_PUBLIC_FULL_SERVICE_URL',
    'https://www.crossub.com.au/property_management_support/',
  ),
  about: env('NEXT_PUBLIC_ABOUT_URL', 'https://www.crossub.com.au/about-us/'),
  help: env('NEXT_PUBLIC_HELP_URL', 'https://www.crossub.com.au/help_center/'),
  privacy: env(
    'NEXT_PUBLIC_PRIVACY_URL',
    'https://www.crossub.com.au/privacy_policy/',
  ),
  contact: 'mailto:info@crossub.com.au',
  software: '/#solutions',
  ai: '/#ai-steps',
  support: '/#support',
  inspectionsSection: '/#inspections',
  experience: '/#experience',
} as const;

export function isExternalHref(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://');
}
