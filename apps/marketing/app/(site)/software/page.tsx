import type { Metadata } from 'next';

import { ContactStrip, DualActions, FeatureGrid, PageHero, PageSection } from '@/components/site/page-frame';
import { siteLinks } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'Free property management software | Crossub',
  description:
    'Free property management software for your agency, with AI that drafts and organises the work while your team stays in control.',
};

export default function SoftwarePage() {
  return (
    <main>
      <PageHero
        eyebrow="FREE SOFTWARE"
        title="Property management software your agency can start today."
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
          The software is free. It is built for portfolio, leasing, maintenance and inspection
          records, and you can add paid on-site support only when you want it.
        </p>
      </PageHero>

      <PageSection eyebrow="ON ONE PLATFORM" title="The work your agency already does.">
        <FeatureGrid
          items={[
            {
              title: 'Portfolio',
              body: 'Keep properties, people and documents together so the agency is not chasing files across inboxes.',
              tone: 'mint',
            },
            {
              title: 'Leasing',
              body: 'Track applications, agreements and renewals in the same record as the property.',
              tone: 'lilac',
            },
            {
              title: 'Maintenance',
              body: 'Follow a request from the first report through quotes and the completed job.',
              tone: 'cream',
            },
            {
              title: 'Inspections',
              body: 'Keep photos, notes and reports attached to the property, whether your team attends or ours does.',
              tone: 'mint',
            },
            {
              title: 'Reports',
              body: 'Share a clear record with the people in your agency who need it, without a second system.',
              tone: 'lilac',
            },
            {
              title: 'Your choice of support',
              body: 'Start with the software. Add Inspection Only or Full Service later, on the same data.',
              tone: 'cream',
            },
          ]}
        />
      </PageSection>

      <PageSection id="ai" eyebrow="BUILT-IN INTELLIGENCE" title="AI moves the admin forward. Your team decides.">
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            ['01 Understand', 'Make sense of requests, photos and reports.'],
            ['02 Prepare', 'Draft responses and organise next steps.'],
            ['03 Review', 'Flag what needs your team’s attention.'],
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
        <p className="mt-6 max-w-3xl text-[15px] leading-[1.65] text-[#3E4660]">
          AI helps reduce admin. It does not approve spending, handle trust money, or send every
          message on its own. Your team stays in control.
        </p>
      </PageSection>

      <ContactStrip />
    </main>
  );
}
