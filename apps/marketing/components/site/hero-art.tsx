import type { ReactNode } from 'react';

function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/80 bg-white/95 p-3 shadow-[0_16px_40px_rgba(23,30,75,0.08)] ${className ?? ''}`}
    >
      {children}
    </div>
  );
}

export function HeroArt() {
  return (
    <div aria-hidden className="relative mx-auto aspect-square w-full max-w-[540px]">
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_45%_45%,rgba(180,245,220,0.95),rgba(241,232,255,0.35)_46%,transparent_70%)]" />
      <div className="absolute top-6 right-2 h-36 w-28 bg-[radial-gradient(circle,#c9c6e6_1.15px,transparent_1.25px)] bg-[length:11px_11px] opacity-70" />
      <svg viewBox="0 0 80 80" className="absolute top-10 left-6 size-5 text-[#7C6BB5]">
        <path d="M40 6v68M6 40h68" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      </svg>
      <svg viewBox="0 0 80 80" className="absolute right-10 bottom-16 size-4 text-[#008F65]">
        <path d="M40 8v64M8 40h64" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      </svg>

      <svg viewBox="0 0 520 520" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="hero-ai-face" gradientUnits="userSpaceOnUse" x1="40" y1="20" x2="340" y2="270">
            <stop offset="0" stopColor="#F4FFFB" />
            <stop offset="0.22" stopColor="#7EE8C8" />
            <stop offset="0.55" stopColor="#2EBE9A" />
            <stop offset="0.82" stopColor="#6AA4F0" />
            <stop offset="1" stopColor="#C9B8FF" />
          </linearGradient>
          <linearGradient id="hero-ai-depth" gradientUnits="userSpaceOnUse" x1="40" y1="20" x2="40" y2="270">
            <stop offset="0" stopColor="#5ED4B0" />
            <stop offset="1" stopColor="#147A62" />
          </linearGradient>
        </defs>
        <g transform="translate(86 128)" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <g stroke="#14936C" strokeWidth="58" opacity="0.14" transform="translate(10 16)">
            <path d="M46 248 L138 28 L230 248" />
            <path d="M74 198 H202" />
            <path d="M292 28 V248" />
          </g>
          <g stroke="url(#hero-ai-depth)" strokeWidth="54" opacity="0.55" transform="translate(0 8)">
            <path d="M46 248 L138 28 L230 248" />
            <path d="M74 198 H202" />
            <path d="M292 28 V248" />
          </g>
          <g stroke="white" strokeWidth="52" opacity="0.95">
            <path d="M46 248 L138 28 L230 248" />
            <path d="M74 198 H202" />
            <path d="M292 28 V248" />
          </g>
          <g stroke="url(#hero-ai-face)" strokeWidth="44">
            <path d="M46 248 L138 28 L230 248" />
            <path d="M74 198 H202" />
            <path d="M292 28 V248" />
          </g>
          <g stroke="white" strokeWidth="10" opacity="0.75">
            <path d="M72 150 L132 42" />
            <path d="M292 42 V130" />
          </g>
        </g>
      </svg>

      <div className="float-slow absolute top-[8%] left-[2%] w-[150px] -rotate-6">
        <GlassCard>
          <div className="mb-2 h-2 w-10 rounded-full bg-[#D7F6EA]" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-[#E4E8F2]" />
            <div className="h-1.5 w-4/5 rounded-full bg-[#E4E8F2]" />
            <div className="h-1.5 w-3/5 rounded-full bg-[#E4E8F2]" />
          </div>
          <div className="mt-3 h-8 rounded-lg bg-gradient-to-r from-[#E0F7EE] to-[#F1E8FF]" />
        </GlassCard>
      </div>

      <div className="float-delayed absolute top-[18%] right-[0%] w-[158px] rotate-3">
        <GlassCard>
          <div className="mb-2 flex gap-1">
            <span className="size-1.5 rounded-full bg-[#F1E8FF]" />
            <span className="size-1.5 rounded-full bg-[#FFF4D8]" />
            <span className="size-1.5 rounded-full bg-[#E0F7EE]" />
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-3/4 rounded-full bg-[#B7F0DC]" />
            <div className="h-1.5 w-full rounded-full bg-[#E7E4F8]" />
            <div className="h-1.5 w-2/3 rounded-full bg-[#171E4B]/15" />
            <div className="h-1.5 w-5/6 rounded-full bg-[#B7F0DC]" />
          </div>
        </GlassCard>
      </div>

      <div className="float-slow absolute bottom-[18%] left-[8%] w-[132px] rotate-2">
        <GlassCard>
          <div className="flex h-14 items-end gap-1.5">
            <span className="h-6 w-3 rounded-sm bg-[#F1E8FF]" />
            <span className="h-10 w-3 rounded-sm bg-[#7EE8C8]" />
            <span className="h-8 w-3 rounded-sm bg-[#FFF4D8]" />
            <span className="h-12 w-3 rounded-sm bg-[#008F65]/80" />
            <span className="h-7 w-3 rounded-sm bg-[#C9C6E6]" />
          </div>
        </GlassCard>
      </div>

      <div className="float-delayed absolute right-[12%] bottom-[14%] grid size-14 place-items-center rounded-full bg-[#007455] text-white shadow-[0_12px_28px_rgba(0,116,85,0.28)]">
        <svg viewBox="0 0 24 24" className="size-6" fill="none">
          <path
            d="M7 17L17 7M17 7H9M17 7v8"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
