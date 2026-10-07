import { ArrowRight, Check } from 'lucide-react';
import type { ReactNode } from 'react';

import { PrimaryLink, SecondaryLink, TextLink } from '@/components/site/buttons';
import { HeroArt } from '@/components/site/hero-art';
import { ExperienceCard, FlowArrow, InspectionVisual, SupportCluster } from '@/components/site/story-art';
import { siteLinks } from '@/lib/site-links';

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[12px] font-semibold tracking-[0.16em] text-[#007455]">{children}</p>
  );
}

function Scribble() {
  return (
    <img
      src="/site/png/underline-mint.png"
      alt=""
      className="pointer-events-none absolute -bottom-1 left-0 h-3 w-full object-fill"
    />
  );
}

const STEPS = [
  {
    n: '01',
    title: 'Understand',
    body: 'Make sense of requests, photos and reports.',
    chip: 'bg-[#E0F7EE] text-[#007455]',
    place: 'lg:absolute lg:top-[108px] lg:left-0 lg:w-[220px]',
  },
  {
    n: '02',
    title: 'Prepare',
    body: 'Draft responses and organise next steps.',
    chip: 'bg-[#FFF4D8] text-[#7A5B12]',
    place: 'lg:absolute lg:top-0 lg:right-6 lg:w-[210px]',
  },
  {
    n: '03',
    title: 'Review',
    body: 'Flag what needs your team’s attention.',
    chip: 'bg-[#F1E8FF] text-[#5C4B8A]',
    place: 'lg:absolute lg:top-[322px] lg:left-[128px] lg:w-[320px]',
  },
] as const;

