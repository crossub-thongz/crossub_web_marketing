import { ArrowRight, Bell, Check, PenLine, Settings } from 'lucide-react';
import type { ReactNode } from 'react';

import { PrimaryLink, SecondaryLink, TextLink } from '@/components/site/buttons';
import { HeroArt } from '@/components/site/hero-art';
import { MeetCrosFree } from '@/components/site/meet-cros-free';
import { ExperienceCard, InspectionVisual } from '@/components/site/story-art';
import { siteLinks } from '@/lib/site-links';

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[15px] font-semibold text-[#24C68D]">{children}</p>
  );
}

const AI_STEPS = [
  {
    n: '01',
    title: 'AI reads the request',
    body: 'Understands emails, tenant messages, photos, inspection notes and maintenance details.',
  },
  {
    n: '02',
    title: 'AI prepares the work',
    body: 'Creates tasks, drafts replies, organises next steps and flags what needs action.',
  },
  {
    n: '03',
    title: 'Your team decides',
    body: 'Review, approve or override before anything moves forward.',
  },
] as const;

const PLATFORM = [
  {
    title: 'Properties',
    body: 'Owners, tenants, agents and activity in one clear property record.',
    icon: Bell,
  },
  {
    title: 'Leasing',
    body: 'Applications, onboarding, lease progress and vacating workflows.',
    icon: PenLine,
  },
  {
    title: 'Maintenance',
    body: 'Requests, quotes, approvals and contractor work in one flow.',
    icon: Settings,
  },
  {
    title: 'Inspections',
    body: 'Routine, entry, final and open inspections with connected reports.',
    icon: Check,
  },
] as const;

