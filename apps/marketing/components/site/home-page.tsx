import { ArrowRight, ClipboardCheck, CreditCard, FileText, MessageCircle, Users, Wrench } from 'lucide-react';

import { PrimaryLink, SecondaryLink } from '@/components/site/buttons';
import { AiControl, PeekCarousel, PlatformShowcase, WhyShowcase } from '@/components/site/home-carousels';
import { offersServices, registerHref, withRegion, type RegionCode } from '@/lib/regions';
import { siteLinks } from '@/lib/site-links';

const MANAGE = [
  {
    title: 'Inspection Services',
    body: 'Need someone on the ground? Access inspection services through CROSSUB, including ingoing, outgoing, routine, and open inspections. Get extra support when your team needs it.',
    href: siteLinks.inspections,
    icon: ClipboardCheck,
    tile: 'bg-[#F3EEFF] text-[#7A6BB5]',
  },
  {
    title: 'CROSSUB-Approved Maintenance Providers',
    body: 'Connect with reliable, platform-approved maintenance providers whenever you need support. From everyday repairs to ongoing maintenance, CROSSUB helps your agency keep work moving.',
    href: siteLinks.propertyServices,
    icon: Wrench,
    tile: 'bg-[#E7FBF4] text-[#24C68D]',
  },
  {
    title: 'Full-Service Property Management',
    body: 'No property management team? You can still offer property management to your clients. CROSSUB provides comprehensive management support, handling the day-to-day work so your agency can build its property management business.',
    href: siteLinks.fullService,
    icon: Users,
    tile: 'bg-[#FFF6DE] text-[#C4A15A]',
  },
] as const;

const TENANT_PORTAL = [
  {
    title: 'Check your rent status',
    body: 'Tenants see what rent is due and their payment history.',
    icon: CreditCard,
  },
  {
    title: 'Report repairs',
    body: 'Maintenance requests go straight to the property, with photos attached.',
    icon: Wrench,
  },
  {
    title: 'Lease and inspections',
    body: 'The lease, documents and inspection reports are in one place.',
    icon: FileText,
  },
  {
    title: 'Message the agency',
    body: 'Conversations with the agency stay on the tenancy record.',
    icon: MessageCircle,
  },
] as const;

