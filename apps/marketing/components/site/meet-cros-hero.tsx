'use client';

import { useRef } from 'react';

import { LaserFlow } from '@/components/site/laser-flow';
import { isExternalHref, siteLinks } from '@/lib/site-links';

export function MeetCrosHero() {
  const surfaceRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative -mt-[8vh] bg-white pt-4 text-white md:pt-6">
      <div className="relative z-10 px-6 md:px-10">
        <div className="relative z-10 mx-auto grid w-full max-w-[1480px] items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="text-[clamp(32px,4.6vw,72px)] leading-[0.95] font-bold tracking-[-0.045em]">
              <span className="whitespace-nowrap">
                Simplify <span className="font-medium italic">Property</span>
              </span>
              <span className="mt-2 block">management</span>
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
          <div
            id="meet-cros-laser"
            className="pointer-events-none absolute inset-x-[calc(50%-50vw)] top-[calc(-100vh)] bottom-1/2 z-0 overflow-hidden bg-[#07141C]"
          >
            <LaserFlow
              color="#7CFFE8"
              beamPosition={0.5}
              surfaceRef={surfaceRef}
              intensity={1.55}
              beamWidth={0.9}
              flare={1.2}
              spread={0.9}
              fog={0.16}
              intro={false}
            />
          </div>
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
            id="meet-cros-dashboard"
            ref={surfaceRef}
            className="relative z-10 overflow-hidden rounded-[28px] shadow-[0_30px_80px_rgba(23,30,75,0.16)]"
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
