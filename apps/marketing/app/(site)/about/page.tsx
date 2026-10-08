import type { Metadata } from 'next';

import { ContactStrip, DualActions, FeatureGrid, PageHero, PageSection } from '@/components/site/page-frame';
import { company, siteLinks } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'About CROSSUB',
  description:
    'CROSSUB is an Australian property company founded in 2018. Free software for agencies, with six years of Full Service experience and a team in North Sydney.',
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Crossub"
        title="An Australian team behind the software."
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
          CROSSUB was founded in Australia in 2018 to help real estate agencies carry a rent roll
          without giving the client relationship away. The software is free. The six years people
          ask about are six years of Full Service work.
        </p>
      </PageHero>

      <PageSection eyebrow="Where we work" title="Started in Sydney. Used by agencies beyond it.">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-[28px] bg-white/85 p-7 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white sm:p-8">
            <p className="text-[16px] leading-[1.7] text-[#62697C]">
              The company began as a local property team and now supports agencies in New South
              Wales, Victoria and Queensland. There is also work in Europe, and a presence being
              built in New Zealand. Inspectors and the day-to-day team operate from Australia. The
              work is not sent offshore.
            </p>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#62697C]">
              Head office is {company.street}, {company.locality}. On-site inspections are confirmed
              suburb by suburb. The platform itself is what an agency in another city logs in to.
            </p>
            <p className="mt-4 text-[16px] leading-[1.7] text-[#62697C]">
              Agents keep the landlord. CROSSUB takes the operational load the agency chooses:
              leasing administration, inspections, maintenance coordination, tenant messages and
              the admin around them. Notices and procedure follow the Residential Tenancy Act for
              the state the property is in.
            </p>
          </article>
          <div className="grid gap-4">
            <article className="rounded-[28px] bg-[#E7FBF4] p-7 ring-1 ring-[#008F65]/10">
              <p className="text-[15px] font-semibold text-[#24C68D]">Founded</p>
              <p className="mt-2 text-[56px] leading-none font-semibold tracking-[-0.04em] text-[#171E4B]">
                2018
              </p>
              <p className="mt-2 text-[16px] leading-[1.65] text-[#62697C]">
                Australian company. The founding year is not the same claim as the Full Service
                experience below.
              </p>
            </article>
            <article className="rounded-[28px] bg-white/85 p-7 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white">
              <p className="text-[15px] font-semibold text-[#24C68D]">Full Service</p>
              <p className="mt-2 text-[56px] leading-none font-semibold tracking-[-0.04em] text-[#24C68D]">
                6
              </p>
              <p className="mt-2 text-[16px] leading-[1.65] text-[#62697C]">
                Years the team has done Full Service property management for agencies.
              </p>
            </article>
          </div>
        </div>
      </PageSection>

      <PageSection eyebrow="How we work with an agency" title="Support, with the agent still named on the file.">
        <FeatureGrid
          items={[
            {
              title: 'Partnership',
              body: 'We sit beside the agency. We do not take the landlord, and we do not compete for the management.',
              tone: 'mint',
              icon: '/site/png/icon-people.png',
            },
            {
              title: 'Transparency',
              body: 'Tasks, inspection reports and the SMS and email history are visible in the Agent Portal. Decisions that need the agency are sent back.',
              tone: 'lilac',
              icon: '/site/png/icon-list.png',
            },
            {
              title: 'A clear offer',
              body: 'Software is free. Inspection Only is a paid visit. Full Service is 30% of the agency’s own management fee, with no lock-in.',
              tone: 'cream',
              icon: '/site/png/icon-check-circle.png',
            },
            {
              title: 'Local people',
              body: 'The service team is trained in Australian residential tenancy work. It is not a general virtual-assistant desk.',
              tone: 'mint',
              icon: '/site/png/icon-building.png',
            },
            {
              title: 'The agency’s brand',
              body: 'Reports can carry the agency logo. Tenant-facing messages can go out in the agency’s name.',
              tone: 'lilac',
              icon: '/site/png/icon-document.png',
            },
            {
              title: 'Room to grow the roll',
              body: 'The same number of property managers can cover more properties when travel, admin and routine repairs are no longer all on their desk.',
              tone: 'cream',
              icon: '/site/png/icon-sparkle.png',
            },
          ]}
        />
      </PageSection>

      <PageSection eyebrow="The office" title="North Sydney.">
        <div className="rounded-[28px] bg-white/85 p-7 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white sm:p-8">
          <p className="text-[18px] font-semibold">
            {company.street}
            <br />
            {company.locality}
          </p>
          <p className="mt-4 text-[16px] leading-relaxed text-[#62697C]">
            <a className="font-semibold text-[#24C68D]" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <span className="mx-2 text-[#171E4B]/30">/</span>
            <a className="font-semibold text-[#24C68D]" href={`tel:${company.phoneTel}`}>
              {company.phoneDisplay}
            </a>
          </p>
          <p className="mt-2 text-[16px] leading-[1.65] text-[#62697C]">
            Inspection enquiries:{' '}
            <a className="font-semibold text-[#24C68D]" href={`mailto:${company.salesEmail}`}>
              {company.salesEmail}
            </a>
            . Urgent repairs:{' '}
            <a className="font-semibold text-[#24C68D]" href={`tel:${company.emergencyTel}`}>
              {company.emergencyDisplay}
            </a>
            .
          </p>
        </div>
      </PageSection>

      <ContactStrip />
    </main>
  );
}
