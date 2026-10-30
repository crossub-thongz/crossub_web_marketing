import type { Metadata } from 'next';
import { headers } from 'next/headers';

import { PageHero, PageSection } from '@/components/site/page-frame';
import { REGIONS, regionFromHeader } from '@/lib/regions';
import { company } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'Terms of Use | CROSSUB',
  description: 'Terms of use for the CROSSUB website and free software, written separately for each region.',
};

const TERMS = {
  AU: [
    'These terms cover use of the CROSSUB website and the free property management software by agencies operating in Australia.',
    'The software and CROS AI are free to use. Inspection services and full-service property management are separate paid services, and they are only available in Australia. Those services are covered by the agreement for the service you book.',
    'You keep control of your agency records. CROSSUB does not move trust money. You are responsible for the information you enter and for the decisions your team approves.',
    'Questions about these terms go to the address below. This Australia notice is edited separately from the New Zealand notice.',
  ],
  NZ: [
    'These terms cover use of the CROSSUB website and the free property management software by agencies operating in New Zealand.',
    'The software and CROS AI are free to use. Inspection services and full-service property management are not offered in New Zealand, and they cannot be booked from a New Zealand region.',
    'You keep control of your agency records. CROSSUB does not move trust money. You are responsible for the information you enter and for the decisions your team approves.',
    'Questions about these terms go to the address below. This New Zealand notice is edited separately from the Australia notice.',
  ],
} as const;

export default async function TermsPage() {
  const region = regionFromHeader(await headers());
  const notice = region === 'NZ' ? TERMS.NZ : TERMS.AU;
  const place = REGIONS[region === 'NZ' ? 'NZ' : 'AU'];

  return (
    <main>
      <PageHero eyebrow={place.name} title="Terms of Use">
        <p>
          These terms apply to {place.name}. Questions go to{' '}
          <a className="font-semibold text-[#24C68D]" href={`mailto:${company.salesEmail}`}>
            {company.salesEmail}
          </a>
          .
        </p>
      </PageHero>
      <PageSection>
        <div className="mx-auto max-w-[760px] space-y-5 rounded-[28px] bg-white/85 p-6 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white sm:p-10">
          {notice.map((paragraph) => (
            <p key={paragraph} className="text-[16px] leading-[1.7] text-[#62697C]">
              {paragraph}
            </p>
          ))}
        </div>
      </PageSection>
    </main>
  );
}
