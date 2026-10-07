import type { Metadata } from 'next';

import { ContactStrip, DualActions, FaqList, FeatureGrid, PageHero, PageSection } from '@/components/site/page-frame';
import { company, siteLinks } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'Property Services | CROSSUB',
  description:
    'On-site rental inspections and day-to-day property management support for agencies, with admin, inspection and maintenance teams on the same records.',
};

export default function PropertyServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="PROPERTY SERVICES"
        title="People on the ground, on the same records as the software."
        actions={
          <DualActions
            primaryHref={siteLinks.bookDemo}
            primaryLabel="Book a demo"
            secondaryHref={siteLinks.pricing}
            secondaryLabel="Service Pricing"
          />
        }
      >
        <p>
          Property Services is the field side of CROSSUB: rental inspections, and property
          management support for the daily rent roll. The agency keeps the landlord relationship.
          There is no lock-in contract.
        </p>
      </PageHero>

      <PageSection eyebrow="TWO WAYS IN" title="Book the visits, or hand over the daily work.">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="flex flex-col rounded-[28px] bg-white/85 p-7 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white sm:p-8">
            <p className="text-[13px] font-bold tracking-[0.14em] text-[#007455]">RENTAL INSPECTION</p>
            <h3 className="mt-3 text-[24px] font-semibold tracking-[-0.02em]">Inspection Only</h3>
            <p className="mt-3 text-[16px] leading-[1.7] text-[#62697C]">
              Ingoing, routine, outgoing and open homes, attended on site. Reports come back with
              the agency’s branding, photos, and notes on repairs and safety. The visit is a paid
              service on its own.
            </p>
            <a className="mt-6 font-semibold text-[#007455]" href={siteLinks.inspections}>
              See inspections
            </a>
          </article>
          <article className="flex flex-col rounded-[28px] bg-[#E7FBF4] p-7 ring-1 ring-[#008F65]/10 sm:p-8">
            <p className="text-[13px] font-bold tracking-[0.14em] text-[#007455]">
              PROPERTY MANAGEMENT SUPPORT
            </p>
            <h3 className="mt-3 text-[24px] font-semibold tracking-[-0.02em]">Full Service</h3>
            <p className="mt-3 text-[16px] leading-[1.7] text-[#62697C]">
              Leasing administration, inspections, maintenance coordination and the admin around
              them, done by a local team. You still approve quotes, leases and anything that goes
              to the landlord.
            </p>
            <a className="mt-6 font-semibold text-[#007455]" href={siteLinks.fullService}>
              See Full Service
            </a>
          </article>
        </div>
      </PageSection>

      <PageSection eyebrow="WHO DOES THE WORK" title="Admin, inspections and maintenance each have a team.">
        <FeatureGrid
          items={[
            {
              title: 'Administration',
              body: 'Repetitive entry, chasing and filing, with the task visible on the property so the agent can see where it sits.',
              tone: 'mint',
            },
            {
              title: 'Inspections',
              body: 'Organising, attending and reporting. Long-distance properties are included in the same workflow as local ones.',
              tone: 'lilac',
            },
            {
              title: 'Maintenance',
              body: 'Tenants lodge the job. The team collects quotes for the agent to take to the landlord, then books the approved work and tracks it.',
              tone: 'cream',
            },
            {
              title: 'Leasing support',
              body: 'Applications, reference checks, and agreement review, prepared so the agency can issue and decide.',
              tone: 'mint',
            },
            {
              title: 'Keys',
              body: 'Bookings and returns are recorded, so the office can see who holds a set.',
              tone: 'lilac',
            },
            {
              title: 'Agent and tenant apps',
              body: 'Property managers use the Agent View app. Tenants use a separate app for the requests that belong with them.',
              tone: 'cream',
            },
          ]}
        />
      </PageSection>

      <PageSection eyebrow="INSPECTION STANDARD" title="A branded report, back on the file.">
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-[28px] bg-white/85 p-7 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white sm:p-8">
            <h3 className="text-[20px] font-semibold">What the report covers</h3>
            <ul className="mt-4 space-y-3 text-[16px] leading-[1.6] text-[#62697C]">
              <li>Agency logo, layout and any extra checks the agency asks for.</li>
              <li>Photos, cleanliness, repair and maintenance issues, and safety hazards.</li>
              <li>The published standard is a returned report within 48 hours.</li>
              <li>The file stays in CROSSUB, and the report can be shared or exported as a PDF.</li>
            </ul>
          </article>
          <article className="rounded-[28px] bg-white/85 p-7 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white sm:p-8">
            <h3 className="text-[20px] font-semibold">Who attends</h3>
            <ul className="mt-4 space-y-3 text-[16px] leading-[1.6] text-[#62697C]">
              <li>Inspectors are trained, know the relevant legislation, and hold a property management certificate.</li>
              <li>They are insured, and they are booked to arrive early.</li>
              <li>Cross Inspect is the in-house app: photo capture, phrase library, online editing and digital signing.</li>
              <li>The team is local. The work is not sent offshore.</li>
            </ul>
          </article>
        </div>
      </PageSection>

      <PageSection eyebrow="RESPONSE" title="Urgent jobs and ordinary jobs have different clocks.">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-[28px] bg-[#FFF8E8] p-7 ring-1 ring-[#E6C56A]/30">
            <p className="text-[13px] font-bold tracking-[0.14em] text-[#8A6414]">URGENT</p>
            <p className="mt-3 text-[40px] leading-none font-semibold tracking-[-0.03em] text-[#171E4B]">
              24–48 hours
            </p>
            <p className="mt-3 text-[16px] leading-[1.65] text-[#62697C]">
              The published aim for urgent repair requests. Call{' '}
              <a className="font-semibold text-[#007455]" href={`tel:${company.emergencyTel}`}>
                {company.emergencyDisplay}
              </a>
              .
            </p>
          </article>
          <article className="rounded-[28px] bg-white/85 p-7 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white">
            <p className="text-[13px] font-bold tracking-[0.14em] text-[#007455]">NON-URGENT</p>
            <p className="mt-3 text-[40px] leading-none font-semibold tracking-[-0.03em] text-[#171E4B]">
              7 business days
            </p>
            <p className="mt-3 text-[16px] leading-[1.65] text-[#62697C]">
              The published aim for non-urgent maintenance once the request is in. Quotes still go
              to the agent before the work is booked.
            </p>
          </article>
        </div>
      </PageSection>

      <PageSection eyebrow="HANDOVER" title="What we ask for when a property comes across.">
        <FaqList
          items={[
            {
              question: 'Which documents does the agency provide?',
              answer: (
                <p>
                  The management agreement, the tenancy agreement and any extensions, the tenancy
                  ledger, tenant details, and an ingoing inspection report. Routine reports are
                  useful when you have them. We also take your document templates, email signature
                  and agency logo so notices go out in your branding.
                </p>
              ),
            },
            {
              question: 'How do I book an inspection?',
              answer: (
                <p>
                  Email{' '}
                  <a className="font-semibold text-[#007455]" href={`mailto:${company.salesEmail}`}>
                    {company.salesEmail}
                  </a>{' '}
                  with the property and the inspection type, or book a demo and we will set the
                  first visit up with you.
                </p>
              ),
            },
            {
              question: 'Where are property services available?',
              answer: (
                <p>
                  Field work is arranged from the North Sydney office at {company.street},{' '}
                  {company.locality}. The published base is Greater Sydney. Tell us the suburb when
                  you enquire and we confirm cover before a visit is booked. The software itself is
                  what an agency in another city logs in to.
                </p>
              ),
            },
            {
              question: 'Can CROSSUB collect the bond?',
              answer: (
                <p>
                  No. The agent or the tenant lodges the bond through Rental Bonds Online. An
                  outgoing inspection supports the claim. It does not move the money.
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
