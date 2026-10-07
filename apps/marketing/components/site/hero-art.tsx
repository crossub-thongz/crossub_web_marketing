export function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] pt-2">
      <img
        src="/site/png/glow-mint.png"
        alt=""
        className="pointer-events-none absolute -top-6 -right-8 w-[120%] max-w-none"
      />
      <img
        src="/site/png/mint-disc.png"
        alt=""
        className="pointer-events-none absolute top-[12%] left-[8%] w-[78%]"
      />
      <img
        src="/site/png/dots-mint.png"
        alt=""
        className="pointer-events-none absolute top-10 right-0 w-28 opacity-80"
      />
      <img
        src="/site/png/hero-curves.png"
        alt=""
        className="pointer-events-none absolute -top-1 right-[14%] z-20 hidden w-[60%] sm:block"
      />
      <img src="/site/png/hero-ai-glass.png" alt="" className="relative z-10 w-full" />
      <div className="absolute top-1 right-1 z-30 flex items-center gap-2.5 rounded-[18px] bg-white py-2.5 pr-4 pl-3 shadow-[0_12px_32px_rgba(23,30,75,0.1)] ring-1 ring-[#171E4B]/5 sm:right-0 sm:top-0">
        <img src="/site/png/icon-sparkle.png" alt="" className="size-[22px] shrink-0" />
        <p className="text-[13px] leading-[1.25] font-semibold text-[#171E4B]">
          6 years of Full
          <br />
          Service experience
        </p>
      </div>
    </div>
  );
}
