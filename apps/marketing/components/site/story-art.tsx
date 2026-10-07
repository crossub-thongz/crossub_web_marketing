import { Wordmark } from '@/components/site/logo';

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
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#F4F6FB]">
                <img src={area.icon} alt="" className="size-7" />
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

function IconBubble({ src }: { src: string }) {
  return (
    <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full bg-white shadow-[0_0_0_7px_rgba(0,167,120,0.12),0_10px_20px_rgba(23,30,75,0.08)] ring-1 ring-[#171E4B]/5">
      <img src={src} alt="" className="size-[22px]" />
    </span>
  );
}

const MOBILE_BADGES = [
  { src: '/site/png/badge-photo-notes.png', alt: 'Photos and notes' },
  { src: '/site/png/badge-ai-summary.png', alt: 'AI-assisted summaries' },
  { src: '/site/png/badge-property-records.png', alt: 'Connected property records' },
] as const;

export function InspectionVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[616px]">
      <div className="hidden flex-col gap-6 lg:flex">
        <div className="flex items-center justify-end gap-5 pr-1">
          <img
            src="/site/png/badge-ai-summary.png"
            alt="AI-assisted summaries"
            className="w-[224px] max-w-[46%] drop-shadow-[0_10px_22px_rgba(23,30,75,0.1)]"
          />
          <IconBubble src="/site/png/icon-home.png" />
        </div>
        <div className="flex items-center justify-center gap-5">
          <IconBubble src="/site/png/icon-camera.png" />
          <img
            src="/site/png/inspection-tablet.png"
            alt=""
            className="w-[min(455px,calc(100%-4.5rem))]"
          />
        </div>
        <div className="flex items-center justify-between gap-5">
          <img
            src="/site/png/badge-photo-notes.png"
            alt="Photos and notes"
            className="w-[207px] max-w-[40%] drop-shadow-[0_10px_22px_rgba(23,30,75,0.1)]"
          />
          <div className="flex min-w-0 items-center gap-5">
            <img
              src="/site/png/badge-property-records.png"
              alt="Connected property records"
              className="w-[235px] max-w-[calc(100%-4.25rem)] drop-shadow-[0_10px_22px_rgba(23,30,75,0.1)]"
            />
            <IconBubble src="/site/png/icon-document.png" />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <img src="/site/png/inspection-tablet.png" alt="" className="mx-auto w-full" />
        <ul className="mt-5 flex flex-col gap-4">
          {MOBILE_BADGES.map((badge) => (
            <li key={badge.alt}>
              <img src={badge.src} alt={badge.alt} className="h-[62px] w-auto" />
            </li>
          ))}
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
        className="absolute top-1 left-0 w-[168px] drop-shadow-[0_10px_24px_rgba(23,30,75,0.1)] sm:w-[188px]"
      />
      <img
        src="/site/png/badge-maintenance.png"
        alt="Maintenance"
        className="absolute top-3 right-0 w-[176px] drop-shadow-[0_10px_24px_rgba(23,30,75,0.1)] sm:top-5 sm:w-[196px]"
      />
      <img
        src="/site/png/badge-leasing.png"
        alt="Leasing"
        className="absolute bottom-3 left-0 w-[156px] drop-shadow-[0_10px_24px_rgba(23,30,75,0.1)] sm:bottom-5 sm:w-[176px]"
      />
    </div>
  );
}
