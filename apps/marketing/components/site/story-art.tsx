import { Wordmark } from '@/components/site/logo';
import { cn } from '@/lib/utils';

const arrowStroke = {
  fill: 'none',
  stroke: '#00A778',
  strokeWidth: 2.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function FlowArrow({
  variant,
  className,
}: {
  variant: 'to-prepare' | 'to-review' | 'to-understand' | 'to-tablet' | 'to-document' | 'to-photos';
  className?: string;
}) {
  if (variant === 'to-prepare') {
    return (
      <svg viewBox="0 0 100 150" aria-hidden className={cn('pointer-events-none', className)}>
        <path d="M22 136C8 90 36 48 62 30" {...arrowStroke} />
        <path d="M44 28L64 8L82 30" {...arrowStroke} />
      </svg>
    );
  }
  if (variant === 'to-review') {
    return (
      <svg viewBox="0 0 170 170" aria-hidden className={cn('pointer-events-none', className)}>
        <path d="M148 18C156 64 92 108 42 132" {...arrowStroke} />
        <path d="M22 116L40 154L64 118" {...arrowStroke} />
      </svg>
    );
  }
  if (variant === 'to-understand') {
    return (
      <svg viewBox="0 0 80 130" aria-hidden className={cn('pointer-events-none', className)}>
        <path d="M58 118C22 102 14 62 32 32" {...arrowStroke} />
        <path d="M14 40L34 10L52 38" {...arrowStroke} />
      </svg>
    );
  }
  if (variant === 'to-tablet') {
    return (
      <svg viewBox="0 0 90 100" aria-hidden className={cn('pointer-events-none', className)}>
        <path d="M14 80C16 48 42 28 64 22" {...arrowStroke} />
        <path d="M48 8L74 20L50 36" {...arrowStroke} />
      </svg>
    );
  }
  if (variant === 'to-document') {
    return (
      <svg viewBox="0 0 70 160" aria-hidden className={cn('pointer-events-none', className)}>
        <path d="M24 12C56 40 54 90 36 126" {...arrowStroke} />
        <path d="M16 112L36 148L56 114" {...arrowStroke} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 150 80" aria-hidden className={cn('pointer-events-none', className)}>
      <path d="M138 16C92 14 54 32 36 52" {...arrowStroke} />
      <path d="M52 36L12 54L48 70" {...arrowStroke} />
    </svg>
  );
}

const AREAS = [
  { label: 'Inspections', icon: '/site/png/icon-inspection.png' },
  { label: 'Maintenance', icon: '/site/png/icon-maintenance.png' },
  { label: 'Leasing', icon: '/site/png/icon-key.png' },
  { label: 'Reports', icon: '/site/png/icon-document.png' },
] as const;

export function SupportCluster() {
  return (
    <div className="relative mx-auto w-full max-w-[540px] pr-6 sm:pr-16">
      <div className="rounded-[28px] bg-white p-4 shadow-[0_18px_50px_rgba(23,30,75,0.08)] ring-1 ring-[#171E4B]/5 sm:p-5">
        <img
          src="/site/png/platform-ai-ribbons.png"
          alt=""
          className="w-full rounded-[20px]"
        />
        <ul className="mt-2 px-1">
          {AREAS.map((area) => (
            <li key={area.label} className="flex items-center gap-3 py-2.5">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#F4F6FB]">
                <img src={area.icon} alt="" className="size-5" />
              </span>
              <span className="text-[16px] font-semibold text-[#171E4B]">{area.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute top-[66%] right-0 z-10 -translate-y-1/2 rounded-[22px] bg-white px-5 py-4 shadow-[0_18px_44px_rgba(23,30,75,0.14)] ring-1 ring-[#171E4B]/6">
        <Wordmark className="h-9" />
        <p className="mt-1.5 text-[15px] font-semibold leading-tight text-[#008F65]">
          Your agency. Connected.
        </p>
      </div>
    </div>
  );
}

function IconBubble({
  src,
  className,
}: {
  src: string;
  className: string;
}) {
  return (
    <span
      className={`absolute z-20 grid size-12 place-items-center rounded-full bg-white shadow-[0_10px_24px_rgba(23,30,75,0.1)] ring-1 ring-[#171E4B]/5 ${className}`}
    >
      <img src={src} alt="" className="size-6" />
    </span>
  );
}

export function InspectionVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[640px]">
      <div className="relative hidden min-h-[500px] lg:block">
        <FlowArrow variant="to-tablet" className="absolute top-8 left-[72px] z-30 h-[88px] w-[78px]" />
        <FlowArrow variant="to-document" className="absolute top-[168px] -right-1 z-30 h-[150px] w-[56px]" />
        <FlowArrow variant="to-photos" className="absolute top-[332px] left-[18%] z-30 h-[68px] w-[140px]" />
        <img
          src="/site/png/inspection-tablet.png"
          alt=""
          className="absolute top-10 left-1/2 z-10 w-[72%] -translate-x-1/2"
        />
        <img
          src="/site/png/badge-photo-notes.png"
          alt="Photos and notes"
          className="absolute top-[52%] left-0 z-20 w-[210px] drop-shadow-[0_10px_24px_rgba(23,30,75,0.08)]"
        />
        <img
          src="/site/png/badge-ai-summary.png"
          alt="AI-assisted summaries"
          className="absolute top-1 right-4 z-20 w-[230px] drop-shadow-[0_10px_24px_rgba(23,30,75,0.08)]"
        />
        <img
          src="/site/png/badge-property-records.png"
          alt="Connected property records"
          className="absolute top-[40%] right-10 z-20 w-[230px] drop-shadow-[0_10px_24px_rgba(23,30,75,0.08)]"
        />
        <IconBubble src="/site/png/icon-camera.png" className="top-20 left-6" />
        <IconBubble src="/site/png/icon-home.png" className="top-2 right-0" />
        <IconBubble src="/site/png/icon-document.png" className="top-[64%] right-0" />
      </div>
      <div className="lg:hidden">
        <img src="/site/png/inspection-tablet.png" alt="" className="mx-auto w-[92%]" />
        <ul className="mt-4 flex flex-col gap-3">
          <li>
            <img src="/site/png/badge-photo-notes.png" alt="Photos and notes" className="h-12 w-auto" />
          </li>
          <li>
            <img src="/site/png/badge-ai-summary.png" alt="AI-assisted summaries" className="h-12 w-auto" />
          </li>
          <li>
            <img
              src="/site/png/badge-property-records.png"
              alt="Connected property records"
              className="h-12 w-auto"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export function ExperienceCard() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] px-2 py-6 sm:px-4">
      <img
        src="/site/png/six-years-card.png"
        alt="6 years of Full Service"
        className="w-full"
      />
      <img
        src="/site/png/badge-inspection.png"
        alt="Inspections"
        className="absolute top-0 left-0 w-[200px] drop-shadow-[0_10px_24px_rgba(23,30,75,0.1)] sm:w-[220px]"
      />
      <img
        src="/site/png/badge-maintenance.png"
        alt="Maintenance"
        className="absolute top-4 right-0 w-[200px] drop-shadow-[0_10px_24px_rgba(23,30,75,0.1)] sm:top-6 sm:w-[230px]"
      />
      <img
        src="/site/png/badge-leasing.png"
        alt="Leasing"
        className="absolute bottom-2 left-1 w-[180px] drop-shadow-[0_10px_24px_rgba(23,30,75,0.1)] sm:bottom-4 sm:w-[200px]"
      />
    </div>
  );
}
