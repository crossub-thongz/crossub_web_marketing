'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

const EDGE = 'pointer-events-none absolute inset-y-0 z-10 transition-opacity duration-300';
const ARROW =
  'absolute top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white text-[#194878] shadow-[0_8px_24px_rgba(23,30,75,0.12)] transition-opacity duration-300';

export function AboutEcosystem({
  cards,
}: {
  cards: { title: string; href: string; icon: string }[];
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ left: false, right: false });

  const update = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const endPadding = 56;
    setEdges({
      left: el.scrollLeft > 8,
      right: el.scrollLeft + el.clientWidth < el.scrollWidth - endPadding - 8,
    });
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    update();
    el.addEventListener('scroll', update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => {
      el.removeEventListener('scroll', update);
      observer.disconnect();
    };
  }, [update, cards.length]);

  function scrollByCard(direction: 1 | -1) {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector('article');
    const distance = card ? card.getBoundingClientRect().width + 20 : 290;
    el.scrollBy({ left: direction * distance, behavior: 'smooth' });
  }

  return (
    <div className="relative mt-12">
      <div
        ref={scroller}
        className="flex gap-5 overflow-x-auto scroll-smooth pr-14 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((card) => {
          return (
            <article
              key={card.title}
              className="site-card flex w-[250px] shrink-0 flex-col rounded-[24px] bg-white px-6 pt-6 pb-5 shadow-[0_10px_30px_rgba(23,30,75,0.05)] sm:w-[270px]"
            >
              <span className="grid size-14 place-items-center rounded-2xl bg-[#E7FBF4]">
                <img src={card.icon} alt="" className="size-8 object-contain" />
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
      <div
        aria-hidden
        className={`${EDGE} left-0 w-36 bg-gradient-to-r from-[#F5F6F8] from-15% via-[#F5F6F8]/80 to-transparent ${edges.left ? 'opacity-100' : 'opacity-0'}`}
      />
      <div
        aria-hidden
        className={`${EDGE} right-0 w-36 bg-gradient-to-l from-[#F5F6F8] from-15% via-[#F5F6F8]/80 to-transparent ${edges.right ? 'opacity-100' : 'opacity-0'}`}
      />
      <button
        type="button"
        aria-label="Show previous"
        className={`${ARROW} left-1 ${edges.left ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => scrollByCard(-1)}
      >
        <ChevronLeft className="size-5" aria-hidden />
      </button>
      <button
        type="button"
        aria-label="Show more"
        className={`${ARROW} right-1 ${edges.right ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => scrollByCard(1)}
      >
        <ChevronRight className="size-5" aria-hidden />
      </button>
    </div>
  );
}