export function HomePage() {
  return (
    <main id="main">
      <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 pt-10 pb-20 md:px-6 md:pt-16 md:pb-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pt-14">
        <div>
          <Eyebrow>FREE SOFTWARE. REAL EXPERTISE.</Eyebrow>
          <h1 className="mt-4 max-w-[640px] text-[40px] leading-[1.08] font-semibold tracking-[-0.035em] text-[#171E4B] sm:text-[52px] lg:text-[60px]">
            Property management.
            <span className="block">Powered by AI.</span>
            <span className="relative mt-1 inline-block">
              Free to use.
              <Scribble />
            </span>
          </h1>
          <p className="mt-5 max-w-[520px] text-[17px] leading-[1.6] text-[#62697C] sm:text-[18px]">
            Free property management software for your agency. Add inspection or Full Service
            support whenever you need it.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryLink href={siteLinks.startFree} className="w-full sm:w-auto">
              Start for free
            </PrimaryLink>
            <SecondaryLink href={siteLinks.bookDemo} className="w-full sm:w-auto">
              Book a demo
            </SecondaryLink>
          </div>
        </div>
        <div>
          <p className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[13px] font-semibold text-[#171E4B] shadow-[0_10px_30px_rgba(23,30,75,0.08)] ring-1 ring-[#171E4B]/5 lg:mr-0 lg:ml-auto">
            <span className="grid size-6 place-items-center rounded-full bg-[#E0F7EE] text-[12px] font-bold text-[#007455]">
              6
            </span>
            years of Full Service experience
          </p>
          <HeroArt />
        </div>
      </section>

      <section id="solutions" tabIndex={-1} className="rise scroll-mt-28 px-5 py-16 outline-none md:px-6 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>THREE WAYS TO GROW WITH CROSSUB</Eyebrow>
            <h2 className="mt-3 text-[32px] leading-[1.15] font-semibold tracking-[-0.03em] sm:text-[40px]">
              Start Free. Scale Your Way.
            </h2>
            <p className="mt-4 text-[17px] leading-[1.6] text-[#62697C]">
              Your software. Your agency. Your choice of support.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-16">
            <img
              src="/site/png/dots-mint.png"
              alt=""
              className="pointer-events-none absolute -bottom-8 -left-6 hidden w-28 lg:block"
            />
            <img
              src="/site/png/glass-square.png"
              alt=""
              className="pointer-events-none absolute -top-8 -right-4 hidden w-16 lg:block"
            />
            <div className="relative grid items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
              <article className="order-2 flex h-full flex-col rounded-[26px] bg-white p-7 shadow-[0_16px_40px_rgba(23,30,75,0.07)] ring-1 ring-[#171E4B]/5 lg:order-1">
                <img src="/site/png/service-inspection.png" alt="" className="size-12" />
                <p className="mt-5 w-fit rounded-full bg-[#F4F0FF] px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] text-[#5C4B8A]">
                  ON-DEMAND SERVICE
                </p>
                <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.02em]">Inspection Only</h3>
                <p className="mt-2 text-[16px] leading-[1.6] text-[#62697C]">
                  Let our inspectors handle the visits while you manage your portfolio.
                </p>
                <TextLink href={siteLinks.inspections} className="mt-auto pt-8">
                  Explore inspections
                  <ArrowRight className="size-4" aria-hidden />
                </TextLink>
              </article>

              <article className="order-1 flex h-full flex-col rounded-[26px] bg-[#E7FBF4] p-7 shadow-[0_18px_44px_rgba(0,143,101,0.12)] ring-1 ring-[#008F65]/10 lg:order-2 lg:-translate-y-8">
                <img src="/site/png/service-home.png" alt="" className="size-12" />
                <p className="mt-5 w-fit rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] text-[#007455]">
                  FREE
                </p>
                <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.02em]">
                  Property Management Software
                </h3>
                <p className="mt-2 text-[16px] leading-[1.6] text-[#3E4660]">
                  Manage your portfolio, leasing and maintenance with AI-powered tools.
                </p>
                <a
                  href={siteLinks.startFree}
                  rel="noopener noreferrer"
                  aria-label="Start for free"
                  className="mt-auto grid size-12 place-items-center self-center"
                >
                  <img src="/site/png/round-arrow.png" alt="" className="size-12" />
                </a>
              </article>

              <article className="order-3 flex h-full flex-col rounded-[26px] bg-white p-7 shadow-[0_16px_40px_rgba(23,30,75,0.07)] ring-1 ring-[#171E4B]/5">
                <img src="/site/png/service-people.png" alt="" className="size-12" />
                <p className="mt-5 w-fit rounded-full bg-[#FFF8E8] px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] text-[#8A6414]">
                  EXPERT SUPPORT
                </p>
                <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.02em]">Full Service</h3>
                <p className="mt-2 text-[16px] leading-[1.6] text-[#62697C]">
                  Let our experienced team support your agency’s day-to-day property management.
                </p>
                <TextLink href={siteLinks.fullService} className="mt-auto pt-8">
                  Explore Full Service
                  <ArrowRight className="size-4" aria-hidden />
                </TextLink>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="ai" tabIndex={-1} className="rise scroll-mt-28 px-5 py-16 outline-none md:px-6 md:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>BUILT-IN INTELLIGENCE</Eyebrow>
            <h2 className="mt-3 text-[32px] leading-[1.15] font-semibold tracking-[-0.03em] sm:text-[40px]">
              AI Moves The Work Forward.
            </h2>
            <p className="mt-4 max-w-xl text-[17px] leading-[1.6] text-[#62697C]">
              From inspection reports to maintenance requests, AI helps reduce admin and keeps
              your team in control.
            </p>
            <SecondaryLink href={siteLinks.ai} className="mt-8">
              See how it works
            </SecondaryLink>
          </div>
          <div id="ai-steps" className="relative mx-auto w-full max-w-[600px] overflow-visible lg:h-[560px]">
            <img
              src="/site/png/glass-square.png"
              alt=""
              className="pointer-events-none absolute -top-3 right-6 z-0 hidden w-14 lg:block"
            />
            <img
              src="/site/png/dots-mint.png"
              alt=""
              className="pointer-events-none absolute bottom-28 left-2 z-0 hidden w-20 lg:block"
            />
            <FlowArrow
              variant="up"
              className="absolute top-0 left-[188px] z-20 hidden h-[150px] w-[96px] lg:block"
            />
            <FlowArrow
              variant="down"
              className="absolute top-[196px] right-0 z-0 hidden h-[72px] w-[156px] lg:block"
            />
            <FlowArrow
              variant="left"
              className="absolute -bottom-2 left-[8px] z-0 hidden h-[88px] w-[112px] lg:block"
            />
            <div className="relative flex flex-col gap-4 lg:block lg:h-full">
              {STEPS.map((step) => (
                <article
                  key={step.n}
                  className={`relative z-10 rounded-[26px] bg-white p-6 shadow-[0_16px_40px_rgba(23,30,75,0.07)] ring-1 ring-[#171E4B]/5 ${step.place}`}
                >
                  <span className={`grid size-12 place-items-center rounded-full text-[14px] font-bold ${step.chip}`}>
                    {step.n}
                  </span>
                  <h3 className="mt-4 text-[20px] font-semibold">{step.title}</h3>
                  <p className="mt-2 text-[16px] leading-[1.6] text-[#62697C]">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="support" tabIndex={-1} className="rise scroll-mt-28 px-5 py-16 outline-none md:px-6 md:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <SupportCluster />
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>FLEXIBLE SUPPORT</Eyebrow>
            <h2 className="mt-3 text-[32px] leading-[1.15] font-semibold tracking-[-0.03em] sm:text-[40px]">
              Same Platform. Same Data. More Support.
            </h2>
            <p className="mt-4 max-w-xl text-[17px] leading-[1.6] text-[#62697C]">
              Start with free software. Add Inspection Only or Full Service as your agency grows.
            </p>
            <ul className="mt-6 space-y-3">
              {['Keep your property records', 'Choose the support you need', 'Stay in control'].map(
                (point) => (
                  <li key={point} className="flex items-center gap-3 text-[16px] font-medium">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#E0F7EE] text-[#007455]">
                      <Check className="size-4" strokeWidth={2.25} aria-hidden />
                    </span>
                    {point}
                  </li>
                ),
              )}
            </ul>
            <SecondaryLink href={siteLinks.fullService} className="mt-8">
              Explore Full Service
            </SecondaryLink>
          </div>
        </div>
      </section>

      <section id="inspections" tabIndex={-1} className="rise scroll-mt-28 px-5 py-16 outline-none md:px-6 md:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <div>
            <Eyebrow>SOFTWARE + ON-SITE SUPPORT</Eyebrow>
            <h2 className="mt-3 text-[32px] leading-[1.15] font-semibold tracking-[-0.03em] sm:text-[40px]">
              Every Inspection, Connected.
            </h2>
            <p className="mt-4 max-w-xl text-[17px] leading-[1.6] text-[#62697C]">
              Use our inspection tools yourself, or book our team to attend. Keep photos, reports
              and follow-up in one place.
            </p>
            <SecondaryLink href={siteLinks.inspections} className="mt-8">
              Explore inspections
            </SecondaryLink>
          </div>
          <InspectionVisual />
        </div>
      </section>

      <section id="experience" tabIndex={-1} className="rise scroll-mt-28 px-5 py-16 outline-none md:px-6 md:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <ExperienceCard />
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>EXPERIENCE BEHIND THE PLATFORM</Eyebrow>
            <h2 className="mt-3 text-[32px] leading-[1.15] font-semibold tracking-[-0.03em] sm:text-[40px]">
              Real Experience. Real Support.
            </h2>
            <p className="mt-4 max-w-xl text-[17px] leading-[1.6] text-[#62697C]">
              With six years of Full Service experience, our team understands the day-to-day
              demands of property management.
            </p>
            <p className="mt-3 text-[17px] font-medium text-[#171E4B]">
              Practical software, backed by experienced people.
            </p>
            <SecondaryLink href={siteLinks.about} className="mt-8">
              Meet Crossub
            </SecondaryLink>
          </div>
        </div>
      </section>

      <section className="rise px-5 pt-6 pb-20 md:px-6 md:pb-28">
        <div
          className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[48px] bg-cover bg-center px-6 py-16 text-center sm:px-12 sm:py-20"
          style={{ backgroundImage: 'url(/site/png/cta-panel.png)' }}
        >
          <img
            src="/site/png/contour-rings.png"
            alt=""
            className="pointer-events-none absolute bottom-0 left-0 w-[42%]"
          />
          <img src="/site/png/send-orb.png" alt="" className="absolute top-8 right-8 size-14" />
          <div className="relative mx-auto max-w-2xl">
            <Eyebrow>YOUR NEXT CHAPTER</Eyebrow>
            <h2 className="mt-3 text-[32px] leading-[1.15] font-semibold tracking-[-0.03em] sm:text-[44px]">
              Start free today.
              <span className="block">Grow with us, your way.</span>
            </h2>
            <p className="mt-4 text-[17px] leading-[1.6] text-[#3E4660]">
              Free software, with expert support when you need it.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <PrimaryLink href={siteLinks.startFree} className="w-full sm:w-auto">
                Start for free
              </PrimaryLink>
              <SecondaryLink href={siteLinks.bookDemo} className="w-full sm:w-auto">
                Book a demo
              </SecondaryLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
