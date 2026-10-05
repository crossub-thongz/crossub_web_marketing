import type { Metadata } from 'next';

import { PageHero, PageSection } from '@/components/site/page-frame';
import { company } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'Privacy Policy | Crossub',
  description:
    'How Crossub collects, uses and protects personal information on this website and in the Crossub platform.',
};

const SECTIONS = [
  {
    title: 'Introduction',
    body: 'Crossub is committed to protecting your privacy. This policy explains what personal information we collect, how we use it, and the choices you have.',
  },
  {
    title: 'What we collect',
    body: 'We collect information you give us, such as your name, email address, phone number, agency details and payment information, when you create an account, book a demo, or use a paid service. We also collect information about how you use this website through cookies and similar tools.',
  },
  {
    title: 'How we use it',
    body: 'We use personal information to provide the software and services you ask for, and to reply to you. We only send promotional email if you have agreed to it.',
  },
  {
    title: 'Who we share it with',
    body: 'We do not sell personal information. We share it when the law requires it, or when someone has to help us deliver a service you requested, such as a payment processor. Open-inspection forms collected in the Crossub inspection flow, including details submitted after a QR code is scanned, are sent to the Crossub agent platform and stored there. That information is used inside Crossub. It is not published or given to unrelated third parties.',
  },
  {
    title: 'Security',
    body: 'We take reasonable steps to protect personal information from unauthorised access, disclosure or loss. No internet transmission or storage system can be guaranteed completely secure.',
  },
  {
    title: 'Your rights',
    body: 'You can ask to access, correct or delete personal information we hold, and you can object to or ask us to limit how it is used. Contact us and we will respond.',
  },
  {
    title: 'Children',
    body: 'This website is not meant for children under 13. We do not knowingly collect their personal information. If we learn that we have, we will delete it.',
  },
  {
    title: 'Changes',
    body: 'We may update this policy when our practices change. If a change is material, we will email you or post a notice on this website.',
  },
] as const;

export default function PrivacyPage() {
  return (
    <main>
      <PageHero eyebrow="PRIVACY" title="Privacy policy">
        <p>
          This is the Crossub privacy policy for the website and the platform. Questions go to{' '}
          <a className="font-semibold text-[#007455]" href={`mailto:${company.salesEmail}`}>
            {company.salesEmail}
          </a>
          .
        </p>
      </PageHero>

      <PageSection>
        <div className="mx-auto max-w-[760px] space-y-8 rounded-[28px] bg-white/85 p-6 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white sm:p-10">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="text-[20px] font-semibold">{section.title}</h2>
              <p className="mt-2 text-[16px] leading-[1.7] text-[#3E4660]">{section.body}</p>
            </section>
          ))}
        </div>
      </PageSection>
    </main>
  );
}