export function HomePage({ region = 'AU' }: { region?: RegionCode }) {
  const servicesOffered = offersServices(region);
  const startFree = registerHref(region);
  const bookDemo = withRegion(region, siteLinks.bookDemo);
  const software = withRegion(region, siteLinks.software);
  return (
    <main id="main">
      <section className="-mt-[8vh] overflow-hidden bg-[radial-gradient(circle_at_50%_18%,_#E7FBF4_0%,_#ffffff_46%)] px-6 pt-8 pb-16 md:px-10 md:pt-10 md:pb-20">
        <div className="@container mx-auto w-full max-w-[1480px] text-center">
          <img src="/brand/cros.png" alt="" className="mx-auto h-16 w-auto" />
          <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#24C68D] px-4 py-1.5 text-[14px] font-semibold text-white">
            <span aria-hidden>✦</span>
            Powered by CROS AI
          </p>
          <h1 className="mt-5 text-[clamp(11px,3.05cqw,58px)] leading-[1.05] font-bold tracking-[-0.045em] whitespace-nowrap text-[#171E4B]">
            Simplify Your Property Management Software
          </h1>
          <p className="mt-2 text-[clamp(32px,5.2cqw,76px)] leading-none text-[#24C68D]">
            <span className="mr-[0.28em] font-medium italic">with</span>
            <span className="font-bold tracking-[-0.04em]">CROS AI</span>
          </p>
          <p className="mt-5 text-[18px] font-semibold text-[#171E4B] sm:text-[20px]">
            Free Software. Free AI. Your Way to Manage.
          </p>
          <p className="mx-auto mt-3 max-w-[760px] text-[17px] leading-[1.6] text-[#62697C] sm:text-[18px]">
            Manage properties, streamline everyday tasks and keep your agency in control with free
            software and expert AI built in support when you need it.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryLink href={startFree}>Start for free</PrimaryLink>
            <SecondaryLink href={bookDemo}>Book a demo</SecondaryLink>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-[#DEFCF0] px-6 pt-10 pb-16 text-center md:px-10 md:pt-12 md:pb-20">
        <h2 className="text-[40px] leading-[1.05] font-bold tracking-[-0.03em] text-[#171E4B] sm:text-[56px]">
          Start Free Scale Your Way
        </h2>
        <p className="mt-3 text-[20px] text-[#62697C]">
          Your software. Your agency. Your choice of support.
        </p>
      </section>

      <section className="relative overflow-hidden bg-[#DEFCF0] px-6 py-16 md:px-10 md:py-24">
        <img
          src="/home/ways/mark.png"
          alt=""
          className="pointer-events-none absolute -bottom-16 -left-[18%] w-[min(720px,55%)] max-w-none select-none"
        />
        <img
          src="/home/ways/mark.png"
          alt=""
          className="pointer-events-none absolute -top-24 -right-[22%] w-[min(640px,48%)] max-w-none -scale-x-100 select-none"
        />
        <div className="relative mx-auto w-full max-w-[1480px]">
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
            <article className="flex w-[min(780px,84%)] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] bg-white px-5 pt-8 text-center sm:px-7">
              <p className="text-[clamp(32px,3vw,48px)] leading-none font-medium tracking-[-0.03em] text-[#194878]">
                FREE
              </p>
              <h3 className="mt-1 text-[clamp(34px,3.3vw,52px)] leading-none font-bold tracking-[-0.03em] text-[#194878]">
                CRM System
              </h3>
              <p className="mx-auto mt-4 max-w-[36ch] text-[14px] leading-[1.45] text-[#62697C] sm:text-[15px]">
                Owners, tenants, leasing, maintenance and the property record in one FREE system.
                Trust money stays with a person.
              </p>
              <img
                src="/home/ways/crm-panels.png"
                alt=""
                className="-mx-5 mt-auto w-[calc(100%+2.5rem)] max-w-none self-center sm:-mx-7 sm:w-[calc(100%+3.5rem)]"
              />
            </article>
            <article className="flex w-[min(780px,84%)] shrink-0 snap-start flex-col">
              <div className="flex flex-1 flex-col rounded-[28px] bg-[#194878] px-5 pt-8 pb-28 text-center text-white sm:px-7">
                <p className="text-[clamp(32px,3vw,48px)] leading-none font-medium tracking-[-0.03em]">
                  FREE
                </p>
                <h3 className="mt-1 text-[clamp(34px,3.3vw,52px)] leading-none font-bold tracking-[-0.03em]">
                  Inspection App
                </h3>
                <p className="mx-auto mt-4 max-w-[42ch] text-[14px] leading-[1.45] sm:text-[15px]">
                  Your team can complete visits in the app and keep the photos and report on the
                  property.
                  {servicesOffered ? ' Booking a CROSSUB inspector is a separate paid visit.' : ''}
                </p>
              </div>
              <img
                src="/home/ways/inspection-arranged.png"
                alt=""
                className="relative z-10 mx-auto -mt-20 w-[min(340px,72%)]"
              />
            </article>
            <article className="flex w-[min(780px,84%)] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] bg-[#071012] px-5 pt-8 pb-6 text-center text-white sm:px-6">
              <p className="text-[clamp(32px,3vw,48px)] leading-none font-semibold tracking-[-0.03em] text-[#24C68D]">
                FREE
              </p>
              <h3 className="mt-1 text-[clamp(34px,3.3vw,52px)] leading-none font-bold tracking-[-0.03em] text-[#24C68D]">
                AI Assistant
              </h3>
              <div className="mx-auto mt-4 max-w-[46ch] space-y-2 text-[13px] leading-[1.45] sm:text-[14px]">
                <p>Meet CROS AI — your property management AI that gets things done.</p>
                <p>
                  Tell CROS AI what you need. It works inside CROSSUB to find information, prepare
                  updates, and carry out tasks — with you in control.
                </p>
                <p>
                  From inspections to maintenance, CROS AI helps turn your instructions into action.
                </p>
                <p>Free real-time market data is included, which is needed for conducting rent reviews.</p>
              </div>
              <div className="relative mt-auto">
                <img src="/home/ways/ai-ask.png" alt="" className="w-full" />
                <p className="absolute top-[76%] left-[2%] whitespace-nowrap text-[clamp(13px,1.45vw,18px)] leading-none font-bold">
                  Stop clicking. Start asking.
                </p>
              </div>
            </article>
            </PeekCarousel>
          </div>

          <div
            id="crossub-app"
            className="mx-auto mt-14 grid max-w-[1100px] scroll-mt-28 items-center gap-8 overflow-hidden rounded-[36px] bg-[#194778] px-6 py-10 text-white sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14"
          >
            <div className="text-center lg:text-left">
              <p className="text-[15px] font-semibold text-[#7CFFE8]">
                Available on iPhone and Android
              </p>
              <h2 className="mt-3 text-[36px] leading-[1.08] font-bold tracking-[-0.03em] sm:text-[44px]">
                Get the CROSSUB App
              </h2>
              <p className="mx-auto mt-4 max-w-[480px] text-[17px] leading-[1.6] text-white/85 lg:mx-0">
                Take the free inspection app on site. Capture photos and notes, complete the visit,
                and the report lands straight in your CROSSUB CRM.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <a
                  href={siteLinks.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download CROS INSPECT on the App Store"
                  className="inline-flex transition hover:-translate-y-0.5"
                >
                  <img src="/stores/app-store-badge.svg" alt="" className="h-12 w-auto" />
                </a>
                <a
                  href={siteLinks.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get CROS INSPECT on Google Play"
                  className="inline-flex transition hover:-translate-y-0.5"
                >
                  <img src="/stores/google-play-badge.png" alt="" className="h-12 w-auto" />
                </a>
              </div>
            </div>
            <img
              src="/home/inspection-panel.jpg"
              alt="CROS INSPECT inspection list"
              className="mx-auto w-full max-w-[380px] rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.3)]"
            />
          </div>
        </div>
      </section>

      <section id="tenant-portal" className="scroll-mt-28 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-[1100px] text-center">
          <p className="text-[16px] font-semibold text-[#24C68D]">FREE for your tenants</p>
          <h2 className="mt-3 text-[40px] leading-[1.05] font-bold tracking-[-0.03em] text-[#171E4B] sm:text-[52px]">
            The Tenant Portal
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-[18px] leading-[1.6] text-[#62697C]">
            Your tenants sign in from their phone browser, with nothing to download. It is
            connected to the same property records your team uses, so the office gets fewer calls
            and emails, and every request is on record.
          </p>
          <div className="mt-12 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
            {TENANT_PORTAL.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[24px] bg-white p-6 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-[#171E4B]/5"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-[#E7FBF4] text-[#24C68D]">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.02em] text-[#171E4B]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-[1.55] text-[#62697C]">{item.body}</p>
                </article>
              );
            })}
          </div>
          <a
            href={siteLinks.tenantPortal}
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-1 text-[15px] font-semibold text-[#171E4B] underline decoration-[#171E4B]/40 underline-offset-4 hover:text-[#24C68D]"
          >
            Tenant log in
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
      </section>

      {servicesOffered ? <section id="solutions" className="scroll-mt-28 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-[1100px] text-center">
          <h2 className="text-[40px] leading-[1.05] font-bold tracking-[-0.03em] text-[#171E4B] sm:text-[52px]">
            More than software. Real support for your agency.
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[18px] leading-[1.6] text-[#62697C]">
            CROSSUB brings together property management software, AI, and professional services —
            giving your agency the support to take on more.
          </p>
          <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-3">
            {MANAGE.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex flex-col items-center rounded-[32px] border border-[#171E4B]/10 bg-white px-6 py-8 shadow-[0_12px_32px_-22px_rgba(23,30,75,0.28)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_28px_48px_-18px_rgba(23,30,75,0.28)]"
                >
                  <span className={`grid size-16 place-items-center rounded-2xl ${item.tile}`}>
                    <Icon className="size-7" aria-hidden />
                  </span>
                  <h3 className="mt-5 flex items-center justify-center text-[22px] leading-[1.3] font-semibold tracking-[-0.02em] text-[#171E4B] lg:min-h-[2.6em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[1.6] text-[#62697C]">{item.body}</p>
                  <a
                    href={withRegion(region, item.href)}
                    className="mt-auto inline-flex items-center gap-1 pt-6 text-[15px] font-semibold text-[#171E4B] underline decoration-[#171E4B]/40 underline-offset-4 hover:text-[#24C68D]"
                  >
                    Explore More
                    <ArrowRight className="size-4" aria-hidden />
                  </a>
                </article>
              );
            })}
          </div>
          <p className="mx-auto mt-12 max-w-[720px] text-[18px] leading-[1.6] font-medium text-[#171E4B]">
            With CROSSUB, you have the software, the AI, and the service support to grow.
          </p>
        </div>
      </section> : null}

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
          <WhyShowcase />
        </div>
      </section>

      <section id="support" className="scroll-mt-28 bg-[#F4F6F8] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-[1100px] text-center">
          <h2 className="text-[40px] leading-[1.05] font-bold tracking-[-0.03em] text-[#171E4B] sm:text-[52px]">
            Everything your property management needs.
            <span className="block">In one place.</span>
          </h2>
          {servicesOffered ? (
            <>
              <p className="mt-4 text-[16px] font-semibold text-[#24C68D]">
                Connected software. Experienced people. Trusted maintenance support.
              </p>
              <div className="mx-auto mt-4 max-w-[760px] space-y-4 text-[18px] leading-[1.6] text-[#62697C]">
                <p>
                  CROSSUB brings together technology and more than six years of hands-on Full-Service
                  Property Management experience.
                </p>
                <p>
                  Along the way, we’ve built an extensive network of reliable, CROSSUB-approved
                  maintenance providers. When your agency needs extra support or the right trade for a
                  job, you can tap into our established network instead of starting your search from
                  scratch.
                </p>
                <p>
                  Get work moving sooner, connect with dependable providers, and find cost-effective
                  maintenance solutions — all through CROSSUB.
                </p>
              </div>
              <PlatformShowcase
                caption={{
                  title: 'Our experience. Your extended team.',
                  body: 'Access a maintenance network built through years of managing real properties and solving everyday problems.',
                }}
              />
              <a
                href={withRegion(region, '/#solutions')}
                className="mt-12 inline-flex h-11 items-center rounded-full border border-[#171E4B]/25 px-6 text-[15px] font-semibold text-[#171E4B] hover:border-[#24C68D] hover:text-[#24C68D]"
              >
                Explore our services
              </a>
            </>
          ) : (
            <>
              <p className="mt-4 text-[16px] font-semibold text-[#24C68D]">One connected platform</p>
              <p className="mx-auto mt-3 max-w-[720px] text-[18px] leading-[1.6] text-[#62697C]">
                CROSSUB keeps the day-to-day work connected, so your team can move faster without
                juggling multiple tools.
              </p>
              <PlatformShowcase />
              <a
                href={software}
                className="mt-12 inline-flex h-11 items-center rounded-full border border-[#171E4B]/25 px-6 text-[15px] font-semibold text-[#171E4B] hover:border-[#24C68D] hover:text-[#24C68D]"
              >
                Explore more
              </a>
            </>
          )}
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
          <PrimaryLink href={startFree}>Start for free</PrimaryLink>
          <SecondaryLink href={bookDemo}>Book a demo</SecondaryLink>
        </div>
      </section>
    </main>
  );
}
