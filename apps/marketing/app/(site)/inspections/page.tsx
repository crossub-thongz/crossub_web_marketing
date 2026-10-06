import type { Metadata } from 'next';

import { ContactStrip, DualActions, FaqList, FeatureGrid, PageHero, PageSection } from '@/components/site/page-frame';
import { company, siteLinks } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'Inspection Only | CROSSUB',
  description:
    'Paid on-site ingoing, routine, outgoing and open inspections for agencies, with photos, branded reports and follow-up in the CROSSUB platform.',
};

export default function InspectionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="PAID SERVICE"
        title="Inspections done on site, filed on the property."
        actions={
          <DualActions
            primaryHref={siteLinks.bookDemo}
            primaryLabel="Book a demo"
            secondaryHref={siteLinks.software}
            secondaryLabel="See the software"
          />
        }
      >
        <p>
          Inspection Only is a paid visit. CROSSUB inspectors attend ingoing, routine, outgoing and
          open inspections, then the photos, notes and report stay on the property. Your agency can
          also run the same tools without booking a CROSSUB inspector. It sits under{' '}
          <a className="font-semibold text-[#007455]" href={siteLinks.propertyServices}>
            Property Services
          </a>
          , and the fee is on{' '}
          <a className="font-semibold text-[#007455]" href={siteLinks.pricing}>
            Service Pricing
          </a>
          .
        </p>
      </PageHero>

      <PageSection eyebrow="FOUR VISITS" title="The inspections agencies actually book.">
        <FeatureGrid
          items={[
            {
              title: 'Ingoing',
              body: 'A condition report before the tenant moves in, with photos and the checks the file needs at the start of the lease.',
              tone: 'mint',
            },
            {
              title: 'Routine',
              body: 'Scheduled checks through the tenancy, written up as a clear report the property manager can send on.',
              tone: 'lilac',
            },
            {
              title: 'Outgoing',
              body: 'The vacate inspection, with the condition recorded for the bond conversation. Lodging the bond itself stays with the agent or the tenant.',
              tone: 'cream',
            },
            {
              title: 'Open homes',
              body: 'On-the-ground staffing for an open inspection, with the notes brought back into the same system.',
              tone: 'mint',
            },
            {
              title: 'Your branding',
              body: 'Logo, layout and any extra checks you ask for can be set to the agency, so the report still looks like yours.',
              tone: 'lilac',
            },
            {
              title: 'More than tidy',
              body: 'Inspectors look for repair, maintenance and safety issues, not only whether the property has been cleaned.',
              tone: 'cream',
            },
          ]}
        />
      </PageSection>

      <PageSection eyebrow="ON THE DAY" title="Who attends, and what comes back.">
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-[28px] bg-white/85 p-7 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white sm:p-8">
            <h3 className="text-[22px] font-semibold">The inspector</h3>
            <ul className="mt-4 space-y-3 text-[16px] leading-[1.65] text-[#3E4660]">
              <li>Trained on the relevant tenancy rules, and holding a property management certificate.</li>
              <li>Insured for the work, and expected to treat the tenant’s home with care.</li>
              <li>Asked to arrive early, so the visit starts on time.</li>
              <li>Clear about what sits with the tenant and what sits with the landlord.</li>
            </ul>
          </article>
          <article className="rounded-[28px] bg-[#E7FBF4] p-7 ring-1 ring-[#008F65]/10 sm:p-8">
            <h3 className="text-[22px] font-semibold">The report</h3>
            <ul className="mt-4 space-y-3 text-[16px] leading-[1.65] text-[#3E4660]">
              <li>Photos and notes captured in Cross Inspect, then edited online.</li>
              <li>Layouts and phrases set for the agency, exported as a PDF.</li>
              <li>Digital signing, then sharing back to the agent.</li>
              <li>Stored with the property, alongside maintenance and leasing, not in a separate folder.</li>
            </ul>
          </article>
        </div>
        <p className="mt-6 max-w-3xl text-[15px] leading-[1.65] text-[#3E4660]">
          The visit itself runs in the inspector app: the job, directions, and an open, ingoing,
          outgoing or routine inspection. The agent reads the result in the Agent Portal. Published
          service standard: routine and vacate reports are returned within 48 hours. AI can draft a
          summary from the photos and notes. Someone at the agency still reviews what is sent.
        </p>
      </PageSection>

      <PageSection eyebrow="QUESTIONS" title="Booking, coverage and cost.">
        <FaqList
          items={[
            {
              question: 'How do I book an inspection?',
              answer: (
                <p>
                  Book a demo and we will set the first visit with you, or email{' '}
                  <a className="font-semibold text-[#007455]" href={`mailto:${company.salesEmail}`}>
                    {company.salesEmail}
                  </a>
                  . An experienced inspector takes the next one.
                </p>
              ),
            },
            {
              question: 'Where do inspectors attend?',
              answer: (
                <p>
                  On-site inspections are arranged from the North Sydney office,{' '}
                  {company.street}, {company.locality}. The team supports agencies in New South
                  Wales, Victoria and Queensland. Tell us the suburb when you book and we will
                  confirm we can attend.
                </p>
              ),
            },
            {
              question: 'Is this included with the free software?',
              answer: (
                <p>
                  No. The software and the inspection tools are free to use yourselves. Sending a
                  CROSSUB inspector is Inspection Only, and that visit is paid. It is not the Full
                  Service fee.
                </p>
              ),
            },
            {
              question: 'Do you lodge the bond after an outgoing inspection?',
              answer: (
                <p>
                  No. The outgoing report supports the bond conversation. The agent or the tenant
                  lodges and releases the bond through Rental Bonds Online. CROSSUB does not
                  collect it.
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
