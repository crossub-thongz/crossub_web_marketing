import { Camera, ClipboardCheck, FileText, KeyRound, Link2, Wrench } from 'lucide-react';

import { Wordmark } from '@/components/site/logo';
import { cn } from '@/lib/utils';

const AREAS = [
  { label: 'Inspections', icon: ClipboardCheck },
  { label: 'Maintenance', icon: Wrench },
  { label: 'Leasing', icon: KeyRound },
  { label: 'Reports', icon: FileText },
] as const;

function AreaCard({
  label,
  icon: Icon,
}: {
  label: string;
  icon: typeof ClipboardCheck;
}) {
  return (
    <li className="rounded-[22px] bg-white px-4 py-5 shadow-[0_16px_40px_rgba(23,30,75,0.07)] ring-1 ring-[#171E4B]/5">
      <span className="mb-3 grid size-8 place-items-center rounded-xl bg-[#E0F7EE] text-[#007455]">
        <Icon className="size-4" strokeWidth={1.75} aria-hidden />
      </span>
      <span className="text-[15px] font-semibold text-[#171E4B]">{label}</span>
    </li>
  );
}

export function SupportCluster() {
  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-8 -left-6 hidden size-40 rounded-full bg-[radial-gradient(circle,rgba(241,232,255,0.95),transparent_70%)] lg:block"
      />
      <div aria-hidden className="float-delayed pointer-events-none absolute top-0 right-2 hidden lg:block">
        <span className="text-5xl font-bold tracking-tight text-[#7EE8C8]/70">AI</span>
      </div>
      <ul className="relative grid grid-cols-2 gap-3">
        {AREAS.slice(0, 2).map((area) => (
          <AreaCard key={area.label} {...area} />
        ))}
      </ul>
      <p className="relative z-10 mx-auto my-4 flex w-fit items-center gap-3 rounded-full bg-white px-4 py-2.5 shadow-[0_16px_40px_rgba(23,30,75,0.1)] ring-1 ring-[#171E4B]/5">
        <span>
          <Wordmark compact className="h-6" />
          <span className="mt-1 block text-[12px] font-medium text-[#3E4660]">
            Your agency. Connected.
          </span>
        </span>
      </p>
      <ul className="grid grid-cols-2 gap-3">
        {AREAS.slice(2).map((area) => (
          <AreaCard key={area.label} {...area} />
        ))}
      </ul>
    </div>
  );
}

function RoomScene() {
  return (
    <svg viewBox="0 0 420 280" className="h-auto w-full" aria-hidden>
      <rect width="420" height="280" fill="#F4EFE6" />
      <rect y="176" width="420" height="104" fill="#E7D3BC" />
      <rect x="36" y="28" width="150" height="110" rx="8" fill="#D7E7F5" />
      <rect x="36" y="28" width="150" height="110" rx="8" fill="none" stroke="#F7FBFF" strokeWidth="8" />
      <path d="M111 28v110M36 83h150" stroke="#F7FBFF" strokeWidth="6" />
      <rect x="214" y="118" width="168" height="70" rx="16" fill="#7D9A8A" />
      <rect x="228" y="132" width="140" height="28" rx="10" fill="#F7F3EC" />
      <rect x="250" y="168" width="18" height="22" fill="#6E8C7C" />
      <rect x="328" y="168" width="18" height="22" fill="#6E8C7C" />
      <rect x="70" y="188" width="120" height="46" rx="12" fill="#EFE4C8" />
      <path d="M300 176c18-52 46-52 64 0" fill="#2F6B4F" />
      <rect x="326" y="176" width="10" height="28" fill="#8C6239" />
      <circle cx="332" cy="150" r="22" fill="#3E8F68" />
      <rect x="48" y="150" width="16" height="40" fill="#C9B59A" />
      <ellipse cx="56" cy="146" rx="16" ry="8" fill="#F3E7C4" />
    </svg>
  );
}

const CHIPS = [
  { label: 'Photos and notes', icon: Camera, className: 'lg:absolute lg:top-6 lg:left-0' },
  { label: 'AI-assisted summaries', icon: FileText, className: 'lg:absolute lg:top-[46%] lg:right-0' },
  { label: 'Connected property records', icon: Link2, className: 'lg:absolute lg:bottom-2 lg:left-6' },
] as const;

