'use client';

import { Bot, Building2, ChevronRight, ClipboardList, LayoutGrid, Wrench } from 'lucide-react';
import { useRef } from 'react';

const ICONS = {
  inspect: ClipboardList,
  ai: Bot,
  data: LayoutGrid,
  maint: Wrench,
  full: Building2,
} as const;

export function AboutEcosystem({
  cards,
}: {
  cards: { title: string; href: string; icon: keyof typeof ICONS }[];
}) {
  const scroller = useRef<HTMLDivElement>(null);

  return (
    <div className="relative mt-12">
      <div
        ref={scroller}
        className="flex gap-5 overflow-x-auto scroll-smooth pr-16 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((card) => {
          const Icon = ICONS[card.icon];
          return (
            <article
              key={card.title}
              className="flex w-[250px] shrink-0 flex-col rounded-[24px] bg-white px-6 pt-6 pb-5 shadow-[0_10px_30px_rgba(23,30,75,0.05)] sm:w-[270px]"
            >
              <span className="grid size-14 place-items-center rounded-2xl bg-[#E7FBF4] text-[#25C68D]">
                <Icon className="size-7" aria-hidden />
              </span>
              <h3 className="mt-6 min-h-[92px] text-[26px] leading-[1.15] font-bold tracking-[-0.03em] text-[#0F1D30]">
                {card.title}
              </h3>
              <a href={card.href} className="mt-auto pt-8 text-[14px] font-medium text-[#606060]">
                Explore More <span aria-hidden>›</span>
              </a>
            </article>
          );
        })}
      </div>
      <button
        type="button"
        aria-label="Show more"
        className="absolute top-1/2 right-1 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white text-[#194878] shadow-[0_8px_24px_rgba(23,30,75,0.12)]"
        onClick={() => scroller.current?.scrollBy({ left: 290, behavior: 'smooth' })}
      >
        <ChevronRight className="size-5" aria-hidden />
      </button>
    </div>
  );
}
