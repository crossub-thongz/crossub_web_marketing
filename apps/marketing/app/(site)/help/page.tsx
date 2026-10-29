import type { Metadata } from 'next';

import { ContactStrip, FaqList, PageHero, PageSection } from '@/components/site/page-frame';
import { FAQ_GROUPS, type FaqBlock } from '@/lib/help-faqs';
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

export default function HelpPage() {
  return (
    <main>
      <PageHero eyebrow="FAQs" title="Frequently Asked Questions">
        <p>
          Answers about the software, CROS AI, inspections, maintenance, and Full Service. If your
          question is not here, email {company.email}.
        </p>
      </PageHero>

      <PageSection>
        <div className="mx-auto max-w-[860px] space-y-12">
          {FAQ_GROUPS.map((group) => (
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
