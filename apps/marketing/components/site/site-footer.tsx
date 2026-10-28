import { company, siteLinks } from '@/lib/site-links';
import { Wordmark } from '@/components/site/logo';

const COLUMNS = [
  {
    title: 'CROS AI',
    links: [
      { label: 'Software', href: siteLinks.software },
      { label: 'AI Features', href: siteLinks.ai },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Inspection Services', href: siteLinks.inspections },
      { label: 'Full Services', href: siteLinks.fullService },
      { label: 'Pricing', href: siteLinks.pricing },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: siteLinks.about },
      { label: 'Why Us', href: '/#why' },
      { label: 'Contact', href: siteLinks.contact },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Centre', href: siteLinks.help },
      { label: 'FAQs', href: siteLinks.help },
    ],
  },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#194778] text-white">
      <svg
        className="absolute -top-16 left-0 h-16 w-full text-[#194778] md:-top-24 md:h-24"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,72 C220,110 380,18 620,36 C860,54 980,98 1180,58 C1320,30 1380,42 1440,24 L1440,100 L0,100 Z"
        />
      </svg>
      <div className="mx-auto grid w-full max-w-[1480px] gap-12 px-6 py-14 md:px-10 md:py-16 lg:grid-cols-[1.1fr_2fr]">
        <div>
          <a href="/#top" aria-label="CROSSUB home" className="inline-block rounded-md">
            <Wordmark className="h-11 brightness-0 invert" />
          </a>
          <div className="mt-8 space-y-5 text-[15px] leading-[1.6]">
            <div>
              <p className="text-[13px] font-semibold tracking-[0.08em] text-[#7DDCB8] uppercase">Get in touch</p>
              <a className="mt-2 block hover:text-white" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </div>
            <div>
              <p className="text-[13px] font-semibold tracking-[0.08em] text-[#7DDCB8] uppercase">Sales & Onboarding</p>
              <a className="block hover:text-white" href={`mailto:${company.salesEmail}`}>
                {company.salesEmail}
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h2 className="text-[15px] font-semibold">{column.title}</h2>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex min-h-11 items-center text-[15px] text-white/75 hover:text-white sm:min-h-0 sm:py-1"
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
      <div className="mx-auto w-full max-w-[1480px] px-6 pb-8 md:px-10">
        <p className="text-[13px] text-white/60">© {year} CROSSUB. All rights reserved.</p>
      </div>
    </footer>
  );
}