export function HomePage() {
  return (
    <main id="main">
      <section className="mx-auto grid w-full max-w-[1480px] items-center gap-10 overflow-visible px-6 pt-2 pb-16 md:px-10 md:pb-20 lg:grid-cols-2 lg:gap-x-16">
        <div className="@container relative z-10 min-w-0">
          <p className="text-[15px] font-semibold text-[#24C68D]">
            Built for real estate agencies.
          </p>
          <h1 className="mt-5 text-[clamp(36px,8.6cqw,60px)] leading-[1.05] font-bold tracking-[-0.03em] text-[#171E4B]">
            <span className="block">Free</span>
            <span className="mt-1 block whitespace-nowrap text-[#24C68D]">Property Management</span>
            <span className="block text-[#24C68D]">Software.</span>
            <span className="mt-1 block">Powered by AI.</span>
          </h1>
          <p className="mt-5 text-[20px] leading-[1.5] text-[#62697C]">
            Manage your portfolio in one place, with AI built in.
            <br />
            Add expert support whenever you need it.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <PrimaryLink href={siteLinks.startFree} className="w-full sm:w-auto">
              Start for free
            </PrimaryLink>
            <SecondaryLink href={siteLinks.bookDemo} className="w-full sm:w-auto">
              Book a demo
            </SecondaryLink>
          </div>
          <p className="mt-4 text-[14px] text-[#62697C]">
            No software subscription · No migration when you add support
          </p>
        </div>
        <HeroArt />
      </section>

      <section id="meet-cros" tabIndex={-1} className="rise scroll-mt-28 py-16 outline-none md:py-28 lg:py-32">
        <div className="mx-auto w-full max-w-[1480px] px-6 md:px-10">
          <MeetCrosFree showPageLink />
        </div>
      </section>

      <section id="solutions" tabIndex={-1} className="rise scroll-mt-28 py-16 outline-none md:py-28 lg:py-32">
        <div className="mx-auto w-full max-w-[1480px] px-6 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow>Three ways to grow with CROSSUB</Eyebrow>
            <h2 className="mt-5 text-[44px] leading-[1.02] font-bold tracking-[-0.03em] sm:text-[72px]">
              Start Free
              <br />
              Scale Your Way
            </h2>
            <p className="mt-5 text-[20px] leading-[1.5] text-[#62697C]">
              Your software. Your agency. Your choice of support.
            </p>
          </div>

          <div className="relative mt-14 lg:mt-20">
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
            <div className="relative grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
              <article className="order-2 flex h-full flex-col items-center rounded-[26px] bg-white p-7 text-center shadow-[0_16px_40px_rgba(23,30,75,0.07)] ring-1 ring-[#171E4B]/5 lg:order-1">
                <img src="/site/png/service-inspection.png" alt="" className="size-16" />
                <p className="mt-5 w-fit rounded-full bg-[#F4F0FF] px-2.5 py-1 text-[13px] font-semibold text-[#5C4B8A]">
                  On-demand service
                </p>
                <h3 className="mt-3 text-[26px] font-semibold tracking-[-0.02em]">Inspection Service</h3>
                <p className="mt-2 text-[20px] leading-[1.5] text-[#62697C]">
                  Let our inspectors handle the visits while you manage your portfolio.
                </p>
                <TextLink href={siteLinks.inspections} className="mt-auto pt-8">
                  Learn more
                  <ArrowRight className="size-4" aria-hidden />
                </TextLink>
              </article>

              <article className="order-1 flex h-full flex-col items-center rounded-[26px] bg-[#E7FBF4] p-7 text-center shadow-[0_18px_44px_rgba(0,143,101,0.12)] ring-1 ring-[#008F65]/10 lg:order-2 lg:-translate-y-8">
                <img src="/site/png/service-home.png" alt="" className="size-16" />
                <p className="mt-5 w-fit rounded-full bg-white px-2.5 py-1 text-[13px] font-semibold text-[#24C68D]">
                  Free
                </p>
                <h3 className="mt-3 text-[26px] font-semibold tracking-[-0.02em]">
                  Property Management Software
                </h3>
                <p className="mt-2 text-[20px] leading-[1.5] text-[#62697C]">
                  Run your own portfolio with AI-powered workflows for properties, leasing,
                  maintenance, inspections and communication.
                </p>
                <a
                  href={siteLinks.startFree}
                  rel="noopener noreferrer"
                  aria-label="Start for free"
                  className="mt-auto grid size-16 place-items-center self-center rounded-full bg-[#24C68D] text-white shadow-[0_10px_24px_rgba(36,198,141,0.28)] transition-colors hover:bg-[#1AAB78]"
                >
                  <ArrowRight className="size-7" strokeWidth={2.25} aria-hidden />
                </a>
              </article>

              <article className="order-3 flex h-full flex-col items-center rounded-[26px] bg-white p-7 text-center shadow-[0_16px_40px_rgba(23,30,75,0.07)] ring-1 ring-[#171E4B]/5">
                <img src="/site/png/service-people.png" alt="" className="size-16" />
                <p className="mt-5 w-fit rounded-full bg-[#FFF8E8] px-2.5 py-1 text-[13px] font-semibold text-[#8A6414]">
                  Expert support
                </p>
                <h3 className="mt-3 text-[26px] font-semibold tracking-[-0.02em]">Full Service</h3>
                <p className="mt-2 text-[20px] leading-[1.5] text-[#62697C]">
                  Let our experienced team support your agency’s day-to-day property management.
                </p>
                <TextLink href={siteLinks.fullService} className="mt-auto pt-8">
                  Learn more
                  <ArrowRight className="size-4" aria-hidden />
                </TextLink>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="ai" tabIndex={-1} className="rise scroll-mt-28 py-16 outline-none md:py-28 lg:py-32">
        <div className="mx-auto w-full max-w-[1480px] px-6 md:px-10">
          <Eyebrow>Built-in intelligence</Eyebrow>
          <h2 className="mt-6 max-w-[16em] text-[40px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[56px]">
            AI does the preparation.
            <br />
            Your team stays in control.
          </h2>
          <p className="mt-6 max-w-[40rem] text-[20px] leading-[1.5] text-[#62697C]">
            CROSSUB helps reduce the admin around everyday property management while keeping your
            team in the approval loop.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {AI_STEPS.map((step) => (
              <article
                key={step.n}
                className="rounded-[24px] bg-white p-6 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-[#171E4B]/5 sm:p-7"
              >
                <p className="text-[14px] font-semibold text-[#24C68D]">{step.n}</p>
                <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.02em]">{step.title}</h3>
                <p className="mt-2 text-[16px] leading-[1.55] text-[#62697C]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="support" tabIndex={-1} className="rise scroll-mt-28 py-16 outline-none md:py-28 lg:py-32">
        <div className="mx-auto w-full max-w-[1480px] px-6 md:px-10">
          <Eyebrow>One connected platform</Eyebrow>
          <h2 className="mt-6 max-w-[14em] text-[40px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[56px]">
            Everything your property team
            <br />
            needs. In one place.
          </h2>
          <p className="mt-6 max-w-[40rem] text-[20px] leading-[1.5] text-[#62697C]">
            CROSSUB keeps the day-to-day work connected, so your team can move faster without
            juggling multiple tools.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PLATFORM.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] bg-white p-6 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-[#171E4B]/5"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-[#E7FBF4] text-[#24C68D]">
                  <item.icon className="size-5" strokeWidth={2.25} aria-hidden />
                </span>
                <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-2 text-[16px] leading-[1.55] text-[#62697C]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="inspections" tabIndex={-1} className="rise scroll-mt-28 py-16 outline-none md:py-28 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1480px] items-center gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-x-16">
          <div>
            <Eyebrow>Software and on-site support</Eyebrow>
            <h2 className="mt-10 text-[44px] leading-[1.02] font-bold tracking-[-0.03em] sm:text-[72px]">
              Every Inspection,
              <br />
              Connected.
            </h2>
            <p className="mt-6 max-w-[40rem] text-[20px] leading-[1.5] text-[#62697C]">
              Use our inspection tools yourself, or book our team to attend. Keep photos, reports
              and follow-up in one place.
            </p>
            <SecondaryLink href={siteLinks.inspections} className="mt-20">
              Explore inspections
            </SecondaryLink>
          </div>
          <InspectionVisual />
        </div>
      </section>

      <section id="experience" tabIndex={-1} className="rise scroll-mt-28 py-16 outline-none md:py-28 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1480px] items-center gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-x-16">
          <div className="order-2 lg:order-1">
            <ExperienceCard />
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>Experience behind the platform</Eyebrow>
            <h2 className="mt-10 text-[44px] leading-[1.02] font-bold tracking-[-0.03em] sm:text-[72px]">
              Real Experience.
              <br />
              Real Support.
            </h2>
            <p className="mt-6 max-w-[40rem] text-[20px] leading-[1.5] text-[#62697C]">
              With six years of Full Service experience, our team understands the day-to-day
              demands of property management.
            </p>
            <p className="mt-4 text-[20px] font-medium text-[#171E4B]">
              Practical software, backed by experienced people.
            </p>
            <SecondaryLink href={siteLinks.about} className="mt-20">
              Meet CROSSUB
            </SecondaryLink>
          </div>
        </div>
      </section>

      <section className="rise pt-6 pb-20 md:pb-28">
        <div className="mx-auto w-full max-w-[1480px] px-6 md:px-10">
        <div
          className="relative overflow-hidden rounded-[48px] bg-cover bg-center px-6 py-16 text-center sm:px-12 sm:py-20"
          style={{ backgroundImage: 'url(/site/png/cta-panel.png)' }}
        >
          <img
            src="/site/png/contour-rings.png"
            alt=""
            className="pointer-events-none absolute bottom-0 left-0 w-[42%]"
          />
          <div className="relative mx-auto max-w-2xl">
            <Eyebrow>Your next chapter</Eyebrow>
            <h2 className="mt-3 text-[44px] leading-[1.02] font-bold tracking-[-0.03em] sm:text-[72px]">
              Start free today.
              <span className="block">Grow with us, your way.</span>
            </h2>
            <p className="mt-4 text-[20px] leading-[1.5] text-[#62697C]">
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
        </div>
      </section>
    </main>
  );
}
