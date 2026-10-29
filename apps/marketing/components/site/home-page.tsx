import { ArrowRight, Check, ClipboardCheck, Home, PenLine, Settings, Users } from 'lucide-react';

import { PrimaryLink, SecondaryLink } from '@/components/site/buttons';
import { AiControl, PeekCarousel } from '@/components/site/home-carousels';
import { siteLinks } from '@/lib/site-links';

const MANAGE = [
  {
    title: 'Property Management Software',
    body: 'Run your own portfolio with AI-powered workflow for properties, leasing, maintenance, inspections and communication.',
    href: siteLinks.startFree,
    icon: Home,
    tile: 'bg-[#E7FBF4] text-[#24C68D]',
    featured: false,
  },
  {
    title: 'Inspection Service',
    body: 'Let our inspectors handle the visits while you manage your portfolio.',
    href: siteLinks.inspections,
    icon: ClipboardCheck,
    tile: 'bg-[#F3EEFF] text-[#7A6BB5]',
    featured: true,
  },
  {
    title: 'Full Service',
    body: 'Let our experienced team support your agency’s day-to-day property management.',
    href: siteLinks.fullService,
    icon: Users,
    tile: 'bg-[#FFF6DE] text-[#C4A15A]',
    featured: false,
  },
] as const;

const WHY = [
  {
    image: '/home/why-team.jpg',
    stat: '6',
    label: 'years of full-service Australian property expertise.',
    wash: 'bg-gradient-to-t from-[#171E4B]/55 via-[#171E4B]/10 to-transparent',
  },
  {
    image: '/home/why-laptop.jpg',
    stat: '90%',
    label: 'Ease of use and admin',
    wash: 'bg-[#171E4B]/35',
  },
  {
    image: '/home/why-kitchen.jpg',
    stat: '91%',
    label: 'Minimize time',
    wash: 'bg-[#3AC892]/72',
  },
] as const;

