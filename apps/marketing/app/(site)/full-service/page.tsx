import type { Metadata } from 'next';

import { ContactStrip, DualActions, FaqList, FeatureGrid, PageHero, PageSection } from '@/components/site/page-frame';
import { company, siteLinks } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'Full Service | Crossub',
  description:
    'Paid day-to-day property management support for agencies. Same platform and same records, with Crossub people handling the operational work.',
};

export default function FullServicePage() {
  return (
    <main>
      <PageHero
        eyebrow="PAID SERVICE"
        title="Day-to-day support, on the same records."
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
          Full Service is paid support for your agency’s daily property management. Start with the
          free software, then add our team when the portfolio needs more hands. You keep control of
          the agency and the landlord relationship.
        </p>
      </PageHero>

      <PageSection eyebrow="WHAT THE TEAM HANDLES" title="An extension of the agency, not a replacement.">
        <FeatureGrid
          items={[
            {
              title: 'Administration',
              body: 'Repetitive admin, data entry and follow-up, done by people who work in property management every day.',
              tone: 'mint',
            },
            {
              title: 'Leasing',
              body: 'Applications, agreements and renewals, coordinated with the property record.',
              tone: 'lilac',
            },
            {
              title: 'Maintenance',
              body: 'Tenants report a job, quotes are gathered for the agent, and the approved work is arranged and watched.',
              tone: 'cream',
            },
            {
              title: 'Inspections',
              body: 'Ingoing, routine and outgoing visits can sit inside the same service, with the report filed on the property.',
              tone: 'mint',
            },
            {
              title: 'Tenant communication',
              body: 'Messages go out under the agency’s brand. SMS and email history stays on the record for the agent to see.',
              tone: 'lilac',
            },
            {
              title: 'You stay the decision maker',
              body: 'Approvals, landlord conversations and the client relationship remain with your agency.',
              tone: 'cream',
            },
          ]}
        />
      </PageSection>

      <PageSection eyebrow="HOW IT WORKS" title="Same platform. Same data. More support.">
        <ol className="grid gap-4 md:grid-cols-3">
          {[
            ['1', 'Start with the software', 'Your properties and history live in Crossub before any paid service is added.'],
            ['2', 'Hand over what we need', 'Agreements, ledgers, tenant details and your templates, so the team works in your way.'],
            ['3', 'Watch the work', 'Use the agent login to see tasks, reports and messages, and to approve what needs you.'],
          ].map(([step, title, body]) => (
            <li
              key={step}
              className="rounded-[24px] bg-white/85 p-6 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white"
            >
              <span className="grid size-10 place-items-center rounded-full bg-[#E0F7EE] text-[14px] font-bold text-[#007455]">
                {step}
              </span>
              <h3 className="mt-4 text-[18px] font-semibold">{title}</h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-[#3E4660]">{body}</p>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection eyebrow="QUESTIONS" title="Clear limits, so nothing is assumed.">
        <FaqList
          items={[
            {
              question: 'Can Crossub collect the bond?',
              answer: (
                <p>
                  No. Crossub does not collect the rental bond. The agent or the tenant lodges it
                  through Rental Bonds Online.
                </p>
              ),
            },
            {
              question: 'How does maintenance get approved?',
              answer: (
                <p>
                  When a repair request comes in, the maintenance team gathers quotes from tradies
                  for the agent to take to the landlord. Once it is approved, Crossub arranges the
                  job and follows it through.
                </p>
              ),
            },
            {
              question: 'What if a repair is urgent?',
              answer: (
                <p>
                  Call the urgent repairs line on{' '}
                  <a className="font-semibold text-[#007455]" href={`tel:${company.emergencyTel}`}>
                    {company.emergencyDisplay}
                  </a>
                  . The team helps tenants with those enquiries and keeps the agency in the loop.
                </p>
              ),
            },
            {
              question: 'Will landlords be contacted by Crossub?',
              answer: (
                <p>
                  Landlord conversations stay with your agency. Crossub works behind the agency, as
                  part of the operating team.
                </p>
              ),
            },
            {
              question: 'Is Full Service included with the free software?',
              answer: (
                <p>
                  No. The software is free. Full Service is a paid team that supports the
                  day-to-day work when you choose to add it.
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
