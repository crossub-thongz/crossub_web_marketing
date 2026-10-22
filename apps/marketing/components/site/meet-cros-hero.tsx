'use client';

import { useRef } from 'react';

import { LaserFlow } from '@/components/site/laser-flow';
import { isExternalHref, siteLinks } from '@/lib/site-links';

export function MeetCrosHero() {
  const surfaceRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-hidden bg-[#07141C] text-white">
      <div className="pointer-events-none absolute inset-0 z-0">
      <LaserFlow
        color="#7CFFE8"
        beamPosition={0.5}
        surfaceRef={surfaceRef}
        intensity={1.45}
        beamWidth={0.85}
        flare={1.15}
        spread={0.85}
        fog={0.12}
        intro={false}
      />
      </div>
      <div className="relative z-10 px-6 pt-16 pb-16 md:px-10 md:pt-20 md:pb-20">
        <div className="mx-auto grid w-full max-w-[1480px] items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="text-[52px] leading-[0.95] font-bold tracking-[-0.045em] sm:text-[76px]">
              Simplify
              <span className="mt-2 block font-medium italic">Property</span>
              management
            </h1>
            <a
              href={siteLinks.startFree}
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#24C68D] px-7 text-[16px] font-semibold text-white shadow-[0_10px_24px_rgba(36,198,141,0.28)] transition-colors hover:bg-[#1AAB78]"
              {...(isExternalHref(siteLinks.startFree) ? { rel: 'noopener noreferrer' } : {})}
            >
              Start for free
            </a>
          </div>
          <div className="lg:pt-4">
            <p className="text-[22px] leading-[1.35] font-semibold sm:text-[26px]">
              Free Software. Free AI. Your Way to Manage.
            </p>
            <p className="mt-4 max-w-[520px] text-[17px] leading-[1.65] text-white/75">
              Manage properties, leasing, inspections and maintenance in one place. Start with free
              software and add professional services only when you need them.
            </p>
          </div>
        </div>
        <div className="relative mx-auto mt-12 w-full max-w-[1100px]">
          <img
            src="/brand/cros.png"
            alt=""
            className="absolute -top-10 right-6 z-20 hidden w-20 sm:block"
          />
          <img
            src="/home/mascot-sparkle.png"
            alt=""
            className="absolute -bottom-8 -left-4 z-20 hidden w-16 sm:block"
          />
          <div
            ref={surfaceRef}
            className="overflow-hidden rounded-[28px] shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
          >
            <img
              src="/home/dashboard.jpg?v=2"
              alt="CROSSUB portfolio dashboard"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
