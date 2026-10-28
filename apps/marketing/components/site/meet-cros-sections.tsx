'use client';

import { useEffect, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  ClipboardCheck,
  ClipboardList,
  Home,
  Mail,
  Phone,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

import { PrimaryLink, SecondaryLink } from '@/components/site/buttons';
import { siteLinks } from '@/lib/site-links';
import { cn } from '@/lib/utils';

const FLOWS = [
  { label: 'Leasing', icon: Home },
  { label: 'Maintenance', icon: Wrench },
  { label: 'Messages', icon: Mail },
  { label: 'Inspections', icon: ClipboardCheck },
  { label: 'Tenant Operations', icon: Phone },
] as const;

const STEPS = [
  {
    title: 'User asks',
    body: 'CROS automatically handling the input and found',
  },
  {
    title: 'Reviews & Validation',
    body: 'CROS handling and arranged tasks in 2s',
  },
  {
    title: 'Ready for your decision',
    body: 'CROS completed arranged in 1.5s',
  },
] as const;

const CALLOUTS = [
  { label: 'Already arranged', count: '6', className: 'top-[2%] left-[34%]' },
  { label: 'Coming up', count: '0', className: 'top-[12%] right-0' },
  {
    label: 'Needs your decision',
    count: '0',
    tone: 'rose' as const,
    className: 'bottom-[36%] left-0',
  },
  { label: 'Scheduled', className: 'bottom-[18%] left-[16%]' },
  { label: 'CROS assisting', className: 'bottom-0 left-[32%]' },
] as const;

const JOBS: {
  tag: string;
  title: string;
  icons: LucideIcon[];
  lines: string[];
}[] = [
  {
    tag: '[COMPLETED]',
    title: 'Miller Street\nMaintenance',
    icons: [Wrench, ClipboardList],
    lines: [
      'Request: Processed 3 Vendor Quotes Compared.',
      'Best Value Auto-Selected.',
      '[Draft Approval Email Generated & Sent]',
      'Status: Automatically resolved & tenant scheduled.',
    ],
  },
  {
    tag: '[COMPLETED]',
    title: 'Rent Review\n5% increase',
    icons: [Home, BarChart3],
    lines: [
      '15 Units: Initialized.',
      'Regional Market Comparables Analyzed.',
      '[Proposal Drafted & Ready for Approval]',
      'Portfolio: Market data analysis applied.',
    ],
  },
  {
    tag: '[AUTO-RESPOND]',
    title: '12 Tenant\nInquiry handled',
    icons: [Mail, Phone],
    lines: [
      'Emails answered & replied.',
      'Channel: Email & SMS. Routine queries processed.',
      'Lease Quotation | Repaired | General Inquiry',
      '[Multiple Property Viewing Slots Booked]',
      'Key Dates Calendar Synchronized.',
      'Immediate Tenant Engagement.',
    ],
  },
];

const FOLDER_OUTER =
  'polygon(16px 0, calc(100% - 46px) 0, 100% 46px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px)';
const FOLDER_INNER =
  'polygon(17.5px 1.5px, calc(100% - 47.5px) 1.5px, calc(100% - 1.5px) 47.5px, calc(100% - 1.5px) calc(100% - 17.5px), calc(100% - 17.5px) calc(100% - 1.5px), 17.5px calc(100% - 1.5px), 1.5px calc(100% - 17.5px), 1.5px 17.5px)';

function FolderCard({ children }: { children: ReactNode }) {
  return (
    <div className="h-full drop-shadow-[0_0_12px_rgba(90,255,214,0.45)]">
      <div className="h-full bg-[#5dffd0]" style={{ clipPath: FOLDER_OUTER }}>
        <div className="h-full bg-[#07090c]" style={{ clipPath: FOLDER_INNER }}>
          <div className="h-full px-5 pt-5 pb-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

const SLIDE_MS = 5000;

const SLIDES = [
  { title: 'Portfolio overview', src: '/meet-cros/agent-dashboard.png' },
  { title: 'Tasks', src: '/meet-cros/agent-tasks.png' },
  { title: 'Inspections', src: '/meet-cros/agent-inspections.png' },
  { title: 'Properties', src: '/meet-cros/agent-properties.png' },
] as const;

function CrosStage() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="relative mx-auto w-full min-w-0 max-w-[820px]"
      aria-roledescription="carousel"
      aria-label="CROS arranging rent reviews, inspections and a decision"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute -inset-x-8 -inset-y-10 rounded-[80px] bg-[radial-gradient(ellipse_at_18%_50%,rgba(110,255,210,0.95),transparent_58%),radial-gradient(ellipse_at_82%_50%,rgba(124,92,255,0.9),transparent_56%)] blur-2xl"
        aria-hidden
      />
      <div className="relative min-w-0 rounded-[40px] bg-[linear-gradient(100deg,#9dffe4_0%,#3DDC97_32%,#6a5cff_70%,#8eb6ff_100%)] p-[9px] shadow-[0_0_28px_rgba(90,255,210,0.55),0_0_42px_rgba(110,90,255,0.45)]">
        <div className="min-w-0 rounded-[32px] bg-[#07090c] px-3 pt-3 pb-3 sm:px-4">
          <div className="relative aspect-[1440/900] min-w-0">
            {SLIDES.map((slide, slideIndex) => {
              const active = slideIndex === index;
              return (
                <article
                  key={slide.title}
                  className={cn(
                    'absolute inset-0 overflow-hidden rounded-[18px] bg-[#f3f8fa] shadow-[0_12px_28px_rgba(0,0,0,0.28)] transition-opacity duration-500',
                    active ? 'opacity-100' : 'pointer-events-none opacity-0',
                  )}
                  aria-hidden={!active}
                >
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="h-full w-full max-w-full object-contain object-center"
                  />
                </article>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-2 pt-3" aria-hidden>
            {SLIDES.map((slide, slideIndex) => (
              <span
                key={slide.title}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-500',
                  slideIndex === index ? 'w-8 bg-[#e9fff8]' : 'w-1.5 bg-white/35',
                )}
              />
            ))}
          </div>
          <p className="sr-only" aria-live="polite">
            {SLIDES[index]?.title}
          </p>
        </div>
      </div>
    </div>
  );
}

function Callout({
  label,
  count,
  tone = 'mint',
  className,
}: {
  label: string;
  count?: string;
  tone?: 'mint' | 'rose';
  className?: string;
}) {
  const rose = tone === 'rose';
  return (
    <div
      className={cn(
        'absolute z-20 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-[13px] font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.18)]',
        rose ? 'border-[#ff8fa3] text-[#e11d48]' : 'border-[#8ef0cf] text-[#0f766e]',
        className,
      )}
    >
      <span
        className={cn(
          'flex size-5 items-center justify-center rounded-full text-[11px]',
          rose ? 'bg-[#ffe4ea] text-[#e11d48]' : 'bg-[#e7fff6] text-[#0f766e]',
        )}
        aria-hidden
      >
        {rose ? '!' : '✓'}
      </span>
      {label}
      {count ? (
        <span
          className={cn(
            'flex size-5 items-center justify-center rounded-full text-[11px] text-white',
            rose ? 'bg-[#fb7185]' : 'bg-[#14b8a6]',
          )}
        >
          {count}
        </span>
      ) : null}
    </div>
  );
}

export function MeetCrosSections() {
  return (
    <>
      <section id="ai" className="bg-white px-6 py-20 text-[#172033] md:px-10 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="text-[clamp(48px,7vw,84px)] leading-none font-bold tracking-[-0.045em] text-[#3DDC97]">
              MEET CROS
            </h2>
            <p className="mt-5 text-[17px] leading-[1.55] text-[#3d4654] sm:text-[18px]">
              Total Property Management Autonomy. Not assistance, Total execution.
              <span className="mt-1 block">
                CROS is your tireless, human-like admin, handling all PM tasks with hyper-accuracy.
              </span>
              <span className="mt-1 block">
                Fire the busywork. Fire the middleman, We don&apos;t just &apos;help&apos; - we execute.
              </span>
            </p>
          </div>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-[minmax(240px,0.7fr)_minmax(0,1.3fr)] lg:gap-6">
            <div className="min-w-0">
              <div className="grid grid-cols-5 gap-1 sm:gap-2">
                {FLOWS.map(({ label, icon: Icon }) => (
                  <div key={label} className="flex min-w-0 flex-col items-center gap-2 text-center">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-[#10241c] text-[#3DDC97] outline outline-[2.5px] outline-dotted outline-[#3DDC97] outline-offset-2 sm:size-14 sm:outline-offset-3">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <span className="max-w-full text-[9px] leading-tight font-medium text-[#243042] sm:max-w-[72px] sm:text-[12px]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <svg viewBox="0 0 500 52" className="mt-1 h-12 w-full" fill="none" aria-hidden>
                <path
                  d="M50 0 V16 Q50 26 60 26 H230 M270 26 H440 Q450 26 450 16 V0 M150 0 V26 M350 0 V26 M250 8 V52"
                  stroke="#3DDC97"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
              <div className="mx-auto -mt-1 flex max-w-[440px] flex-col gap-3.5">
                {STEPS.map((step) => (
                  <article
                    key={step.title}
                    className="rounded-[18px] bg-[#101c18] px-5 py-3.5 text-center text-white outline outline-[2.5px] outline-dotted outline-[#3DDC97] outline-offset-3"
                  >
                    <h3 className="text-[15px] font-semibold">{step.title}</h3>
                    <p className="mt-0.5 text-[12px] leading-snug text-white/75">{step.body}</p>
                  </article>
                ))}
              </div>
              <a
                href="#arranged"
                className="mx-auto mt-6 flex w-fit items-center gap-1 text-[13px] font-medium text-[#3d4654]"
              >
                Discover more CROS will do for you
                <ArrowRight className="size-3.5" aria-hidden />
              </a>
            </div>

            <CrosStage />
          </div>
        </div>
      </section>

      <section id="arranged" className="overflow-hidden bg-[#071018] px-6 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[minmax(220px,320px)_minmax(0,1fr)] lg:gap-8">
          <div>
            <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.05] font-bold tracking-[-0.04em]">
              CROS arranged it all for you
            </h2>
            <p className="mt-4 max-w-[320px] text-[18px] leading-snug text-white/80">
              Don&apos;t run the software. Let CROS run it for you.
            </p>
          </div>

          <div className="relative min-h-[560px] sm:min-h-[620px]">
            <div className="absolute top-8 left-0 z-10 w-[78%] -rotate-[2.5deg] rounded-[28px] bg-[#d9fff2] p-2 shadow-[0_0_0_1px_rgba(180,255,230,0.7),0_0_36px_rgba(90,255,200,0.45)]">
              <img
                src="/meet-cros/events.png"
                alt="Upcoming events summarised by CROS, with inspections already arranged"
                className="block h-auto w-full rounded-[22px] bg-[#f4fbf8]"
              />
            </div>
            <div className="absolute right-0 bottom-24 z-20 w-[62%] rotate-[2deg] rounded-[28px] bg-[#d9fff2] p-2 shadow-[0_0_0_1px_rgba(180,255,230,0.8),0_18px_50px_rgba(0,0,0,0.35),0_0_36px_rgba(90,255,200,0.4)]">
              <img
                src="/meet-cros/rent-review.png"
                alt="Routine inspection at 14 Expo Test Street, in progress with CROS assisting"
                className="block h-auto w-full rounded-[22px] bg-white"
              />
            </div>
            {CALLOUTS.map((item) => (
              <Callout key={item.label} {...item} />
            ))}
            <p className="absolute right-0 bottom-2 z-30 max-w-[230px] text-right text-[15px] leading-snug font-semibold">
              CROS arranged for your
              <span className="mt-1 block text-[13px] font-medium text-white/75">
                Routine inspection, scheduled and in progress.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#05070a] px-6 py-16 text-white md:px-10 md:py-20">
        <div className="mx-auto max-w-[1080px]">
          <div className="mx-auto flex w-fit max-w-full items-center gap-4 rounded-full border border-[#67f6e4] bg-black py-2 pr-8 pl-2 shadow-[0_0_0_1px_rgba(103,246,228,0.35),0_0_28px_rgba(80,255,220,0.45)]">
            <img
              src="/brand/cros.png"
              alt=""
              className="size-14 shrink-0 rounded-full object-cover ring-2 ring-[#67f6e4] ring-offset-2 ring-offset-black"
            />
            <p className="text-[16px] font-medium sm:text-[20px]">
              Cros, handle maintenance, rent reviews and tenant inquiries.
            </p>
          </div>

          <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
            {JOBS.map((job) => (
              <FolderCard key={job.title}>
                <div className="flex items-start justify-between gap-3 pr-4">
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold tracking-wide text-[#5dffd0]">{job.tag}</p>
                    <h3 className="mt-2 text-[26px] leading-[1.05] font-bold tracking-[-0.03em] whitespace-pre-line">
                      {job.title}
                    </h3>
                  </div>
                  <div className="flex shrink-0 flex-col items-center gap-2 pt-1 text-[#5dffd0]">
                    {job.icons.map((Icon, index) => (
                      <Icon key={index} className="size-[18px]" strokeWidth={1.75} aria-hidden />
                    ))}
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-[13.5px] leading-snug text-white/90">
                  {job.lines.map((line) => (
                    <p key={line} className={line.startsWith('[') ? 'pt-1' : undefined}>
                      {line}
                    </p>
                  ))}
                </div>
              </FolderCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-center md:py-28">
        <div className="mx-auto size-16" data-asset-slot="cta-mascot" />
        <h2 className="mt-4 text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.04em] text-[#3DDC97]">
          Less admin. CROS managed.
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <PrimaryLink href={siteLinks.startFree}>Start for free</PrimaryLink>
          <SecondaryLink href={siteLinks.bookDemo}>Book a demo</SecondaryLink>
        </div>
      </section>
    </>
  );
}
