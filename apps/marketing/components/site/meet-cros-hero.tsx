'use client';

import { usePathname } from 'next/navigation';
import { useRef } from 'react';

import { LaserFlow } from '@/components/site/laser-flow';
import { regionFromPathname, registerHref } from '@/lib/regions';
import { isExternalHref } from '@/lib/site-links';

export function MeetCrosHero() {
  const startFree = registerHref(regionFromPathname(usePathname() || '/AU'));
  const surfaceRef = useRef<HTMLDivElement>(null);

  return (
    <section id="meet-cros-hero" className="relative -mt-[calc(8vh+72px)] overflow-hidden bg-[#07141C] text-white">
      <div className="relative z-10 px-6 pt-[calc(72px+6rem)] pb-16 md:px-10 md:pt-[calc(72px+7rem)] md:pb-24">
        <div className="relative z-10 mx-auto max-w-[920px] text-center">
          <h1 className="text-[clamp(42px,5.4vw,72px)] leading-[0.98] font-bold tracking-[-0.04em] [text-shadow:0_0_2px_#041018,0_2px_16px_rgba(4,16,24,0.95),0_0_36px_rgba(4,16,24,0.8)]">
            CROS AI
            <span className="mt-1 block">THE AUTONOMOUS CORE</span>
          </h1>
          <div className="mx-auto mt-7 inline-flex max-w-full items-center rounded-full border border-[#67f6e4] bg-[#04141c]/80 py-1.5 pr-6 pl-1.5 shadow-[0_0_0_1px_rgba(103,246,228,0.35),0_0_36px_rgba(94,255,226,0.55)] sm:pr-8">
            <img
              src="/brand/cros.png"
              alt=""
              className="mr-3 size-12 shrink-0 rounded-full object-cover ring-2 ring-[#7CFFE8] sm:size-14"
            />
            <p className="text-left text-[15px] font-medium sm:text-[20px]">
              Don&apos;t learn the software. <span className="font-bold">Just tell CROS!</span>
            </p>
          </div>
        </div>

        <div className="relative mx-auto mt-6 w-full max-w-[1240px] lg:mt-2">
          <div
            id="meet-cros-laser"
            className="meet-cros-laser pointer-events-none absolute inset-x-[calc(50%-50vw)] top-[calc(-100vh)] z-0 h-[calc(100vh+46rem)] overflow-hidden bg-[#07141C]"
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

          <div className="relative z-10 pt-4 sm:pt-8">
            <img
              src="/meet-cros/hero-hologram.jpg"
              alt="CROS listing overdue rent and the next actions"
              className="relative z-0 w-full [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent),linear-gradient(to_bottom,transparent,#000_16%,#000_94%,transparent)] [mask-composite:intersect] [-webkit-mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent),linear-gradient(to_bottom,transparent,#000_16%,#000_94%,transparent)] [-webkit-mask-composite:source-in]"
            />
            <div className="relative z-20 mb-2 max-w-[460px] lg:absolute lg:bottom-[22%] lg:left-0 lg:mb-0">
              <h2 className="text-[clamp(32px,3.4vw,48px)] leading-[1.05] font-bold tracking-[-0.03em] [text-shadow:0_2px_16px_rgba(4,16,24,0.85)]">
                CROS executes everything for you.
              </h2>
              <p className="mt-4 max-w-[420px] text-[18px] leading-[1.5] text-white/90 sm:text-[20px] [text-shadow:0_2px_12px_rgba(4,16,24,0.85)]">
                CROS manage your properties, leasing, inspections and maintenance in one place.
              </p>
              <a
                href={startFree}
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#C8FFF3] px-7 text-[16px] font-semibold text-[#06231C] transition-colors hover:bg-white"
                {...(isExternalHref(startFree) ? { rel: 'noopener noreferrer' } : {})}
              >
                Start for free
              </a>
            </div>
            <div
              id="meet-cros-dashboard"
              ref={surfaceRef}
              className="absolute inset-x-[12%] bottom-[10%] h-px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
