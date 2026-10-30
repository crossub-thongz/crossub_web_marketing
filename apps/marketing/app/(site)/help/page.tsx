import type { Metadata } from 'next';
import { headers } from 'next/headers';

import { ContactStrip, FaqList, PageHero, PageSection } from '@/components/site/page-frame';
import { faqGroupsFor, type FaqBlock } from '@/lib/help-faqs';
import { offersServices, regionFromHeader } from '@/lib/regions';
import { company } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'FAQs | CROSSUB',
  description:
    'Frequently asked questions about CROSSUB software, CROS AI, the inspection app, and professional services.',
};

function FaqAnswer({ blocks }: { blocks: FaqBlock[] }) {
  return (
    <div className="space-y-3">
      {blocks.map((block, index) => {
        if (block.kind === 'h') {
          return (
            <p key={index} className="font-semibold text-[#171E4B]">
              {block.text}
            </p>
          );
        }
        if (block.kind === 'ul') {
          return (
            <ul key={index} className="list-disc space-y-2 pl-5">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        return <p key={index}>{block.text}</p>;
      })}
    </div>
  );
}

export default async function HelpPage() {
  const region = regionFromHeader(await headers());
  const services = offersServices(region);
  const groups = faqGroupsFor(services);

  return (
    <main>
      <PageHero eyebrow="FAQs" title="Frequently Asked Questions">
        <p>
          {services
            ? 'Answers about the software, CROS AI, inspections, maintenance, and Full Service.'
            : 'Answers about the free software, CROS AI, and the inspection app.'}{' '}
          If your question is not here, email {company.email}.
        </p>
      </PageHero>

      <PageSection>
        <div className="mx-auto max-w-[860px] space-y-12">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="mb-4 text-[28px] font-bold tracking-[-0.03em] text-[#171E4B] sm:text-[32px]">
                {group.title}
              </h2>
              <FaqList
                items={group.items.map((item) => ({
                  question: item.question,
                  answer: <FaqAnswer blocks={item.blocks} />,
                }))}
              />
            </div>
          ))}
        </div>
      </PageSection>

      <ContactStrip />
    </main>
  );
}
