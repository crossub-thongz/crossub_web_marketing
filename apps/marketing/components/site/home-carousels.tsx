'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

function Dots({
  count,
  index,
  onSelect,
  active,
}: {
  count: number;
  index: number;
  onSelect: (index: number) => void;
  active: string;
}) {
  return (
    <div className="mt-8 flex justify-center">
      <div className="inline-flex items-center gap-2 rounded-full bg-[#E4E7EE] px-3 py-2">
        {Array.from({ length: count }, (_, item) => (
          <button
            key={item}
            type="button"
            aria-label={`Show slide ${item + 1}`}
            aria-current={item === index}
            onClick={() => onSelect(item)}
            className={`h-2.5 rounded-full transition-all ${
              item === index ? `w-8 ${active}` : 'w-2.5 bg-[#C5CAD3]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function PeekCarousel({
  count,
  activeDot,
  auto = false,
  children,
}: {
  count: number;
  activeDot: string;
  auto?: boolean;
  children: ReactNode;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const lock = useRef(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  function go(next: number) {
    const root = scroller.current;
    const slide = root?.children[next] as HTMLElement | undefined;
    if (!root || !slide) return;
    lock.current = true;
    indexRef.current = next;
    setIndex(next);
    root.scrollTo({ left: slide.offsetLeft - root.offsetLeft, behavior: 'smooth' });
    window.setTimeout(() => {
      lock.current = false;
    }, 800);
  }

  useEffect(() => {
    if (!auto || paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      go((indexRef.current + 1) % count);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [auto, paused, count]);

  function onScroll() {
    const root = scroller.current;
    const slide = root?.children[0] as HTMLElement | undefined;
    if (!root || !slide || lock.current) return;
    const gap = slide.nextElementSibling
      ? (slide.nextElementSibling as HTMLElement).offsetLeft - slide.offsetLeft - slide.offsetWidth
      : 0;
    const next = Math.min(count - 1, Math.max(0, Math.round(root.scrollLeft / (slide.offsetWidth + gap))));
    indexRef.current = next;
    setIndex(next);
  }

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        ref={scroller}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      <Dots count={count} index={index} onSelect={go} active={activeDot} />
    </div>
  );
}

const AI_STEPS = [
  {
    title: 'AI reads the request',
    body: 'Understands emails, tenant messages, photos, inspection notes and maintenance details.',
  },
  {
    title: 'AI prepares the work',
    body: 'Run your own portfolio with AI-powered workflows for properties, leasing, maintenance, inspections and communication.',
  },
  {
    title: 'Your team decides',
    body: 'Let our experienced team support your agency’s day-to-day property management.',
  },
] as const;

export function AiControl() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <img
          src="/home/events.jpg?v=2"
          alt=""
          className="w-full rounded-[24px] shadow-[0_24px_50px_rgba(23,30,75,0.08)]"
        />
        <div>
          <ul className="space-y-6">
            {AI_STEPS.map((step, item) => (
              <li key={step.title}>
                <h3 className={`text-[18px] font-semibold ${item === index ? 'text-[#171E4B]' : 'text-[#171E4B]'}`}>
                  {step.title}
                </h3>
                <p className="mt-1 text-[16px] leading-[1.55] text-[#62697C]">{step.body}</p>
              </li>
            ))}
          </ul>
          <img src="/brand/cros.png" alt="" className="mt-4 ml-auto w-16" />
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex flex-wrap justify-center gap-1 rounded-full bg-[#1A3358] p-1.5">
          {AI_STEPS.map((step, item) => (
            <button
              key={step.title}
              type="button"
              onClick={() => setIndex(item)}
              className={`rounded-full px-4 py-2 text-[14px] font-semibold ${
                item === index ? 'bg-[#10243F] text-white' : 'text-white/75'
              }`}
              aria-pressed={item === index}
            >
              {step.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
