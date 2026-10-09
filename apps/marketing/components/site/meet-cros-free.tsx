import { ArrowRight, ClipboardCheck, LayoutGrid, Sparkles } from 'lucide-react';

import { TextLink } from '@/components/site/buttons';
import { siteLinks } from '@/lib/site-links';

const CROS_FREE = [
  {
    title: 'Free CRM system',
    body: 'Owners, tenants, leasing, maintenance and the property record in one free system. Trust money stays with a person.',
    icon: LayoutGrid,
  },
  {
    title: 'Free inspection app',
    body: 'Your team can complete visits in the app and keep the photos and report on the property. Booking a CROSSUB inspector is a separate paid visit.',
    icon: ClipboardCheck,
  },
  {
    title: 'Free AI teammate',
    body: 'CROS reads the request, notes and photos, then prepares the insight. Your team still reviews it before anything is sent.',
    icon: Sparkles,
  },
] as const;

export function MeetCrosFree({ showPageLink = false }: { showPageLink?: boolean }) {
  return (
    <>
      <p className="text-[15px] font-semibold text-[#24C68D]">Meet CROS</p>
      <h2 className="mt-6 max-w-[16em] text-[40px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[56px]">
        Free software.
        <span className="block text-[#24C68D]">Three ways CROS helps.</span>
      </h2>
      <p className="mt-6 max-w-[40rem] text-[20px] leading-[1.5] text-[#62697C]">
        Start with the free CRM, the free inspection app and a free AI teammate. Paid people are
        still optional.
      </p>
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {CROS_FREE.map((item) => (
          <article
            key={item.title}
            className="flex h-full flex-col rounded-[24px] bg-white p-6 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-[#171E4B]/5 sm:p-7"
          >
            <span className="grid size-12 place-items-center rounded-2xl bg-[#E7FBF4] text-[#24C68D]">
              <item.icon className="size-5" strokeWidth={2.25} aria-hidden />
            </span>
            <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.02em]">{item.title}</h3>
            <p className="mt-2 text-[16px] leading-[1.55] text-[#62697C]">{item.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-[32px] bg-[#E7FBF4] p-7 sm:p-10">
        <p className="text-[15px] font-semibold text-[#24C68D]">Spotlight on free AI</p>
        <h3 className="mt-4 text-[36px] leading-[1.08] font-bold tracking-[-0.03em] sm:text-[48px]">
          A free AI teammate.
        </h3>
        <p className="mt-4 max-w-[36rem] text-[18px] leading-[1.6] text-[#62697C]">
          CROS prepares drafts, tasks and insights. Your team stays in the approval loop.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <p className="rounded-full bg-white px-4 py-2 text-[15px] font-semibold text-[#171E4B] shadow-[0_8px_24px_rgba(23,30,75,0.06)]">
            Established in 2020
          </p>
          <p className="rounded-full bg-white px-4 py-2 text-[15px] font-semibold text-[#171E4B] shadow-[0_8px_24px_rgba(23,30,75,0.06)]">
            Extensive experience
          </p>
        </div>
        {showPageLink ? (
          <TextLink href={siteLinks.software} className="mt-8">
            Meet CROS
            <ArrowRight className="size-4" aria-hidden />
          </TextLink>
        ) : null}
      </div>
    </>
  );
}
