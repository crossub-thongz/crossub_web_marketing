import type { Metadata } from 'next';

import { ContactStrip, DualActions, FaqList, FeatureGrid, PageHero, PageSection } from '@/components/site/page-frame';
import { company, siteLinks } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'Full Service | CROSSUB',
  description:
    'Paid day-to-day property management support for agencies: leasing, inspections, maintenance and admin, on the same CROSSUB records. Fee is 30% of the agency’s PM fee.',
};

export default function FullServicePage() {
  return (
    <main>
      <PageHero
        eyebrow="PAID SERVICE"
        title="The daily rent roll, with your agency still in charge."
        actions={
          <DualActions
            primaryHref={siteLinks.bookDemo}
            primaryLabel="Book a demo"
            secondaryHref={siteLinks.inspections}
            secondaryLabel="Inspection Only"
          />
        }
      >
        <p>
          Full Service is paid support for day-to-day property management. Leasing, inspections,
          maintenance and admin are handled by a local team, on the same records as the free
          software. Landlord conversations stay with your agency. There is no lock-in contract.
        </p>
      </PageHero>

      <PageSection eyebrow="THE FEE" title="30% of the management fee you already charge.">
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="rounded-[28px] bg-[#E7FBF4] p-7 ring-1 ring-[#008F65]/10 sm:p-8">
            <p className="text-[13px] font-bold tracking-[0.14em] text-[#007455]">FULL SERVICE</p>
            <p className="mt-3 text-[64px] leading-none font-semibold tracking-[-0.04em] text-[#008F65]">
              30%
            </p>
            <p className="mt-3 text-[16px] font-semibold">of your property management fee</p>
          </article>
          <article className="rounded-[28px] bg-white/85 p-7 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white sm:p-8">
            <p className="text-[16px] leading-[1.7] text-[#62697C]">
              If your agency charges a landlord 5% + GST, CROSSUB’s fee is 1.5% + GST. That is 30%
              of 5%, not a second full management fee.
            </p>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#62697C]">
              We partner with agencies whose own management fee to landlords is at least 4% + GST.
              That keeps the split workable for both sides. Inspection Only is a separate paid
              visit, not this percentage. The same figures are on{' '}
              <a className="font-semibold text-[#007455]" href={siteLinks.pricing}>
                Service Pricing
              </a>
              .
            </p>
          </article>
        </div>
      </PageSection>

      <PageSection eyebrow="WHAT THE TEAM DOES" title="Departments, not a general inbox.">
        <FeatureGrid
          items={[
            {
              title: 'Leasing',
              body: 'Applications, reference checks, agreement checks and renewals, prepared so the agent can issue and decide.',
              tone: 'mint',
              icon: '/site/png/icon-document.png',
            },
            {
              title: 'Inspections',
              body: 'Ingoing, routine, outgoing and open inspections organised, attended and reported, including long-distance properties.',
              tone: 'lilac',
              icon: '/site/png/icon-inspection.png',
            },
            {
              title: 'Maintenance',
              body: 'The tenant reports the job. The team gathers quotes for the agent to take to the landlord, then arranges the approved work.',
              tone: 'cream',
              icon: '/site/png/icon-maintenance.png',
            },
            {
              title: 'Administration',
              body: 'The repetitive entry, chasing and filing, done by people who work in residential property management.',
              tone: 'mint',
              icon: '/site/png/icon-list.png',
            },
            {
              title: 'Tenant contact',
              body: 'Messages can go out under the agency brand. The SMS and email history stays on the property for the agent to read.',
              tone: 'lilac',
              icon: '/site/png/icon-people.png',
            },
            {
              title: 'Keys',
              body: 'Key bookings and returns are recorded, so the office can see who has a set.',
              tone: 'cream',
              icon: '/site/png/icon-key.png',
            },
          ]}
        />
      </PageSection>

      <PageSection eyebrow="HOW A JOB MOVES" title="You approve. The team carries it out.">
        <ol className="grid gap-4 md:grid-cols-3">
          {[
            ['1', 'Hand the property over', 'Agreement, lease and extensions, ledger, tenant details, an ingoing report, your templates, email signature and logo.'],
            ['2', 'Work lands in the right team', 'Admin, leasing, inspections and maintenance each have people for that work. Urgent repairs use a separate line.'],
            ['3', 'You stay the decision maker', 'Quotes, lease decisions and anything for the landlord come back to the agency. The Agent Portal shows the live task.'],
          ].map(([step, title, body]) => (
            <li
              key={step}
              className="rounded-[24px] bg-white/85 p-6 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white"
            >
              <span className="grid size-10 place-items-center rounded-full bg-[#E0F7EE] text-[14px] font-bold text-[#007455]">
                {step}
              </span>
              <h3 className="mt-4 text-[20px] font-semibold tracking-[-0.02em]">{title}</h3>
              <p className="mt-2 text-[16px] leading-[1.65] text-[#62697C]">{body}</p>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection eyebrow="LIMITS" title="What we will not take over.">
        <FaqList
          items={[
            {
              question: 'Can CROSSUB collect the bond?',
              answer: (
                <p>
                  No. CROSSUB does not collect or hold the rental bond. The agent or the tenant
                  lodges it through Rental Bonds Online. An outgoing inspection can support the
                  claim. It does not move the money.
                </p>
              ),
            },
            {
              question: 'How are repairs quoted?',
              answer: (
                <p>
                  The maintenance team asks trusted tradies for quotes — typically three — and
                  sends them to the agent. The agent takes the quote to the landlord. After
                  approval, CROSSUB books the work and watches it through. Urgent repairs are
                  called through on{' '}
                  <a className="font-semibold text-[#007455]" href={`tel:${company.emergencyTel}`}>
                    {company.emergencyDisplay}
                  </a>
                  .
                </p>
              ),
            },
            {
              question: 'Do you speak to landlords?',
              answer: (
                <p>
                  No. Landlord contact stays with your agency. CROSSUB works behind the brand, as
                  part of the operating team, and the team is local rather than offshore.
                </p>
              ),
            },
            {
              question: 'Is there a lock-in?',
              answer: (
                <p>
                  No lock-in contract. You can use the free software on its own, add Inspection
                  Only for visits, or use Full Service for the daily rent roll.
                </p>
              ),
            },
          ]}
        />
      </PageSection>

      <ContactStrip />
    </main>
  );
}
