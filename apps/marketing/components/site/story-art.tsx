import { Wordmark } from '@/components/site/logo';
import { cn } from '@/lib/utils';

const AREAS = [
  { label: 'Inspections', icon: '/site/png/icon-inspection.png' },
  { label: 'Maintenance', icon: '/site/png/icon-maintenance.png' },
  { label: 'Leasing', icon: '/site/png/icon-key.png' },
  { label: 'Reports', icon: '/site/png/icon-document.png' },
] as const;

function AreaCard({ label, icon }: { label: string; icon: string }) {
  return (
    <li className="rounded-[22px] bg-white px-4 py-5 shadow-[0_16px_40px_rgba(23,30,75,0.07)] ring-1 ring-[#171E4B]/5">
      <img src={icon} alt="" className="mb-3 size-8" />
      <span className="text-[15px] font-semibold text-[#171E4B]">{label}</span>
    </li>
  );
}

export function SupportCluster() {
  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      <img
        src="/site/png/glow-lilac.png"
        alt=""
        className="pointer-events-none absolute -top-16 -left-10 w-64"
      />
      <div className="relative overflow-hidden rounded-[28px] bg-white p-4 shadow-[0_16px_40px_rgba(23,30,75,0.07)] ring-1 ring-[#171E4B]/5">
        <img src="/site/png/platform-ai-ribbons.png" alt="" className="w-full" />
      </div>
      <ul className="relative mt-4 grid grid-cols-2 gap-3">
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

const INSPECTION_BADGES = [
  { src: '/site/png/badge-photo-notes.png', alt: 'Photos and notes', className: 'top-2 left-0 w-44' },
  { src: '/site/png/badge-ai-summary.png', alt: 'AI-assisted summaries', className: 'top-[42%] right-0 w-48' },
  {
    src: '/site/png/badge-property-records.png',
    alt: 'Connected property records',
    className: 'bottom-2 left-4 w-52',
  },
] as const;

export function InspectionVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] pt-8 pb-16 lg:min-h-[420px]">
      <img src="/site/png/inspection-tablet.png" alt="" className="relative z-0 mx-auto w-[92%]" />
      {INSPECTION_BADGES.map((badge) => (
        <img
          key={badge.alt}
          src={badge.src}
          alt={badge.alt}
          className={cn('absolute z-10 hidden drop-shadow-sm lg:block', badge.className)}
        />
      ))}
      <ul className="relative z-10 mt-4 flex flex-col gap-3 lg:hidden">
        {INSPECTION_BADGES.map((badge) => (
          <li key={badge.alt}>
            <img src={badge.src} alt={badge.alt} className="h-11 w-auto" />
          </li>
        ))}
      </ul>
    </div>
  );
}

const EXPERIENCE_BADGES = [
  { src: '/site/png/badge-leasing.png', alt: 'Leasing' },
  { src: '/site/png/badge-maintenance.png', alt: 'Maintenance' },
  { src: '/site/png/badge-inspection.png', alt: 'Inspections' },
] as const;

export function ExperienceCard() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <img src="/site/png/six-years-card.png" alt="6 years of Full Service" className="w-full" />
      <ul className="mt-4 flex flex-wrap gap-2">
        {EXPERIENCE_BADGES.map((badge) => (
          <li key={badge.alt}>
            <img src={badge.src} alt={badge.alt} className="h-11 w-auto" />
          </li>
        ))}
      </ul>
    </div>
  );
}
