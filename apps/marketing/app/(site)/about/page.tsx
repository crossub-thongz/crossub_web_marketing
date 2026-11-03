import type { Metadata } from 'next';
import { headers } from 'next/headers';

import { AboutEcosystem } from '@/components/site/about-ecosystem';
import { PrimaryLink } from '@/components/site/buttons';
import { offersServices, regionFromHeader, registerHref, withRegion } from '@/lib/regions';
import { siteLinks } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'About Us | CROSSUB',
  description:
    'CROSSUB began in Australia in 2019 to support real estate agencies. Proudly Australian. Built to go further.',
};

const PRINCIPLES = [
  {
    title: 'GLOBAL VISION',
    kicker: 'Australian roots. Global ambition',
    icon: '/about/icon-vision.png',
    art: '/about/principle-globe.png',
    body: [
      'We are a proudly Australian company. Australia is where our story began, where agencies first put their trust in us, and where we learned the lessons that continue to shape CROSSUB.',
      'Now, we are building from Australia for the world.',
    ],
  },
  {
    title: 'BRAND OUTRO',
    kicker: 'We are CROSSUB',
    icon: '/about/icon-outro.png',
    art: '/about/principle-arch.png',
    body: [
      'As we grow, we carry that experience with us: listen carefully, earn trust, and build around the people doing the work.',
      'We started by helping agencies deliver.',
      'We are building what comes next.',
    ],
  },
  {
    title: 'PURPOSE',
    kicker: 'Our Goal',
    icon: '/about/icon-purpose.png',
    art: '/about/principle-arch-bars.png',
    body: [
      'Give agencies the support to achieve more.',
      'Whether an agency needs better tools, extra hands, or a team to support its property management business.',
    ],
  },
] as const;

const MILESTONES = [
  { n: '01', label: 'Showing Up', above: false },
  { n: '02', label: 'Listening Closely', above: true },
  { n: '03', label: 'Challenging Assumptions', above: false },
  { n: '04', label: 'The Breakthrough', above: true },
] as const;

const EVOLUTION = [
  {
    n: '01',
    title: 'Showing up',
    icon: '/about/icon-handshake.png',
    body: 'We started with Full-Service Property Management, helping agencies deliver for their clients when they needed more support.',
  },
  {
    n: '02',
    title: 'Listening Closely',
    icon: '/about/icon-listen.png',
    body: 'As agencies placed their trust in us, we listened to their questions, frustrations, and the realities of their working day.',
  },
  {
    n: '03',
    title: 'Challenging Assumptions',
    icon: '/about/icon-chart.png',
    body: 'We kept refining our services, challenging our assumptions, and improving how we worked to understand what agencies truly needed.',
  },
  {
    n: '04',
    title: 'The Breakthrough',
    icon: '/about/icon-breakthrough.png',
    body: 'And one thing became clear: supporting an agency meant improving both the work on the ground and the technology behind it.',
  },
] as const;

function EvolutionCard({ step }: { step: (typeof EVOLUTION)[number] }) {
  return (
    <div className="flex items-center gap-4">
      <img src={step.icon} alt="" className="size-9 shrink-0 object-contain" />
      <div className="site-card rounded-[28px] bg-[#25C68D] px-6 py-4 text-white shadow-[0_12px_28px_rgba(37,198,141,0.28)]">
        <p className="text-[18px] font-bold">
          {step.n} {step.title}
        </p>
        <p className="mt-1 text-[15px] leading-snug text-white/95">{step.body}</p>
      </div>
    </div>
  );
}

