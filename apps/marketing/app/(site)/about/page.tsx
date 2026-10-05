import type { Metadata } from 'next';

import { ContactStrip, DualActions, PageHero, PageSection } from '@/components/site/page-frame';
import { siteLinks } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'About Crossub',
  description:
    'Crossub is an Australian property company founded in 2018. Free property management software, with six years of Full Service experience behind it.',
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="ABOUT CROSSUB"
        title="Practical software, backed by experienced people."
        actions={
          <DualActions
            primaryHref={siteLinks.startFree}
            primaryLabel="Start for free"
            secondaryHref={siteLinks.bookDemo}
            secondaryLabel="Book a demo"
          />
        }
      >
        <p>
          Crossub was founded in Australia in 2018. The software is free for agencies. The six
          years behind it are six years of Full Service work, not six years of a software product.
        </p>
      </PageHero>

      <PageSection eyebrow="THE COMPANY" title="Built beside agencies, not instead of them.">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[28px] bg-white/85 p-7 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white sm:p-8">
            <p className="text-[16px] leading-[1.7] text-[#3E4660]">
              What started as a local property team in New South Wales now supports agencies in
              NSW, Victoria and Queensland, with work in Europe and a growing presence in New
              Zealand. The point has stayed the same: agents keep the client relationship, and
              Crossub takes on the operational load they choose to hand over.
            </p>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#3E4660]">
              The platform holds the portfolio, leasing, maintenance and inspection records. AI
              helps prepare the admin. People who have done the day-to-day work sit behind the
              paid services.
            </p>
          </article>
          <article className="rounded-[28px] bg-[#E7FBF4] p-7 ring-1 ring-[#008F65]/10 sm:p-8">
            <p className="text-[13px] font-bold tracking-[0.14em] text-[#007455]">FULL SERVICE</p>
            <p className="mt-3 text-[72px] leading-none font-semibold tracking-[-0.05em] text-[#008F65]">
              6
            </p>
            <p className="mt-2 text-[16px] font-semibold">years of Full Service experience</p>
            <p className="mt-3 text-[15px] leading-relaxed text-[#3E4660]">
              That figure is the team’s Full Service work. It is not a claim that the software has
              been on the market for six years.
            </p>
          </article>
        </div>
      </PageSection>

      <PageSection eyebrow="HOW WE WORK" title="Four things we hold to.">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ['Partnership', 'We support the agency as an extension of the team. We do not take the landlord relationship.'],
            ['Transparency', 'Agents can see the tasks, reports and message history, and they approve what needs a decision.'],
            ['Care with the work', 'Notices, repairs and inspections follow the tenancy rules of the state the property is in.'],
            ['A clear offer', 'Software is free. Inspection Only and Full Service are paid, and they are labelled that way.'],
          ].map(([title, body]) => (
            <article
              key={title}
              className="rounded-[24px] bg-white/85 p-6 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white"
            >
              <h3 className="text-[18px] font-semibold">{title}</h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-[#3E4660]">{body}</p>
            </article>
          ))}
        </div>
      </PageSection>

      <ContactStrip />
    </main>
  );
}
