import type { Metadata } from 'next';
import { ArrowUpRight, Check, Home, Phone, Sparkles, Wrench } from 'lucide-react';
import type { ReactNode } from 'react';

import { ContactStrip, DualActions } from '@/components/site/page-frame';
import { company, isExternalHref, siteLinks } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'Full Service | CROSSUB',
  description:
    'Paid day-to-day property management support for agencies: leasing, inspections, maintenance and admin, on the same CROSSUB records. Fee is 30% of the agency’s PM fee.',
};

const BENEFITS = [
  {
    title: 'Scale without hiring',
    body: 'Increase the capacity of your existing team. CROSSUB takes care of repetitive back-end work so you can spend more time growing your agency.',
    icon: ArrowUpRight,
  },
  {
    title: 'Keep full control',
    body: 'Your landlords, your agency brand and your final decisions. We operate behind the scenes, never in front of your landlord relationships.',
    icon: Check,
  },
  {
    title: 'People + CROS',
    body: 'A local property management team, supported by smart workflows and a connected platform. Real people where judgement matters.',
    icon: Sparkles,
  },
] as const;

const SERVICES = [
  {
    title: 'Leasing & Renewals',
    body: 'Applications, reference checks, lease preparation, renewals and follow-up, ready for your agency’s decisions.',
    icon: Home,
  },
  {
    title: 'Inspections',
    body: 'Open homes, ingoing, routine and outgoing inspections — arranged, attended and reported, including long-distance properties.',
    icon: Check,
  },
  {
    title: 'Maintenance',
    body: 'The tenant reports the job. The team gathers quotes — typically three — for the agent to take to the landlord, then arranges the approved work.',
    icon: Wrench,
  },
  {
    title: 'Tenant Operations',
    body: 'Day-to-day tenant communication under your agency brand, plus key tracking, rent follow-up and record keeping. The message history stays on the property.',
    icon: Phone,
  },
] as const;

const ONBOARDING = [
  {
    n: '01',
    title: 'Tell us about your portfolio',
    body: 'We align on your agency’s workflows, decision makers, properties and service expectations.',
  },
  {
    n: '02',
    title: 'Connect your operations',
    body: 'Set up access, property records and approval rules. The handover covers the agreement, lease, ledger, tenant details, an ingoing report, your templates, email signature and logo.',
  },
  {
    n: '03',
    title: 'Stay in control as we deliver',
    body: 'Our team coordinates daily work. Your agency reviews progress and approves key decisions. The Agent Portal shows the live task.',
  },
] as const;

const FAQS = [
  {
    q: 'Will CROSSUB speak directly to my landlords?',
    a: 'No. Landlord communication stays with your agency. CROSSUB works behind the scenes, under your agency brand for relevant tenant-facing communication, and the team is local rather than offshore.',
  },
  {
    q: 'Who approves maintenance and lease decisions?',
    a: `Your agency remains the decision maker. CROSSUB coordinates quotes, supporting information and tasks, then arranges approved actions. Urgent repairs are called through on ${company.emergencyDisplay}.`,
  },
  {
    q: 'Does CROSSUB handle rental bonds or trust funds?',
    a: 'No. CROSSUB does not collect or hold the rental bond. The agent or the tenant lodges and releases it through Rental Bonds Online. An outgoing inspection can support the claim. It does not move the money. Your agency retains responsibility for its own trust accounting.',
  },
  {
    q: 'Is there a lock-in contract?',
    a: 'No lock-in contract. You can use the free software on its own, add Inspection Only for visits, or use Full Service for the daily rent roll.',
  },
  {
    q: 'How much does Full Service cost?',
    a: 'CROSSUB’s Full Service fee is 30% of your existing property management fee. On a 5% + GST management fee, the CROSSUB portion is 1.5% + GST. This offering is for agencies charging at least 4% + GST. Inspection Only is a separate paid visit, not this percentage.',
  },
] as const;

