import { Wordmark } from '@/components/site/logo';

const AREAS = [
  { label: 'Inspections', icon: '/site/png/icon-shield.png' },
  { label: 'Maintenance', icon: '/site/png/icon-maintenance.png' },
  { label: 'Leasing', icon: '/site/png/icon-home.png' },
  { label: 'Reports', icon: '/site/png/icon-document.png' },
] as const;

function TintIcon({ src, color, className }: { src: string; color: string; className: string }) {
  return (
    <span
      aria-hidden
      className={className}
      style={{
        backgroundColor: color,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  );
}

export function SupportCluster() {
  return (
    <div className="relative mx-auto w-full max-w-[540px] pr-6 sm:pr-16 lg:max-w-none">
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
                <TintIcon src={area.icon} color="#8B93A7" className="size-6" />
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
  color,
  halo,
  bubble = 'bg-white',
}: {
  src: string;
  className: string;
  color: string;
  halo: string;
  bubble?: string;
}) {
  return (
    <span
      className={`absolute z-30 grid size-14 place-items-center rounded-full ring-1 ring-[#171E4B]/5 ${bubble} ${className}`}
      style={{ boxShadow: `0 0 0 8px ${halo}, 0 10px 22px rgba(23,30,75,0.1)` }}
    >
      <TintIcon src={src} color={color} className="size-6" />
    </span>
  );
}

const MOBILE_BADGES = [
  { src: '/site/png/badge-ai-summary.png', alt: 'AI-assisted summaries' },
  { src: '/site/png/badge-property-records.png', alt: 'Connected property records' },
] as const;

function PhotosNotesCard({ className = '' }: { className?: string }) {
  return (
    <article
      className={`overflow-hidden rounded-[24px] bg-white p-2.5 shadow-[0_16px_40px_rgba(23,30,75,0.12)] ring-1 ring-white ${className}`}
    >
      <img
        src="/site/png/photo-notes-room.png"
        alt=""
        className="w-full rounded-[16px]"
      />
      <div className="flex items-center gap-3 px-2 py-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-[14px] bg-[#F2E8FF]">
          <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
            <rect x="3.5" y="4" width="17" height="16" rx="2" stroke="#A365F4" strokeWidth="1.7" />
            <circle cx="8.5" cy="9" r="1.4" stroke="#A365F4" strokeWidth="1.7" />
            <path
              d="m4 16.5 5.2-4.6 3.4 3.2 2.4-2.2 5 4.2"
              stroke="#A365F4"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="text-[16px] font-medium text-[#171E4B]">Photos and notes</p>
      </div>
    </article>
  );
}

export function InspectionVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[680px] lg:max-w-none">
      <div className="relative hidden h-[480px] lg:block">
        <img
          src="/site/png/inspection-tablet.png"
          alt=""
          className="absolute top-[78px] left-1/2 z-10 w-[72%] -translate-x-1/2"
        />
        <img
          src="/site/png/badge-ai-summary.png"
          alt="AI-assisted summaries"
          className="absolute top-1 right-3 z-20 w-[280px] drop-shadow-[0_12px_24px_rgba(23,30,75,0.12)]"
        />
        <PhotosNotesCard className="absolute bottom-0 left-0 z-20 w-[250px] xl:w-[300px]" />
        <img
          src="/site/png/badge-property-records.png"
          alt="Connected property records"
          className="absolute top-[358px] right-0 z-20 w-[308px] drop-shadow-[0_12px_24px_rgba(23,30,75,0.12)]"
        />
        <IconBubble
          src="/site/png/icon-camera.png"
          color="#00A070"
          halo="rgba(0,167,120,0.16)"
          className="top-[6px] left-[88px]"
        />
        <IconBubble
          src="/site/png/icon-camera.png"
          color="#3D8ED6"
          halo="rgba(61,142,214,0.18)"
          className="top-[156px] left-0"
        />
        <IconBubble
          src="/site/png/icon-home.png"
          color="#E0A22B"
          halo="rgba(224,162,43,0.2)"
          bubble="bg-[#FFF6E4]"
          className="top-[102px] right-[148px]"
        />
        <IconBubble
          src="/site/png/icon-photo.png"
          color="#00A070"
          halo="rgba(0,167,120,0.16)"
          className="top-[198px] right-[18px]"
        />
      </div>
      <div className="lg:hidden">
        <img src="/site/png/inspection-tablet.png" alt="" className="mx-auto w-full" />
        <div className="mt-5 flex flex-col gap-4">
          <PhotosNotesCard className="max-w-[320px]" />
          {MOBILE_BADGES.map((badge) => (
            <img key={badge.alt} src={badge.src} alt={badge.alt} className="h-[68px] w-auto" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ExperienceCard() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] px-2 py-6 sm:px-4 lg:max-w-none">
      <img
        src="/site/png/six-years-card.png"
        alt="6 years of Full Service"
        className="w-full"
      />
      <img
        src="/site/png/badge-inspection.png"
        alt="Inspections"
        className="absolute top-1 left-0 w-[168px] drop-shadow-[0_10px_24px_rgba(23,30,75,0.1)] sm:w-[188px] xl:w-[264px]"
      />
      <img
        src="/site/png/badge-maintenance.png"
        alt="Maintenance"
        className="absolute top-3 right-0 w-[176px] drop-shadow-[0_10px_24px_rgba(23,30,75,0.1)] sm:top-5 sm:w-[196px] xl:w-[276px]"
      />
      <img
        src="/site/png/badge-leasing.png"
        alt="Leasing"
        className="absolute bottom-3 left-0 w-[156px] drop-shadow-[0_10px_24px_rgba(23,30,75,0.1)] sm:bottom-5 sm:w-[176px] xl:w-[248px]"
      />
    </div>
  );
}
