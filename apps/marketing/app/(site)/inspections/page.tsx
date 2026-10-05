import type { Metadata } from 'next';

import { ContactStrip, DualActions, FaqList, FeatureGrid, PageHero, PageSection } from '@/components/site/page-frame';
import { company, siteLinks } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'Inspection Only | Crossub',
  description:
    'A paid on-site inspection service for agencies. Book Crossub inspectors, or use the inspection tools yourself, with photos and reports in one place.',
};

export default function InspectionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="PAID SERVICE"
        title="Every inspection, connected to the property."
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
          Inspection Only is a paid service. Let our inspectors handle the visits while you manage
          the portfolio, or use the same tools yourself. Photos, reports and follow-up stay in one
          place.
        </p>
      </PageHero>

      <PageSection eyebrow="ON SITE" title="Ingoing, routine, outgoing and open inspections.">
        <FeatureGrid
          items={[
            {
              title: 'The visit',
              body: 'Trained inspectors attend with a property management certificate, local knowledge, and enough time to look properly.',
              tone: 'lilac',
            },
            {
              title: 'The record',
              body: 'Photos and notes come back against the property, with a report your agency can read and share.',
              tone: 'mint',
            },
            {
              title: 'Your branding',
              body: 'Reports can carry your agency’s logo and layout, so the document still looks like it came from you.',
              tone: 'cream',
            },
            {
              title: 'More than cleanliness',
              body: 'Inspectors look for repair, maintenance and safety issues, not only whether the property is tidy.',
              tone: 'mint',
            },
            {
              title: 'Do it yourself',
              body: 'Agencies can also run inspections in the software and keep the same photos, reports and follow-up.',
              tone: 'lilac',
            },
            {
              title: 'AI-assisted summaries',
              body: 'AI can draft a summary from the photos and notes. Your team still reviews what goes out.',
              tone: 'cream',
            },
          ]}
        />
      </PageSection>

      <PageSection eyebrow="QUESTIONS" title="Booking an inspection.">
        <FaqList
          items={[
            {
              question: 'How do I book an inspection?',
              answer: (
                <p>
                  Book a demo and we will set up the first visit with you, or email{' '}
                  <a className="font-semibold text-[#007455]" href={`mailto:${company.salesEmail}`}>
                    {company.salesEmail}
                  </a>
                  . The next inspection is taken by an experienced inspector.
                </p>
              ),
            },
            {
              question: 'Where do you attend?',
              answer: (
                <p>
                  Our head office is in North Sydney. We support agencies in New South Wales,
                  Victoria and Queensland, and arrange on-site inspections with the team from there.
                </p>
              ),
            },
            {
              question: 'Is Inspection Only free?',
              answer: (
                <p>
                  No. The property management software is free. Inspection Only is a paid service
                  you add when you want someone from Crossub on site.
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
