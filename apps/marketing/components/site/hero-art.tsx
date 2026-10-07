export function HeroArt() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[560px]">
      <img
        src="/site/png/glow-mint.png"
        alt=""
        className="pointer-events-none absolute -top-10 -right-8 w-[120%] max-w-none"
      />
      <img
        src="/site/png/mint-disc.png"
        alt=""
        className="pointer-events-none absolute top-[8%] left-[8%] w-[78%]"
      />
      <img
        src="/site/png/dots-mint.png"
        alt=""
        className="pointer-events-none absolute top-2 right-0 w-28 opacity-80"
      />
      <img
        src="/site/png/hero-curves.png"
        alt=""
        className="pointer-events-none absolute top-[18%] -left-4 hidden w-40 sm:block"
      />
      <img src="/site/png/hero-ai-glass.png" alt="" className="relative z-10 w-full" />
    </div>
  );
}