export default async function AboutPage() {
  const region = regionFromHeader(await headers());
  const servicesOffered = offersServices(region);
  const startFree = registerHref(region);
  const bookDemo = withRegion(region, siteLinks.bookDemo);
  const software = withRegion(region, siteLinks.software);

  const cards = [
    { title: 'Free Inspection App', href: withRegion(region, '/#crossub-app'), icon: '/about/icon-inspect.png' },
    { title: 'CROS AI', href: software, icon: '/about/icon-cros.png' },
    {
      title: 'Free Real Market Data Access, alongside Inspection Services',
      href: withRegion(region, '/software#ai'),
      icon: '/about/icon-data.png',
    },
    ...(servicesOffered
      ? [
          {
            title: 'Approved Maintenance Providers',
            href: withRegion(region, siteLinks.propertyServices),
            icon: '/about/icon-wrench.png',
          },
          {
            title: 'Full-Service Property Management',
            href: withRegion(region, siteLinks.fullService),
            icon: '/about/icon-home.png',
          },
        ]
      : []),
  ];

  return (
    <main className="-my-[8vh] bg-white text-[#194878]">
      <section className="relative min-h-[640px] overflow-hidden">
        <img
          src="/about/hero.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="relative mx-auto flex min-h-[640px] w-full max-w-[1480px] items-center px-6 py-20 md:px-10">
          <div className="max-w-[640px]">
            <h1 className="text-[46px] leading-[1.05] font-bold tracking-[-0.035em] text-[#194878] sm:text-[64px]">
              Proudly Australian.
              <br />
              Built to Go Further.
            </h1>
            <p className="mt-6 max-w-[360px] text-[20px] leading-snug text-[#212121] sm:text-[22px]">
              Our story began with the people doing the work.
            </p>
            <PrimaryLink href={startFree} className="mt-8">
              Start for free
            </PrimaryLink>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F6F8] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid w-full max-w-[1180px] items-center gap-8 rounded-[40px] bg-white p-6 shadow-[0_16px_50px_rgba(23,30,75,0.04)] sm:p-10 lg:grid-cols-[1fr_0.92fr] lg:gap-12 lg:p-14">
          <div className="text-center">
            <h2 className="text-[42px] leading-none font-bold tracking-[-0.03em] sm:text-[56px]">OUR STORY</h2>
            <p className="mt-3 text-[16px] font-semibold text-[#25C68D]">The Origin</p>
            <div className="mt-8 space-y-5 text-[17px] leading-[1.65] text-[#6B6B6B]">
              <p>
                In 2019, CROSSUB began building in Australia with a clear purpose: to support real estate agencies
                that needed a complete property management service but did not have the team or capacity to deliver it
                themselves.
              </p>
              <p>
                Behind every agency were people carrying the responsibility — looking after clients, managing
                properties, solving problems, and keeping their businesses moving.
              </p>
              <p>We saw the gap between what agencies wanted to offer and the resources they had available.</p>
            </div>
            <p className="mt-8 text-[22px] font-semibold text-[#25C68D]">CROSSUB was our answer.</p>
          </div>
          <img
            src="/about/team.png"
            alt="The CROSSUB team"
            className="h-full max-h-[640px] w-full rounded-[28px] object-cover object-top"
          />
        </div>

        <div className="mx-auto mt-8 grid w-full max-w-[1180px] gap-5 md:grid-cols-3">
          {PRINCIPLES.map((item) => (
              <article
                key={item.title}
                className="site-card relative rounded-[28px] bg-white px-7 py-8 text-center shadow-[0_10px_30px_rgba(23,30,75,0.04)]"
              >
                <img
                  src={item.art}
                  alt=""
                  className="pointer-events-none absolute inset-x-0 bottom-0 w-full select-none"
                />
                <div className="relative">
                  <img src={item.icon} alt="" className="mx-auto size-9 object-contain" />
                  <h3 className="mt-4 text-[22px] font-bold tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-1 text-[13px] font-semibold text-[#25C68D]">{item.kicker}</p>
                  <div className="mt-4 space-y-3 text-[14px] leading-[1.65] text-[#6B6B6B]">
                    {item.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-[1100px] text-center">
          <h2 className="text-[40px] font-bold tracking-[-0.03em] sm:text-[48px]">Earning Trust & Evolution</h2>
          <p className="mt-3 text-[16px] font-semibold text-[#25C68D]">We Earned Trust by Showing Up</p>
        </div>

        <ol className="mx-auto mt-10 max-w-[920px] space-y-4 md:hidden">
          {MILESTONES.map((step) => (
            <li key={step.n} className="flex items-center gap-3 text-[15px] text-[#6B6B6B]">
              <span className="grid size-8 place-items-center rounded-full bg-[#194878] text-[12px] font-bold text-white">
                {step.n}
              </span>
              {step.label}
            </li>
          ))}
        </ol>

        <div className="relative mx-auto mt-16 hidden max-w-[920px] md:block">
          <div className="absolute top-1/2 right-8 left-8 h-[3px] -translate-y-1/2 rounded-full bg-[#25C68D]" />
          <ol className="relative grid grid-cols-4">
            {MILESTONES.map((step) => (
              <li key={step.n} className="flex flex-col items-center text-center">
                <p className={`mb-5 h-10 max-w-[140px] text-[15px] text-[#6B6B6B] ${step.above ? '' : 'invisible'}`}>
                  {step.label}
                </p>
                <span className="relative z-10 grid size-9 place-items-center rounded-full bg-[#194878] text-[12px] font-bold text-white">
                  {step.n}
                </span>
                <p className={`mt-5 h-10 max-w-[140px] text-[15px] text-[#6B6B6B] ${step.above ? 'invisible' : ''}`}>
                  {step.label}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-16 w-full max-w-[1040px] lg:hidden">
          <div className="mx-auto grid size-[240px] place-items-center rounded-full border-[14px] border-[#25C68D] text-center">
            <p className="text-[34px] leading-[0.95] font-bold tracking-[-0.04em]">
              THE
              <br />
              EVOLUTION
            </p>
          </div>
          <ol className="mt-8 space-y-4">
            {EVOLUTION.map((step) => (
              <EvolutionCard key={step.n} step={step} />
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-20 hidden w-full max-w-[1040px] lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:grid-rows-[auto_auto_auto_auto] lg:gap-x-6 lg:gap-y-5">
          <div className="col-span-2 col-start-1 row-start-1 ml-[120px] max-w-[680px]">
            <EvolutionCard step={EVOLUTION[0]} />
          </div>
          <div className="col-start-1 row-start-2 row-span-2 self-center">
            <div className="grid size-[280px] place-items-center rounded-full border-[16px] border-[#25C68D] text-center">
              <p className="text-[40px] leading-[0.95] font-bold tracking-[-0.04em]">
                THE
                <br />
                EVOLUTION
              </p>
            </div>
          </div>
          <div className="col-start-2 row-start-2 self-end">
            <EvolutionCard step={EVOLUTION[1]} />
          </div>
          <div className="col-start-2 row-start-3 self-start">
            <EvolutionCard step={EVOLUTION[2]} />
          </div>
          <div className="col-span-2 col-start-1 row-start-4 mt-2 ml-[120px] max-w-[680px]">
            <EvolutionCard step={EVOLUTION[3]} />
          </div>
        </div>
      </section>

      <section className="bg-[#F5F6F8] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="text-[42px] font-bold tracking-[-0.03em] sm:text-[48px]">Ecosystem</h2>
            <p className="mt-3 text-[16px] font-semibold text-[#25C68D]">One Platform. More ways to move forward.</p>
            <p className="mt-4 text-[16px] leading-[1.6] text-[#171E4B]">
              Whether an agency needs better tools, extra hands, or a team to support its property management
              business, our purpose remains the same: Give agencies the support to achieve more.
            </p>
          </div>
          <AboutEcosystem cards={cards} />
        </div>
      </section>

      <section className="bg-[#040816] px-6 py-16 text-white md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="text-center">
            <h2 className="text-[42px] font-bold tracking-[-0.03em] text-white sm:text-[48px]">Meet CROS AI</h2>
            <p className="mt-3 text-[16px] font-semibold text-[#25C68D]">The Innovation</p>
          </div>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-8">
            <div>
              <h3 className="text-[36px] leading-[1.1] font-bold tracking-[-0.03em] sm:text-[44px]">
                What if property managers could spend less time operating software?
              </h3>
              <p className="mt-5 text-[16px] text-white/90">
                Just ask CROS AI what to do and have it help get the work done
              </p>
              <div className="relative mt-8">
                <div className="cros-neon">
                  <span className="cros-neon-ring" aria-hidden />
                  <div className="cros-neon-card p-6">
                    <p className="text-[16px] leading-[1.65] text-white">
                      Built into CROSSUB, CROS AI is your software concierge.
                    </p>
                    <p className="mt-3 text-[16px] leading-[1.65] text-white/90">
                      It turns everyday instructions into action, reducing manual steps and helping your team move work
                      forward.
                    </p>
                    <p className="mt-3 text-[16px] leading-[1.65] text-white/90">
                      Brings a new possibility to property management: technology that takes a more active role in
                      supporting the people who use it.
                    </p>
                  </div>
                </div>
                <img src="/about/icon-cros.png" alt="" className="absolute -right-1 -bottom-6 z-10 w-16" />
              </div>
            </div>
            <div className="relative">
              <img src="/about/cros-panel.png" alt="CROS AI proactive tasks" className="w-full" />
              <a
                href={software}
                className="mt-2 inline-flex text-[15px] font-medium text-white/80 lg:absolute lg:right-6 lg:bottom-2"
              >
                Explore More <span aria-hidden>›</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pt-16 text-center md:pt-24">
        <h2 className="text-[40px] leading-[1.1] font-bold tracking-[-0.03em] text-[#26C58C] sm:text-[52px]">
          Start FREE today.
          <br />
          Grow with us, your way
        </h2>
        <p className="mt-4 text-[18px] text-[#194878]">Free software, with expert support when you need it.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryLink href={startFree}>Start for free</PrimaryLink>
          <a
            href={bookDemo}
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#194878] bg-white px-7 text-[15px] font-semibold text-[#194878]"
          >
            Book a demo
          </a>
        </div>
        <svg viewBox="0 0 1440 120" className="mt-12 block w-full text-[#194778]" aria-hidden>
          <path fill="currentColor" d="M0 64c180 48 360-48 540-32s360 80 540 48 240-64 360-40v80H0Z" />
        </svg>
      </section>
    </main>
  );
}