export function InspectionVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[540px] lg:min-h-[460px]">
      <svg
        aria-hidden
        viewBox="0 0 200 80"
        className="pointer-events-none absolute -top-4 right-0 hidden w-28 text-[#C9C6E6] lg:block"
      >
        <path d="M10 60C60 60 70 10 190 16" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <div aria-hidden className="mx-auto w-[88%] pt-4 lg:absolute lg:inset-x-8 lg:top-8 lg:w-auto">
        <div className="rotate-0 rounded-[28px] bg-[#171E4B] p-2.5 shadow-[0_24px_50px_rgba(23,30,75,0.16)] motion-safe:lg:rotate-[6deg]">
          <div className="overflow-hidden rounded-[20px] bg-white">
            <div className="flex items-center gap-1.5 bg-[#F7F8FB] px-3 py-2">
              <span className="size-2 rounded-full bg-[#F1E8FF]" />
              <span className="size-2 rounded-full bg-[#FFF4D8]" />
              <span className="size-2 rounded-full bg-[#E0F7EE]" />
            </div>
            <RoomScene />
          </div>
        </div>
      </div>
      <ul className="relative z-10 mt-5 flex flex-col gap-3 lg:mt-0">
        {CHIPS.map((chip) => {
          const Icon = chip.icon;
          return (
            <li key={chip.label} className={cn('lg:w-fit', chip.className)}>
              <span className="inline-flex min-h-11 items-center gap-2 rounded-2xl bg-white px-3.5 py-2 text-[14px] font-semibold text-[#171E4B] shadow-[0_12px_30px_rgba(23,30,75,0.08)] ring-1 ring-[#171E4B]/5">
                <Icon className="size-4 text-[#007455]" strokeWidth={1.75} aria-hidden />
                {chip.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function ExperienceCard() {
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-white p-7 pb-8 shadow-[0_16px_40px_rgba(23,30,75,0.07)] ring-1 ring-[#171E4B]/5 sm:p-8 sm:pb-10">
      <div aria-hidden className="absolute -top-12 -right-10 size-32 rounded-full bg-[#E0F7EE]" />
      <div aria-hidden className="absolute -bottom-16 -left-12 size-28 rounded-3xl bg-[#FFF4D8]" />
      <div className="relative flex items-end gap-3">
        <p className="text-[112px] leading-none font-semibold tracking-[-0.06em] text-[#008F65] sm:text-[128px]">
          6
        </p>
        <p className="mb-4 text-[13px] leading-snug font-bold tracking-[0.14em] text-[#171E4B]">
          YEARS OF
          <br />
          FULL SERVICE
        </p>
      </div>
      <svg viewBox="0 0 360 120" className="relative mt-2 h-28 w-full" aria-hidden>
        <path d="M40 78 L90 40 L140 78" fill="none" stroke="#171E4B" strokeWidth="2.2" strokeLinejoin="round" />
        <rect x="52" y="78" width="76" height="36" fill="#E0F7EE" stroke="#171E4B" strokeWidth="2" />
        <rect x="80" y="92" width="16" height="22" fill="#FFF4D8" stroke="#171E4B" strokeWidth="1.6" />
        <rect x="60" y="86" width="14" height="12" fill="white" stroke="#171E4B" strokeWidth="1.4" />
        <path d="M210 108c20-48 48-48 70 0" fill="none" stroke="#007455" strokeWidth="2" />
        <circle cx="246" cy="70" r="14" fill="#E0F7EE" stroke="#007455" strokeWidth="2" />
        <rect x="240" y="84" width="8" height="24" fill="#C9B59A" />
        <path d="M250 58c16 8 28 6 40-8" fill="none" stroke="#7C6BB5" strokeWidth="1.6" />
      </svg>
      <ul className="relative z-10 mt-4 flex flex-wrap gap-2">
        {['Leasing', 'Maintenance', 'Inspections'].map((label) => (
          <li
            key={label}
            className="rounded-full bg-[#F6F7FB] px-3 py-1.5 text-[13px] font-semibold text-[#3E4660]"
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
