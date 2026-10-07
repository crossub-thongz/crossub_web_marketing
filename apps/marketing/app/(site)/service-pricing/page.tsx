import type { Metadata } from 'next';

import { ContactStrip, DualActions, FaqList, FeatureGrid, PageHero, PageSection } from '@/components/site/page-frame';
import { company, siteLinks } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'Service Pricing | CROSSUB',
  description:
    'Full Service is 30% of the agency’s property management fee. Inspection Only is a separate paid visit. The software stays free.',
};

export default function ServicePricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="SERVICE PRICING"
        title="A share of the fee you already charge, or a visit on its own."
        actions={
          <DualActions
            primaryHref={siteLinks.bookDemo}
            primaryLabel="Book a demo"
            secondaryHref={siteLinks.propertyServices}
            secondaryLabel="Property Services"
          />
        }
      >
        <p>
          The software is free. People are paid. Full Service is a percentage of your property
          management fee. Inspection Only is booked as a visit, without taking on the rest of the
          rent roll.
        </p>
      </PageHero>

      <PageSection eyebrow="PRICING MODEL" title="Two paid services.">
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-[28px] bg-[#E7FBF4] p-7 ring-1 ring-[#008F65]/15 sm:p-8">
            <p className="text-[13px] font-bold tracking-[0.14em] text-[#007455]">FULL SERVICE</p>
            <p className="mt-4 text-[72px] leading-none font-semibold tracking-[-0.04em] text-[#008F65]">
              30%
            </p>
            <p className="mt-3 text-[18px] font-semibold">of your property management fee</p>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#62697C]">
              If your agency charges a landlord 5% + GST, CROSSUB’s fee is 1.5% + GST. That is 30%
              of 5%.
            </p>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#62697C]">
              We partner with agencies whose own management fee to landlords is at least 4% + GST,
              so the split stays workable for both sides.
            </p>
            <a className="mt-6 inline-flex font-semibold text-[#007455]" href={siteLinks.fullService}>
              What Full Service includes
            </a>
          </article>
          <article className="rounded-[28px] bg-white/85 p-7 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white sm:p-8">
            <p className="text-[13px] font-bold tracking-[0.14em] text-[#5C4B8A]">INSPECTION ONLY</p>
            <p className="mt-4 text-[40px] leading-[1.05] font-semibold tracking-[-0.03em] text-[#171E4B]">
              Priced per visit
            </p>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#62697C]">
              Ingoing, routine, outgoing and open inspections, completed for the agency without the
              Full Service percentage. This is the path when you want the inspector and the report,
              and you keep the rest of the management.
            </p>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#62697C]">
              Send the property and the inspection type to{' '}
              <a className="font-semibold text-[#007455]" href={`mailto:${company.salesEmail}`}>
                {company.salesEmail}
              </a>
              .
            </p>
            <a className="mt-6 inline-flex font-semibold text-[#007455]" href={siteLinks.inspections}>
              What an inspection includes
            </a>
          </article>
        </div>
      </PageSection>

      <PageSection eyebrow="WHAT'S INCLUDED" title="Systems and field work, with the agency still in control.">
        <FeatureGrid
          items={[
            {
              title: 'Ingoing inspections',
              body: 'Condition reports before move-in, with photos and the checks the file needs at the start of the lease.',
              tone: 'mint',
            },
            {
              title: 'Outgoing inspections',
              body: 'Vacate reporting for the bond conversation. The bond itself is lodged by the agent or the tenant.',
              tone: 'lilac',
            },
            {
              title: 'Routine inspections',
              body: 'Scheduled checks through the tenancy, written as a clear branded report.',
              tone: 'cream',
            },
            {
              title: 'Open inspections',
              body: 'On-site staffing and a report for the open home.',
              tone: 'mint',
            },
            {
              title: 'Leasing support',
              body: 'Applications, reference checks, and agreement review, ready for the agent to issue.',
              tone: 'lilac',
            },
            {
              title: 'Maintenance coordination',
              body: 'The job is logged, quotes are collected, and approved work is tracked through to completion.',
              tone: 'cream',
            },
            {
              title: 'System and agent app',
              body: 'The portfolio, tasks, and SMS and email history stay on the property for the agent to read.',
              tone: 'mint',
            },
            {
              title: 'Key management',
              body: 'Key bookings and returns are recorded against the property.',
              tone: 'lilac',
            },
            {
              title: 'Free software',
              body: 'The property management software stays free whether or not you add a paid service.',
              tone: 'cream',
            },
          ]}
        />
        <p className="mt-6 text-[16px] leading-[1.65] text-[#62697C]">
          Leasing, maintenance, keys and the day-to-day admin sit inside Full Service. Inspection
          Only covers the visit and the report. Both use the same property record.
        </p>
      </PageSection>

      <PageSection eyebrow="HOW THE FEE IS READ" title="One management fee, split.">
        <ol className="grid gap-4 md:grid-cols-3">
          {[
            ['1', 'You set the landlord fee', 'The percentage on the management agreement is yours. CROSSUB’s Full Service fee is calculated from that number.'],
            ['2', 'We take 30% of it', 'A 5% + GST management fee becomes 1.5% + GST to CROSSUB. A fee under 4% + GST is outside the partnership.'],
            ['3', 'Inspection Only stands apart', 'A single inspection is not billed as 30% of the management fee. Ask sales for that visit.'],
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

      <PageSection eyebrow="QUESTIONS" title="Before you book.">
        <FaqList
          items={[
            {
              question: 'Is the software included in the 30%?',
              answer: (
                <p>
                  The software is free on its own. The 30% is the Full Service team: leasing
                  support, inspections, maintenance coordination and admin on the properties you
                  hand over. You can use the software without either paid service.
                </p>
              ),
            },
            {
              question: 'Is there a lock-in?',
              answer: (
                <p>
                  No lock-in contract. Start on the free software, add Inspection Only for visits,
                  or move a rent roll onto Full Service when you want the daily work taken on.
                </p>
              ),
            },
            {
              question: 'How are repairs quoted?',
              answer: (
                <p>
                  The maintenance team asks trusted tradies for quotes — typically three — and
                  sends them to the agent. After the landlord approves, CROSSUB books the work.
                  Urgent repairs are called through on{' '}
                  <a className="font-semibold text-[#007455]" href={`tel:${company.emergencyTel}`}>
                    {company.emergencyDisplay}
                  </a>
                  .
                </p>
              ),
            },
            {
              question: 'Who do I ask for a price on one inspection?',
              answer: (
                <p>
                  Email{' '}
                  <a className="font-semibold text-[#007455]" href={`mailto:${company.salesEmail}`}>
                    {company.salesEmail}
                  </a>{' '}
                  or call{' '}
                  <a className="font-semibold text-[#007455]" href={`tel:${company.phoneTel}`}>
                    {company.phoneDisplay}
                  </a>
                  . Include the suburb and whether it is ingoing, routine, outgoing or an open home.
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
