'use client';

import { Check, Home, PenLine, Settings } from 'lucide-react';
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
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
    image: '/home/events.jpg?v=2',
  },
  {
    title: 'AI prepares the work',
    body: 'Run your own portfolio with AI-powered workflows for properties, leasing, maintenance, inspections and communication.',
    image: '/home/crm-b.jpg?v=2',
  },
  {
    title: 'Your team decides',
    body: 'Let our experienced team support your agency’s day-to-day property management.',
    image: '/home/dashboard.jpg?v=2',
  },
] as const;

export function AiControl() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid">
          {AI_STEPS.map((step, stepIndex) => (
            <img
              key={step.title}
              src={step.image}
              alt=""
              aria-hidden={stepIndex !== index}
              className={`col-start-1 row-start-1 w-full rounded-[24px] shadow-[0_24px_50px_-20px_rgba(23,30,75,0.16)] transition-opacity duration-200 ease-out ${
                stepIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
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

const WHY = [
  {
    rest: '/home/why-card-1.png',
    hover: '/home/why-card-1-hover.png',
    value: 6,
    suffix: '',
    label: 'years of full-service Australian property expertise.',
  },
  {
    rest: '/home/why-card-2.png',
    hover: '/home/why-card-2-hover.png',
    value: 90,
    suffix: '%',
    label: 'Ease of use and admin',
  },
  {
    rest: '/home/why-card-3.png',
    hover: '/home/why-card-3-hover.png',
    value: 91,
    suffix: '%',
    label: 'Minimize time',
  },
  {
    rest: '/home/why-card-4.png',
    hover: '/home/why-card-4-hover.png',
    value: 100,
    suffix: '%',
    label: 'Data Control & Privacy',
  },
] as const;

function CountUp({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(value);
      return;
    }
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / 1100);
      const eased = 1 - (1 - progress) ** 3;
      setShown(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <>
      {shown}
      {suffix}
    </>
  );
}

export function WhyShowcase() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setActive(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={root} className="mx-auto mt-12 grid max-w-[1480px] items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {WHY.map((card) => (
        <article
          key={card.rest}
          className="group relative flex aspect-[481/361] items-center justify-center overflow-hidden rounded-[28px] bg-[#194878] text-center text-white shadow-[0_0_0_rgba(13,255,128,0)] transition-[background-color,box-shadow] duration-300 ease-out hover:bg-[#25C68D] hover:shadow-[0_0_28px_#0DFF80] motion-reduce:transition-none"
        >
          <img
            src={card.rest}
            alt=""
            className="pointer-events-none absolute top-1/2 left-1/2 h-[122%] w-[122%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-300 ease-out group-hover:opacity-0 motion-reduce:transition-none"
          />
          <img
            src={card.hover}
            alt=""
            className="pointer-events-none absolute top-1/2 left-1/2 h-[122%] w-[122%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 motion-reduce:transition-none"
          />
          <div className="relative px-4 py-6">
            <p className="text-[40px] leading-none font-bold tracking-[-0.04em] sm:text-[48px]">
              <CountUp value={card.value} suffix={card.suffix} active={active} />
            </p>
            <p className="mx-auto mt-2 max-w-[18ch] text-[14px] leading-[1.25] font-semibold sm:text-[16px]">
              {card.label}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

const PLATFORM = [
  {
    title: 'Properties',
    body: 'Owners, tenants, agents and activity in one clear property record.',
    icon: Home,
    className: 'top-[18%] left-[6%]',
  },
  {
    title: 'Maintenance',
    body: 'Requests, quotes, approvals and contractor work in one flow.',
    icon: Settings,
    className: 'top-[8%] right-[8%]',
  },
  {
    title: 'Inspections',
    body: 'Routine, entry, final and open inspections with connected reports.',
    icon: Check,
    className: 'bottom-[18%] left-[4%]',
  },
  {
    title: 'Leasing',
    body: 'Applications, onboarding, lease progress and vacating workflows.',
    icon: PenLine,
    className: 'right-[6%] bottom-[8%]',
  },
] as const;

export function PlatformShowcase() {
  const [index, setIndex] = useState(1);
  const topic = PLATFORM[index] ?? PLATFORM[1];

  return (
    <div className="mt-14 grid items-center gap-10 text-left lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative mx-auto w-full max-w-[520px]">
        <img src="/home/tablet.png?v=2" alt="" className="w-full" />
        {PLATFORM.map((item, itemIndex) => {
          const Icon = item.icon;
          const active = itemIndex === index;
          return (
            <button
              key={item.title}
              type="button"
              aria-label={item.title}
              aria-pressed={active}
              onMouseEnter={() => setIndex(itemIndex)}
              onFocus={() => setIndex(itemIndex)}
              className={`absolute grid size-16 place-items-center rounded-full shadow-md transition-colors duration-300 ease-out ${item.className} ${
                active ? 'bg-[#194778] text-white' : 'bg-[#E7FBF4] text-[#24C68D]'
              }`}
            >
              <Icon className="size-7" aria-hidden />
            </button>
          );
        })}
      </div>
      <div key={topic.title} className="caption-in">
        <h3 className="text-[36px] font-bold tracking-[-0.03em] text-[#171E4B]">{topic.title}</h3>
        <p className="mt-3 max-w-[360px] text-[20px] leading-[1.45] font-medium text-[#194778]">{topic.body}</p>
      </div>
    </div>
  );
}
