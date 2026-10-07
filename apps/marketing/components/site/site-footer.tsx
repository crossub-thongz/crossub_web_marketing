import { isExternalHref, siteLinks } from '@/lib/site-links';
import { Wordmark } from '@/components/site/logo';

const COLUMNS = [
  {
    title: 'Software',
    links: [
      { label: 'Overview', href: siteLinks.software },
      { label: 'AI features', href: siteLinks.ai },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Inspection Only', href: siteLinks.inspections },
      { label: 'Full Service', href: siteLinks.fullService },
      { label: 'Service Pricing', href: siteLinks.pricing },
      { label: 'Property Services', href: siteLinks.propertyServices },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: siteLinks.about },
      { label: 'Contact', href: siteLinks.contact },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Centre', href: siteLinks.help },
      { label: 'Privacy Policy', href: siteLinks.privacy },
    ],
  },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F4EEFF]">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-14 md:px-6 md:py-16 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <a href="/#top" aria-label="CROSSUB home" className="rounded-md">
            <Wordmark className="h-11" />
          </a>
          <p className="mt-4 max-w-xs text-[16px] leading-[1.65] text-[#62697C]">
            Property management software with real people behind it.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h2 className="text-[13px] font-semibold tracking-[0.08em] text-[#171E4B] uppercase">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex min-h-11 items-center text-[15px] text-[#62697C] hover:text-[#171E4B] sm:min-h-0 sm:py-1"
                      {...(isExternalHref(link.href) ? { rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-[1600px] px-5 pb-8 md:px-6">
        <p className="text-[13px] text-[#62697C]">© {year} CROSSUB.</p>
      </div>
    </footer>
  );
}