function IconTile({ children }: { children: ReactNode }) {
  return (
    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#E8F8EF] text-[#24C68D]">
      {children}
    </span>
  );
}

export default function FullServicePage() {
  return (
    <main>
      <section className="mx-auto w-full max-w-[1480px] px-6 pt-6 pb-16 md:px-8 md:pt-10 md:pb-24">
        <div className="max-w-[980px]">
          <p className="inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 text-[16px] font-semibold text-[#171E4B] shadow-[0_8px_24px_rgba(23,30,75,0.06)] ring-1 ring-[#171E4B]/8">
            <span className="size-2 rounded-full bg-[#24C68D]" aria-hidden />
            Paid service
          </p>
          <h1 className="mt-8 text-[52px] leading-[1.02] font-bold tracking-[-0.04em] text-[#171E4B] sm:text-[68px] lg:text-[80px]">
            The daily rent roll, with your agency still in charge.
          </h1>
          <p className="mt-6 max-w-[640px] text-[18px] leading-[1.6] text-[#62697C] sm:text-[20px]">
            Full Service is paid support for day-to-day property management. Leasing, inspections,
            maintenance and admin are handled by a local team, on the same records as the free
            software. Landlord conversations stay with your agency. There is no lock-in contract.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <DualActions
              primaryHref={siteLinks.bookDemo}
              primaryLabel="Book a demo"
              secondaryHref={siteLinks.inspections}
              secondaryLabel="Inspection Only"
            />
          </div>
        </div>
      </section>

      <section id="benefits" className="scroll-mt-28 py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1480px] px-6 md:px-8">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-[15px] font-semibold text-[#24C68D]">A smarter way to grow</p>
            <h2 className="mt-4 text-[40px] leading-[1.08] font-bold tracking-[-0.04em] text-[#173E3B] sm:text-[52px]">
              More properties. Same team.
              <br />
              Less admin.
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[17px] leading-[1.7] text-[#62697C]">
              Everything your agency needs to scale its rent roll, without scaling the operational
              workload at the same pace.
            </p>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {BENEFITS.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-[#E1EBE5] bg-white p-7"
              >
                {item.title === 'People + CROS' ? (
                  <img src="/brand/cros.png" alt="" className="size-11 object-contain" />
                ) : (
                  <IconTile>
                    <item.icon className="size-5" strokeWidth={2} aria-hidden />
                  </IconTile>
                )}
                <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.03em] text-[#173E3B]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[16px] leading-[1.7] text-[#62697C]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-28 bg-[#F0F8F3] py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1480px] px-6 md:px-8">
          <p className="text-[15px] font-semibold text-[#24C68D]">What we take care of</p>
          <h2 className="mt-4 text-[40px] leading-[1.08] font-bold tracking-[-0.04em] text-[#173E3B] sm:text-[52px]">
            Your operations, covered.
          </h2>
          <p className="mt-4 max-w-[640px] text-[17px] leading-[1.7] text-[#62697C]">
            Specialised teams across the everyday work that keeps your rent roll moving. You focus
            on relationships. We handle the follow-through.
          </p>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {SERVICES.map((item) => (
              <article
                key={item.title}
                className="flex gap-5 rounded-[24px] border border-[#E0EAE3] bg-white p-7"
              >
                <IconTile>
                  <item.icon className="size-5" strokeWidth={2} aria-hidden />
                </IconTile>
                <div>
                  <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#173E3B]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-[1.7] text-[#62697C]">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 rounded-2xl border border-dashed border-[#AFD7C7] bg-[#E5F4EB] px-5 py-4 text-center text-[15px] text-[#24C68D]">
            <img src="/brand/cros.png" alt="" className="mr-2 inline-block size-8 align-middle object-contain" />
            <strong>Connected by CROS</strong> — one platform for tasks, communication and
            visibility.{' '}
            <a className="font-semibold underline" href={siteLinks.software}>
              Meet CROS
            </a>
          </p>
        </div>
      </section>

      <section id="how" className="scroll-mt-28 py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1480px] px-6 md:px-8">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-[15px] font-semibold text-[#24C68D]">
              How the partnership works
            </p>
            <h2 className="mt-4 text-[40px] leading-[1.08] font-bold tracking-[-0.04em] text-[#173E3B] sm:text-[52px]">
              We handle the operations.
              <br />
              You own the relationships.
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[17px] leading-[1.7] text-[#62697C]">
              A clear division of responsibility, with the transparency of a shared property
              management workspace.
            </p>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <article className="rounded-[24px] border border-[#DCEAE1] bg-white p-7 sm:p-8">
              <h3 className="text-[22px] font-semibold text-[#173E3B]">Your agency</h3>
              <ul className="mt-4 divide-y divide-[#E4EDE8]">
                {[
                  'Own landlord relationships and brand',
                  'Make the important decisions',
                  'Approve quotes, leases and key actions',
                  'Grow the rent roll with more capacity',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 py-3.5 text-[16px]">
                    <Check className="mt-1 size-4 shrink-0 text-[#24C68D]" strokeWidth={2.5} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-[24px] bg-[#E4F5EB] p-7 sm:p-8">
              <h3 className="text-[22px] font-semibold text-[#173E3B]">CROSSUB team</h3>
              <ul className="mt-4 divide-y divide-[#C9E4D6]">
                {[
                  'Coordinate day-to-day operations',
                  'Manage leasing and inspections',
                  'Follow up tenants and contractors',
                  'Keep tasks and records up to date',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 py-3.5 text-[16px]">
                    <Check className="mt-1 size-4 shrink-0 text-[#24C68D]" strokeWidth={2.5} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <div className="mt-5 rounded-[20px] bg-[#173E3B] px-6 py-5 text-center text-white">
            <p className="flex items-center justify-center gap-2 text-[16px] font-semibold">
              <img src="/brand/cros.png" alt="" className="size-8 object-contain" />
              Powered by CROS — one connected workspace
            </p>
            <p className="mt-1 text-[14px] text-[#B6D2CA]">
              Shared records · Live tasks · AI assistance · Full visibility
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-28 bg-[#173E3B] py-16 text-white md:py-24">
        <div className="mx-auto grid w-full max-w-[1480px] items-center gap-12 px-6 md:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[15px] font-semibold text-[#24C68D]">
              Simple, transparent pricing
            </p>
            <h2 className="mt-4 text-[40px] leading-[1.08] font-bold tracking-[-0.04em] sm:text-[52px]">
              One simple fee.
              <br />
              More room to grow.
            </h2>
            <p className="mt-4 max-w-[540px] text-[17px] leading-[1.7] text-[#BED0C9]">
              Pay CROSSUB from the management fee your agency already charges. It isn’t a second
              full management fee for your landlord. The same figures are on{' '}
              <a className="font-semibold text-white" href={siteLinks.pricing}>
                Service Pricing
              </a>
              .
            </p>
            <ul className="mt-6 space-y-2 text-[15px] text-[#B7D5C9]">
              <li>No lock-in contract</li>
              <li>Your agency keeps the landlord relationship</li>
              <li>For agencies charging at least 4% + GST</li>
              <li>Inspection Only is a separate paid visit, not this percentage</li>
            </ul>
          </div>
          <article className="rounded-[28px] bg-white p-7 text-[#173E3B] shadow-[0_20px_60px_rgba(22,79,68,0.08)] sm:p-9">
            <p className="text-[72px] leading-none font-bold tracking-[-0.06em] text-[#24C68D]">30%</p>
            <p className="mt-2 text-[16px] text-[#71857D]">of your existing property management fee</p>
            <div className="my-6 border-t border-[#E5EDE6]" />
            <p className="text-[15px] font-semibold">Example: you charge 5% + GST</p>
            <div className="mt-4 flex h-2.5 overflow-hidden rounded-full bg-[#DDF2E7]">
              <span className="w-[70%] bg-[#24C68D]" />
              <span className="w-[30%] bg-[#A7E0C8]" />
            </div>
            <div className="mt-2 flex justify-between text-[13px] text-[#71857D]">
              <span>Your agency 70%</span>
              <span>CROSSUB 30%</span>
            </div>
            <div className="mt-4 divide-y divide-[#E6EDE7] text-[15px]">
              <p className="flex items-center justify-between gap-4 py-3">
                <span>Your agency retains</span>
                <strong>3.5% + GST</strong>
              </p>
              <p className="flex items-center justify-between gap-4 py-3">
                <span>CROSSUB fee</span>
                <strong>1.5% + GST</strong>
              </p>
            </div>
            <p className="mt-4 text-[13px] leading-[1.6] text-[#83938B]">
              Illustrative fee split only. The final service agreement confirms inclusions,
              exclusions and commercial terms.
            </p>
          </article>
        </div>
      </section>

      <section id="onboarding" className="scroll-mt-28 bg-[#F0F8F3] py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1480px] px-6 md:px-8">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-[15px] font-semibold text-[#24C68D]">Simple onboarding</p>
            <h2 className="mt-4 text-[40px] leading-[1.08] font-bold tracking-[-0.04em] text-[#173E3B] sm:text-[52px]">
              Your team stays in front.
              <br />
              We get to work behind the scenes.
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[17px] leading-[1.7] text-[#62697C]">
              A straightforward start, with clear responsibilities from day one.
            </p>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {ONBOARDING.map((step) => (
              <article key={step.n} className="rounded-[24px] border border-[#DEEBE3] bg-white p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-[#E1F4E8] text-[14px] font-bold text-[#24C68D]">
                  {step.n}
                </span>
                <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.03em] text-[#173E3B]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[16px] leading-[1.7] text-[#62697C]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-28 py-16 md:py-24">
        <div className="mx-auto w-full max-w-[860px] px-6 md:px-8">
          <div className="text-center">
            <p className="text-[15px] font-semibold text-[#24C68D]">Common questions</p>
            <h2 className="mt-4 text-[40px] leading-[1.08] font-bold tracking-[-0.04em] text-[#173E3B] sm:text-[52px]">
              Good questions, clear answers.
            </h2>
          </div>
          <div className="mt-10">
            {FAQS.map((item) => (
              <details key={item.q} className="group border-b border-[#DCE8E0]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[17px] font-semibold text-[#173E3B] [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span aria-hidden className="text-[22px] text-[#24C68D] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-5 text-[16px] leading-[1.7] text-[#62697C]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1480px] px-6 pb-8 md:px-8">
        <div className="rounded-[32px] bg-[#E4F5EB] px-6 py-16 text-center sm:px-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#CFEBE1] bg-[#EFF9F4] px-4 py-2 text-[14px] font-semibold text-[#24C68D]">
            <span className="size-1.5 rounded-full bg-[#37BF96]" aria-hidden />
            Let’s grow together
          </p>
          <h2 className="mx-auto mt-5 max-w-[16em] text-[36px] leading-[1.1] font-bold tracking-[-0.04em] text-[#173E3B] sm:text-[48px]">
            Ready to grow without the extra workload?
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-[1.7] text-[#668178]">
            See how CROSSUB can work behind your agency, while you stay in control.
          </p>
          <a
            href={siteLinks.bookDemo}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#24C68D] px-6 text-[15px] font-semibold text-white hover:bg-[#1AAB78]"
          >
            Book a demo
          </a>
          <p className="mt-5 text-[14px] text-[#668178]">
            Prefer to talk?{' '}
            <a className="font-semibold text-[#173E3B]" href={`tel:${company.phoneTel}`}>
              {company.phoneDisplay}
            </a>
          </p>
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}
