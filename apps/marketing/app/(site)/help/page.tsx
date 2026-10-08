import type { Metadata } from 'next';

import { ContactStrip, FaqList, PageHero, PageSection } from '@/components/site/page-frame';
import { company, siteLinks } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'Help Centre | CROSSUB',
  description:
    'Answers for agencies about CROSSUB software, Inspection Only, Full Service, compliance and how to get in touch.',
};

export default function HelpPage() {
  return (
    <main>
      <PageHero eyebrow="Help centre" title="Answers for agencies.">
        <p>
          Short answers about the software, the paid services, and how an agency stays in control.
          If your question is not here, email {company.email} or book a demo.
        </p>
      </PageHero>

      <PageSection>
        <FaqList
          items={[
            {
              question: 'What is free, and what is paid?',
              answer: (
                <p>
                  The property management software is free. Inspection Only and Full Service are
                  paid services you add when you want people from CROSSUB involved. The figures are
                  on the{' '}
                  <a className="font-semibold text-[#24C68D]" href={siteLinks.pricing}>
                    Service Pricing
                  </a>{' '}
                  page.
                </p>
              ),
            },
            {
              question: 'Where does CROSSUB work?',
              answer: (
                <p>
                  CROSSUB was founded in Australia. We support agencies in New South Wales, Victoria
                  and Queensland, work in Europe, and are building a presence in New Zealand. The
                  head office is {company.street}, {company.locality}.
                </p>
              ),
            },
            {
              question: 'How does an agent see the work?',
              answer: (
                <p>
                  Agents keep a login to the platform and can use the agent app. Tasks, inspection
                  reports and message history are on the property record. Anything that needs a
                  decision is sent back to the agency.
                </p>
              ),
            },
            {
              question: 'What can the team handle?',
              answer: (
                <p>
                  Depending on the service you choose: leasing administration, ingoing, routine,
                  outgoing and open inspections, maintenance coordination, tenant communication, and
                  the admin around those jobs. Bond lodgement stays with the agent or the tenant
                  through Rental Bonds Online.
                </p>
              ),
            },
            {
              question: 'How do you approach tenancy law?',
              answer: (
                <p>
                  Staff work to the Residential Tenancy Act for the state the property is in, using
                  checklists and templates for notices and procedure. The record of what was sent
                  stays in the system.
                </p>
              ),
            },
            {
              question: 'Is agency data shared outside CROSSUB?',
              answer: (
                <p>
                  Access is limited by role. We share personal information when the law requires it,
                  or when a provider has to deliver something you asked for, such as a payment. The
                  privacy policy explains this in full.
                </p>
              ),
            },
            {
              question: 'Will landlords know CROSSUB is involved?',
              answer: (
                <p>
                  Landlord conversations stay with your agency. Tenant-facing work can go out under
                  your brand, so the client relationship remains yours.
                </p>
              ),
            },
            {
              question: 'What do you need to hand a property over?',
              answer: (
                <p>
                  The managing agreement, the tenancy agreement and any extension, the ledger,
                  tenant details, an ingoing inspection report, your document templates, email
                  signature and logo. A CROSSUB account manager books the handover.
                </p>
              ),
            },
          ]}
        />
        <p className="mt-6 text-[16px] leading-[1.65] text-[#62697C]">
          Still stuck?{' '}
          <a className="font-semibold text-[#24C68D]" href={siteLinks.bookDemo}>
            Book a demo
          </a>{' '}
          or read the{' '}
          <a className="font-semibold text-[#24C68D]" href={siteLinks.privacy}>
            privacy policy
          </a>
          .
        </p>
      </PageSection>

      <ContactStrip />
    </main>
  );
}
