import type { Metadata } from 'next';
import { headers } from 'next/headers';

import { InspectionPrices } from '@/components/site/inspection-prices';
import { regionFromHeader, registerHref } from '@/lib/regions';
import { company } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'Pricing | CROSSUB',
  description: 'Free property management software with optional inspection and full service support.',
};

const primaryButton =
  'inline-flex items-center justify-center rounded-[10px] border border-[#0eaa7c] bg-[#0eaa7c] px-5 py-[13px] text-[13px] font-bold text-white transition-colors hover:bg-[#078e68]';

const ghostButton =
  'inline-flex items-center justify-center rounded-[10px] border border-[#dfebe6] bg-white px-5 py-[13px] text-[13px] font-bold transition-colors hover:bg-[#ecfaf4]';

const FREE_BENEFITS = [
  { icon: '✳', title: 'Cros AI assistant', body: 'Intelligent help across everyday tasks' },
  { icon: '▦', title: 'Property management CRM', body: 'Properties, tenancies and people in one place' },
  { icon: '▤', title: 'Inspection app', body: 'Record inspections and prepare reports' },
  { icon: '⌁', title: 'Leasing & maintenance', body: 'Manage workflows with your own team' },
] as const;

export default async function ServicePricingPage() {
  const region = regionFromHeader(await headers());
  const startFree = registerHref(region);

  return (
    <main className="bg-white text-[15px] text-[#17332e]">
      <section className="bg-[radial-gradient(ellipse_at_50%_4%,#e7faf1,transparent_55%)] px-6 py-16 text-center md:px-10 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <span className="text-[11px] font-extrabold tracking-[0.15em] text-[#008e67] uppercase">
            Simple, transparent pricing
          </span>
          <h1 className="mx-auto mt-[18px] max-w-[900px] text-[clamp(42px,5vw,65px)] leading-[1.11] font-bold tracking-[-0.045em]">
            Start free.
            <br />
            <em className="text-[#0eaa7c] not-italic">Only pay when you need us.</em>
          </h1>
          <p className="mx-auto mt-4 max-w-[630px] text-[17px] leading-[1.7] text-[#63746e]">
            Powerful property management software and Cros AI, free to use. Add hands-on support only when your
            agency chooses to.
          </p>
        </div>
      </section>

      <section id="free" className="scroll-mt-28 px-6 pb-16 md:px-[30px] md:pb-[100px]">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 rounded-[25px] border border-[#b7e5d1] bg-[linear-gradient(125deg,#f0fcf6_0%,#fff_63%)] p-7 shadow-[0_24px_60px_rgba(15,90,60,0.05)] sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[55px] lg:p-[45px_50px]">
          <div>
            <span className="inline-flex items-center gap-[7px] rounded-full bg-[#dcf7e9] px-3 py-[7px] text-[11px] font-extrabold tracking-[0.06em] text-[#05835d]">
              ✓ FREE FOREVER
            </span>
            <h2 className="mt-[21px] mb-[15px] text-[39px] leading-[1.1] font-bold tracking-[-0.045em] sm:text-[49px]">
              <strong className="font-bold text-[#0eaa7c]">$0</strong> to manage
              <br />
              your properties.
            </h2>
            <p className="leading-[1.7] text-[#63746e]">
              Everything you need to self-manage your rent roll, with Cros AI by your side. No paid service is
              required to use the platform.
            </p>
            <a className={`${primaryButton} mt-6`} href={startFree} rel="noopener noreferrer">
              Get started — free ↗
            </a>
            <p className="mt-[13px] text-[12px] text-[#7d8984]">Optional services are always your choice.</p>
          </div>
          <div className="grid gap-[14px] sm:grid-cols-2">
            {FREE_BENEFITS.map((item) => (
              <div key={item.title} className="min-h-[115px] rounded-[14px] border border-[#e1eee8] bg-white p-[19px]">
                <span className="text-[20px] text-[#0eaa7c]">{item.icon}</span>
                <strong className="mt-[9px] mb-1 block text-[14px]">{item.title}</strong>
                <small className="leading-[1.5] text-[#63746e]">{item.body}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-28 border-y border-[#edf1ef] bg-[#f9fbfa] px-6 py-16 md:px-[30px] md:py-[85px]">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-[42px] text-center">
            <span className="text-[11px] font-extrabold tracking-[0.15em] text-[#008e67] uppercase">
              Only when you need extra hands
            </span>
            <h2 className="mt-3 text-[clamp(32px,4vw,43px)] font-bold tracking-[-0.045em]">2 optional paid services.</h2>
            <p className="mx-auto max-w-[620px] leading-[1.7] text-[#63746e]">
              Keep managing everything yourself, book an inspection when needed, or let Crossub handle day-to-day
              operations. Your software stays free either way.
            </p>
          </div>
          <div className="grid gap-[22px] lg:grid-cols-2">
            <article className="flex min-h-0 flex-col rounded-[22px] border border-[#98d9be] bg-white p-6 shadow-[0_20px_50px_rgba(10,90,60,0.07)] sm:p-[34px] lg:min-h-[465px]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-extrabold tracking-[0.1em] text-[#08845e] uppercase">
                    01 · Pay per inspection
                  </span>
                  <h3 className="mt-[5px] mb-2.5 text-[25px] font-bold tracking-[-0.045em]">Inspection Only</h3>
                </div>
                <span className="inline-flex shrink-0 items-center rounded-full bg-[#dcf7e9] px-3 py-[7px] text-[11px] font-extrabold tracking-[0.06em] text-[#05835d]">
                  FLEXIBLE
                </span>
              </div>
              <p className="leading-[1.65] text-[#63746e]">
                Our inspectors visit the property and prepare the report. You keep control of the rest of the
                management.
              </p>
              <div className="mt-4 mb-[5px] text-[32px] font-extrabold tracking-[-0.06em]">
                From $75 <small className="text-[13px] font-medium tracking-normal text-[#63746e]">/ inspection · ex GST</small>
              </div>
              <ul className="mt-[22px] mb-auto space-y-0 text-[14px]">
                {[
                  'Ingoing / Entry inspections',
                  'Outgoing / Final inspections',
                  'Routine inspections',
                  'Open home inspections',
                  'No Full Service percentage',
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 py-2">
                    <span className="font-extrabold text-[#0eaa7c]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a className={`${primaryButton} mt-[25px]`} href="#inspection-prices">
                View inspection prices ↓
              </a>
            </article>

            <article className="flex min-h-0 flex-col rounded-[22px] border border-[#dfebe6] bg-white p-6 sm:p-[34px] lg:min-h-[465px]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-extrabold tracking-[0.1em] text-[#08845e] uppercase">
                    02 · Ongoing support
                  </span>
                  <h3 className="mt-[5px] mb-2.5 text-[25px] font-bold tracking-[-0.045em]">Full Service</h3>
                </div>
                <span className="inline-flex shrink-0 items-center rounded-full bg-[#dcf7e9] px-3 py-[7px] text-[11px] font-extrabold tracking-[0.06em] text-[#05835d]">
                  OPTIONAL
                </span>
              </div>
              <p className="leading-[1.65] text-[#63746e]">
                Crossub works with your agency on tenancy communication, leasing, maintenance and inspections.
              </p>
              <div className="mt-4 mb-[5px] text-[32px] font-extrabold tracking-[-0.06em]">
                30%{' '}
                <small className="text-[13px] font-medium tracking-normal text-[#63746e]">
                  of your property management fee · + GST
                </small>
              </div>
              <div className="mt-[17px] rounded-xl border border-[#d5eee0] bg-[#f0faf5] px-[17px] py-4 text-[13px] leading-[1.65]">
                <b className="text-[#065f4b]">Included for each property, every year:</b>
                <br />
                1 free Entry + 1 free Final + 3 free Routine inspections
              </div>
              <ul className="mt-[22px] mb-auto text-[14px]">
                {[
                  'Day-to-day management support',
                  'Leasing and maintenance coordination',
                  'Inspections within the annual allowance',
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 py-2">
                    <span className="font-extrabold text-[#0eaa7c]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a className={`${ghostButton} mt-[25px]`} href="#full-inclusions">
                See Full Service inclusions ↓
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="inspection-prices" className="scroll-mt-28 px-6 py-16 md:px-[30px] md:py-[90px]">
        <div className="mx-auto grid max-w-[1180px] items-start gap-10 lg:grid-cols-[320px_1fr] lg:gap-[45px]">
          <div>
            <span className="text-[11px] font-extrabold tracking-[0.15em] text-[#008e67] uppercase">
              Inspection Only · Price list
            </span>
            <h2 className="mt-2.5 text-[35px] font-bold tracking-[-0.045em]">
              Clear pricing,
              <br />
              by property type.
            </h2>
            <p className="leading-[1.7] text-[#63746e]">
              One-off inspections, priced by size. Choose an inspection type to view the applicable rates.
            </p>
            <p className="mt-[17px] text-[12px] leading-[1.6] text-[#788780]">
              All amounts in AUD, excluding GST. Entry and Final share the same price schedule.
            </p>
          </div>
          <InspectionPrices />
        </div>
      </section>

      <section id="full-inclusions" className="scroll-mt-28 bg-[#f6faf8] px-6 py-16 md:px-[30px] md:py-[72px] md:pb-[90px]">
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center">
            <span className="text-[11px] font-extrabold tracking-[0.15em] text-[#008e67] uppercase">
              Full Service · Inspection allowance
            </span>
            <h2 className="mt-3 text-[clamp(32px,4vw,43px)] font-bold tracking-[-0.045em]">
              5 included inspections per property, per year.
            </h2>
            <p className="mx-auto max-w-[620px] leading-[1.7] text-[#63746e]">
              Your Full Service fee includes these field inspections for each property, every year.
            </p>
          </div>
          <div className="mt-[35px] grid gap-4 md:grid-cols-3">
            {[
              ['01', 'Entry inspection', 'One included ingoing inspection.'],
              ['01', 'Final inspection', 'One included outgoing inspection.'],
              ['03', 'Routine inspections', 'Three included routine inspections.'],
            ].map(([n, title, body]) => (
              <div key={title} className="rounded-2xl border border-[#dfebe6] bg-white p-[25px]">
                <b className="text-[39px] font-extrabold tracking-[-0.06em] text-[#0eaa7c]">{n}</b>
                <h3 className="mt-1.5 mb-0 text-[17px] font-bold tracking-[-0.045em]">{title}</h3>
                <p className="mt-0 text-[13px] leading-[1.6] text-[#63746e]">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-r-[10px] border-l-[3px] border-[#0eaa7c] bg-[#eaf8f1] px-[23px] py-5 text-[14px] leading-[1.65] text-[#315c4b]">
            <strong>What happens if you need more?</strong> Any Entry, Final or Routine inspections beyond the annual
            inclusion are charged separately according to the applicable Inspection Only price list. Open inspections
            are not part of the five-inspection allowance and are subject to the service arrangement.
          </div>
          <p className="mt-[17px] text-[12px] leading-[1.6] text-[#788780]">
            Full Service fee example: if your agency charges 5% + GST management fee, Crossub charges 1.5% + GST (30%
            of the agency&apos;s fee). Current partnership eligibility requires a management fee of at least 4% + GST.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 text-center md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <span className="text-[11px] font-extrabold tracking-[0.15em] text-[#008e67] uppercase">
            Flexible from day one
          </span>
          <h2 className="mt-3 mb-[15px] text-[32px] font-bold tracking-[-0.045em] sm:text-[38px]">
            Use the software free.
            <br />
            Call us in when you need support.
          </h2>
          <p className="mb-[26px] text-[#63746e]">
            Start self-managing today, with the option to add services at any time.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a className={primaryButton} href={startFree} rel="noopener noreferrer">
              Start for free ↗
            </a>
            <a className={ghostButton} href={`mailto:${company.salesEmail}`}>
              Talk to sales ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
