import type { Metadata } from 'next';

import { ContactStrip, DualActions, FaqList, FeatureGrid, PageHero, PageSection } from '@/components/site/page-frame';
import { siteLinks } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'Free property management software | Crossub',
  description:
    'Free property management software for agencies: portfolio, leasing, maintenance, inspections, keys and reports, with AI that prepares the work while your team stays in control.',
};

export default function SoftwarePage() {
  return (
    <main>
      <PageHero
        eyebrow="FREE SOFTWARE"
        title="One platform for the portfolio, the visits and the follow-up."
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
          The property management software is free. Agencies use it to schedule ingoing, outgoing
          and routine inspections, open homes, maintenance and leasing, and to keep the record in
          one place. Paid people — Inspection Only or Full Service — are optional.
        </p>
      </PageHero>

      <PageSection eyebrow="WHAT THE PLATFORM HOLDS" title="The daily work, on the property record.">
        <FeatureGrid
          items={[
            {
              title: 'Portfolio',
              body: 'Properties, people, agreements and documents stay together, so the agency is not rebuilding the file from inboxes.',
              tone: 'mint',
            },
            {
              title: 'Leasing',
              body: 'Applications, reference checks, agreements and renewals sit on the same property as the inspection and the ledger.',
              tone: 'lilac',
            },
            {
              title: 'Maintenance',
              body: 'A request is logged, quotes are gathered, the agent approves, and the job is followed through to completion.',
              tone: 'cream',
            },
            {
              title: 'Inspections',
              body: 'Ingoing, routine, outgoing and open homes are scheduled here, with photos, notes and the report filed against the property.',
              tone: 'mint',
            },
            {
              title: 'Keys',
              body: 'Key movements are recorded digitally, so the office can see who holds a set and when it came back.',
              tone: 'lilac',
            },
            {
              title: 'Messages',
              body: 'SMS and email on a job are kept on the record. The agent can read the history without asking someone to forward a thread.',
              tone: 'cream',
            },
          ]}
        />
      </PageSection>

      <PageSection eyebrow="IN THE FIELD" title="Reports the agency can actually send.">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4 text-[16px] leading-[1.7] text-[#3E4660]">
            <p>
              Cross Inspect is Crossub’s inspection app. Inspectors and agency staff capture the
              visit on site, then the report is edited, signed and shared from the same system.
            </p>
            <p>
              Reports can carry the agency’s logo and layout. Photos, a phrase library and PDF
              export are part of the report, and the file is stored so the agent and the owner
              portal can open it later.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              'Quick photo capture',
              'Custom report layouts',
              'Phrase library',
              'Edit the report online',
              'Digital signing',
              'Export as PDF',
              'Share the report',
              'Secure cloud storage',
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-white/85 px-4 py-3 text-[15px] font-semibold text-[#171E4B] shadow-[0_10px_30px_rgba(23,30,75,0.05)] ring-1 ring-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </PageSection>

      <PageSection id="ai" eyebrow="BUILT-IN INTELLIGENCE" title="AI prepares the admin. Your team decides.">
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
          AI reduces the admin between a photo, a maintenance request and the next email. It does
          not approve spending, handle trust money, or send every message on its own.
        </p>
      </PageSection>

      <PageSection eyebrow="WHO SEES WHAT" title="The agent keeps the view. Support is added later.">
        <FeatureGrid
          items={[
            {
              title: 'Agent login',
              body: 'Property managers sign in to the Agent Portal to see tasks, reports and messages, and to approve what needs a decision.',
              tone: 'mint',
            },
            {
              title: 'Agent app',
              body: 'The same picture is available on the phone, for people who are not at a desk when a report or a quote comes in.',
              tone: 'lilac',
            },
            {
              title: 'Add people when you want',
              body: 'Inspection Only and Full Service use this same data. You do not move the portfolio to a second system to get help.',
              tone: 'cream',
            },
          ]}
        />
        <div className="mt-10">
          <FaqList
            items={[
              {
                question: 'Is the software free if I never buy a service?',
                answer: (
                  <p>
                    Yes. The software is free. Inspection Only and Full Service are paid, and they
                    are only added when the agency asks for them.
                  </p>
                ),
              },
              {
                question: 'Can we run inspections ourselves?',
                answer: (
                  <p>
                    Yes. Your own staff can complete the visit in the app. Or you can book Crossub
                    inspectors and have the same report land on the property.
                  </p>
                ),
              },
            ]}
          />
        </div>
      </PageSection>

      <ContactStrip />
    </main>
  );
}