export function HomePage() {
  return (
    <main id="main">
      <section className="-mt-[8vh] px-6 pt-4 pb-2 md:px-10 md:pt-6 md:pb-3">
        <div className="mx-auto flex max-w-[1100px] items-center justify-center gap-3 sm:gap-8">
          <div className="min-w-0 text-center">
            <h1 className="text-[32px] leading-[1.05] font-bold tracking-[-0.03em] text-[#171E4B] sm:text-[48px]">
              Start Free Scale Your Way
            </h1>
            <p className="mt-2 text-[16px] text-[#62697C] sm:text-[18px]">
              Your software. Your agency. Your choice of support.
            </p>
          </div>
          <img
            src="/brand/cros.png"
            alt="CROS"
            className="h-24 w-auto shrink-0 object-contain sm:h-32"
          />
        </div>
      </section>

      <section className="overflow-hidden bg-[#DEFBEF] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-[1480px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[40px] leading-[1.05] font-bold tracking-[-0.03em] text-[#171E4B] sm:text-[56px]">
              3 ways CROS helps.
            </h2>
            <p className="mt-3 text-[16px] font-semibold text-[#24C68D]">Free software</p>
            <p className="mt-2 text-[18px] leading-[1.6] text-[#171E4B]">
              CROS prepares drafts, tasks and insights. Your team stays in the approval loop.
            </p>
          </div>
          <div className="mt-12">
            <PeekCarousel count={3} activeDot="bg-[#24C68D]" auto>
              <article className="flex w-[min(820px,86%)] shrink-0 snap-start flex-col overflow-hidden rounded-[36px] bg-white px-6 pt-10 pb-0 text-center shadow-[0_20px_50px_rgba(23,30,75,0.06)] sm:px-10">
                <p className="text-[28px] font-semibold tracking-[0.16em] text-[#171E4B]">FREE</p>
                <h3 className="mt-1 text-[40px] leading-none font-bold tracking-[-0.03em] text-[#171E4B] sm:text-[48px]">
                  CRM System
                </h3>
                <p className="mx-auto mt-4 max-w-[520px] text-[16px] leading-[1.55] text-[#62697C]">
                  Owners, tenants, leasing, maintenance and the property record in one FREE system.
                  Trust money stays with a person.
                </p>
                <div className="relative mx-auto mt-8 h-[250px] w-full max-w-[640px] overflow-hidden">
                  <img
                    src="/home/crm-a.jpg?v=2"
                    alt=""
                    className="absolute top-8 left-0 w-[58%] rounded-2xl shadow-[0_16px_40px_rgba(23,30,75,0.12)]"
                  />
                  <img
                    src="/home/crm-b.jpg?v=2"
                    alt=""
                    className="absolute top-0 right-0 w-[56%] rounded-2xl shadow-[0_18px_44px_rgba(23,30,75,0.16)]"
                  />
                </div>
              </article>
              <article className="flex w-[min(640px,78%)] shrink-0 snap-start flex-col rounded-[36px] bg-[#194778] px-6 pt-10 pb-8 text-center text-white sm:px-10">
                <p className="text-[28px] font-semibold tracking-[0.16em]">FREE</p>
                <h3 className="mt-1 text-[40px] leading-none font-bold tracking-[-0.03em] sm:text-[48px]">
                  Inspection
                </h3>
                <p className="mx-auto mt-4 max-w-[460px] text-[16px] leading-[1.55] text-white/85">
                  Your team can complete visits in the app and keep the photos and report on the
                  property. Booking a CROSSUB inspector is a separate paid visit.
                </p>
                <img
                  src="/home/inspection-panel.jpg"
                  alt=""
                  className="mx-auto mt-8 w-full max-w-[420px] rounded-[24px]"
                />
              </article>
              <article className="w-[min(720px,82%)] shrink-0 snap-start rounded-[36px] bg-white px-6 pt-10 pb-8 text-center shadow-[0_20px_50px_rgba(23,30,75,0.06)] sm:px-10">
                <p className="text-[28px] font-semibold tracking-[0.16em] text-[#171E4B]">FREE</p>
                <h3 className="mt-1 text-[40px] leading-none font-bold tracking-[-0.03em] text-[#171E4B] sm:text-[48px]">
                  AI
                </h3>
                <p className="mx-auto mt-4 max-w-[480px] text-[16px] leading-[1.55] text-[#62697C]">
                  CROS prepares drafts, tasks and insights. Your team stays in the approval loop.
                </p>
                <img
                  src="/home/events.jpg?v=2"
                  alt=""
                  className="mx-auto mt-8 w-full rounded-2xl shadow-[0_16px_40px_rgba(23,30,75,0.1)]"
                />
              </article>
            </PeekCarousel>
          </div>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-28 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-[1100px] text-center">
          <h2 className="text-[40px] leading-[1.05] font-bold tracking-[-0.03em] text-[#171E4B] sm:text-[52px]">
            One Platform. Three Ways to Manage.
          </h2>
          <p className="mt-4 text-[16px] font-semibold text-[#24C68D]">
            Manage your way with optional support.
          </p>
          <p className="mt-2 text-[18px] text-[#171E4B]">Manage it yourself, or let us handle the work.</p>
          <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-3">
            {MANAGE.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className={`flex flex-col items-center rounded-[32px] px-6 py-8 ${
                    item.featured ? 'ring-1 ring-[#1A3358]' : ''
                  }`}
                >
                  <span className={`grid size-16 place-items-center rounded-2xl ${item.tile}`}>
                    <Icon className="size-7" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.02em] text-[#171E4B]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[1.6] text-[#62697C]">{item.body}</p>
                  <a
                    href={item.href}
                    className="mt-6 inline-flex items-center gap-1 text-[15px] font-semibold text-[#171E4B] underline decoration-[#171E4B]/40 underline-offset-4 hover:text-[#24C68D]"
                  >
                    Explore More
                    <ArrowRight className="size-4" aria-hidden />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="ai" className="scroll-mt-28 bg-[#F4F6F8] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-[1480px]">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-[40px] leading-[1.08] font-bold tracking-[-0.03em] text-[#171E4B] sm:text-[52px]">
              <span className="inline-flex items-center justify-center gap-3">
                <img src="/home/ai-clear.png" alt="" className="h-16 w-auto sm:h-20" />
                does the preparation.
              </span>
              <span className="mt-1 block">Your team stays in control.</span>
            </h2>
            <p className="mt-4 text-[16px] font-semibold text-[#24C68D]">Built-in intelligence</p>
            <p className="mx-auto mt-3 max-w-[640px] text-[18px] leading-[1.6] text-[#62697C]">
              CROSSUB helps reduce the admin around everyday property management while keeping your
              team in the approval loop.
            </p>
          </div>
          <div className="mt-12">
            <AiControl />
          </div>
        </div>
      </section>

      <section id="why" className="scroll-mt-28 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-[1480px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[40px] leading-[1.05] font-bold tracking-[-0.03em] text-[#171E4B] sm:text-[56px]">
              Why Crossub?
            </h2>
            <p className="mt-3 text-[16px] font-semibold text-[#24C68D]">Software and on-site support</p>
            <p className="mt-3 text-[18px] leading-[1.6] text-[#62697C]">
              Use our inspection tools yourself, or book our team to attend. Keep photos, reports and
              follow-up in one place.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-[1080px] items-stretch gap-5 sm:grid-cols-3">
            {WHY.map((card) => (
              <article
                key={card.image}
                className="relative h-[420px] overflow-hidden rounded-[28px]"
              >
                <img src={card.image} alt="" className="absolute inset-0 size-full object-cover" />
                <div className={`absolute inset-0 ${card.wash}`} />
                <div className="absolute inset-x-0 bottom-0 p-6 text-center text-white">
                  <p className="text-[72px] leading-none font-bold tracking-[-0.04em]">{card.stat}</p>
                  <p className="mx-auto mt-2 max-w-[240px] text-[20px] leading-[1.25] font-semibold">
                    {card.label}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="scroll-mt-28 bg-[#F4F6F8] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-[1100px] text-center">
          <h2 className="text-[40px] leading-[1.05] font-bold tracking-[-0.03em] text-[#171E4B] sm:text-[52px]">
            Everything your property management needs.
            <span className="block">In one place.</span>
          </h2>
          <p className="mt-4 text-[16px] font-semibold text-[#24C68D]">
            One connected platform & Software and on-site support
          </p>
          <p className="mx-auto mt-3 max-w-[720px] text-[18px] leading-[1.6] text-[#62697C]">
            CROSSUB keeps the day-to-day work connected, so your team can move faster without
            juggling multiple tools.
          </p>
          <div className="mt-14 grid items-center gap-10 text-left lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative mx-auto w-full max-w-[520px]">
              <img src="/home/tablet.png?v=2" alt="" className="w-full" />
              <span className="absolute top-[18%] left-[6%] grid size-16 place-items-center rounded-full bg-[#E7FBF4] text-[#24C68D] shadow-md">
                <Home className="size-7" aria-hidden />
              </span>
              <span className="absolute top-[8%] right-[8%] grid size-16 place-items-center rounded-full bg-[#194778] text-white shadow-md">
                <Settings className="size-7" aria-hidden />
              </span>
              <span className="absolute bottom-[18%] left-[4%] grid size-16 place-items-center rounded-full bg-[#E7FBF4] text-[#24C68D] shadow-md">
                <Check className="size-7" aria-hidden />
              </span>
              <span className="absolute right-[6%] bottom-[8%] grid size-16 place-items-center rounded-full bg-[#E7FBF4] text-[#24C68D] shadow-md">
                <PenLine className="size-7" aria-hidden />
              </span>
            </div>
            <div>
              <h3 className="text-[36px] font-bold tracking-[-0.03em] text-[#171E4B]">Maintenance</h3>
              <p className="mt-3 max-w-[360px] text-[20px] leading-[1.45] font-medium text-[#194778]">
                Requests, quotes, approvals and contractor work in one flow.
              </p>
            </div>
          </div>
          <a
            href={siteLinks.software}
            className="mt-12 inline-flex h-11 items-center rounded-full border border-[#171E4B]/25 px-6 text-[15px] font-semibold text-[#171E4B] hover:border-[#24C68D] hover:text-[#24C68D]"
          >
            Explore more
          </a>
        </div>
      </section>

      <section className="px-6 pt-16 pb-28 text-center md:px-10 md:pt-24 md:pb-36">
        <img src="/brand/cros.png" alt="" className="mx-auto w-32" />
        <h2 className="mt-2 text-[44px] leading-[1.05] font-bold tracking-[-0.03em] text-[#24C68D] sm:text-[64px]">
          Start FREE today.
          <span className="block">Grow with us, your way.</span>
        </h2>
        <p className="mt-4 text-[18px] text-[#62697C]">
          Free software, with expert support when you need it.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <PrimaryLink href={siteLinks.startFree}>Start for free</PrimaryLink>
          <SecondaryLink href={siteLinks.bookDemo}>Book a demo</SecondaryLink>
        </div>
      </section>
    </main>
  );
}
