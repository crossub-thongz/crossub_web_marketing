import type { Metadata } from 'next';
import {
  ArrowDown,
  ArrowRight,
  Check,
  ClipboardList,
  Home,
  LayoutGrid,
  MapPin,
  Sparkles,
} from 'lucide-react';
import type { ReactNode } from 'react';

import { ContactStrip } from '@/components/site/page-frame';
import { company, isExternalHref, siteLinks } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'Inspection Only | CROSSUB',
  description:
    'Paid on-site ingoing, routine, outgoing and open inspections for agencies, with photos, branded reports and follow-up in the CROSSUB platform.',
};

const VISITS = [
  {
    n: '01',
    kicker: 'Move in',
    title: 'Ingoing',
    body: 'A condition report before the tenant moves in, with photos and the checks the file needs at the start of the lease.',
  },
  {
    n: '02',
    kicker: 'Ongoing',
    title: 'Routine',
    body: 'Scheduled checks through the tenancy, written up as a clear report the property manager can send on.',
  },
  {
    n: '03',
    kicker: 'Move out',
    title: 'Outgoing',
    body: 'The vacate inspection, with the condition recorded for the bond conversation. Lodging the bond itself stays with the agent or the tenant.',
  },
  {
    n: '04',
    kicker: 'Leasing',
    title: 'Open homes',
    body: 'On-the-ground staffing for an open inspection, with the notes brought back into the same system.',
  },
] as const;

const STEPS = [
  {
    n: '01',
    title: 'Book your visit',
    body: 'Tell us the inspection type, property and preferred date.',
    icon: LayoutGrid,
  },
  {
    n: '02',
    title: 'We attend',
    body: 'Our inspector attends on site and documents the visit.',
    icon: Home,
  },
  {
    n: '03',
    title: 'Review the report',
    body: 'Access the photos and report through your property record.',
    icon: ClipboardList,
  },
] as const;

function ForestLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#24C68D] px-6 text-[16px] font-semibold text-white shadow-[0_10px_24px_rgba(36,198,141,0.28)] transition-colors hover:bg-[#1AAB78] ${className}`}
      {...(isExternalHref(href) ? { rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}

export default function InspectionsPage() {
  return (
    <main>
      <section className="mx-auto grid w-full max-w-[1480px] items-center gap-12 px-6 pt-6 pb-16 md:px-8 md:pt-10 lg:grid-cols-2 lg:gap-16 lg:pb-24">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 text-[16px] font-semibold text-[#171E4B] shadow-[0_8px_24px_rgba(23,30,75,0.06)] ring-1 ring-[#171E4B]/8">
            <span className="size-2 rounded-full bg-[#24C68D]" aria-hidden />
            Inspection Only service
          </p>
          <h1 className="mt-8 text-[52px] leading-[1.02] font-bold tracking-[-0.04em] text-[#171E4B] sm:text-[68px] lg:text-[80px]">
            We do the <span className="text-[#24C68D]">driving.</span>
            <br />
            You do the
            <br />
            <span className="text-[#24C68D]">growing.</span>
          </h1>
          <p className="mt-6 max-w-[520px] text-[18px] leading-[1.6] text-[#62697C]">
            Inspection Only is a paid visit. CROSSUB inspectors attend ingoing, routine, outgoing
            and open inspections, then the photos, notes and report stay on the property. Your
            agency can also run the same tools without booking a CROSSUB inspector.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:max-w-[280px]">
            <ForestLink href={siteLinks.bookDemo}>
              Book an Inspection
              <ArrowRight className="size-4" aria-hidden />
            </ForestLink>
            <a
              href="#how"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-[16px] font-semibold text-[#171E4B] shadow-[0_8px_24px_rgba(23,30,75,0.05)] ring-1 ring-[#171E4B]/10 hover:bg-[#F7FBF6]"
            >
              See How It Works
              <ArrowDown className="size-4" aria-hidden />
            </a>
          </div>
          <ul className="mt-8 flex max-w-[520px] flex-wrap gap-x-6 gap-y-3">
            {['Local inspectors', 'Agency-branded reports', 'No full management transfer'].map(
              (item) => (
                <li key={item} className="flex items-center gap-2 text-[15px] font-medium text-[#5C6578]">
                  <Check className="size-4 text-[#24C68D]" strokeWidth={2.5} aria-hidden />
                  {item}
                </li>
              ),
            )}
          </ul>
          <p className="mt-5 text-[15px] text-[#62697C]">
            It sits under{' '}
            <a className="font-semibold text-[#24C68D]" href={siteLinks.propertyServices}>
              Property Services
            </a>
            , and the fee is on{' '}
            <a className="font-semibold text-[#24C68D]" href={siteLinks.pricing}>
              Service Pricing
            </a>
            .
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute top-[8%] right-[6%] size-[280px] rounded-full bg-[#D7EEC8]" aria-hidden />
          <div className="relative mx-auto w-[78%] rotate-[-6deg] rounded-[36px] bg-white p-3 shadow-[0_30px_70px_rgba(23,30,75,0.12)] ring-1 ring-[#171E4B]/8">
            <div className="relative overflow-hidden rounded-[28px] bg-[#E7F3DE]">
              <img
                src="/site/png/photo-notes-room.png"
                alt=""
                className="h-[420px] w-full object-cover"
              />
              <span className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-[13px] font-semibold shadow-[0_10px_24px_rgba(23,30,75,0.12)]">
                <MapPin className="size-3.5 text-[#E15B4A]" aria-hidden />
                On-site, sorted.
              </span>
            </div>
          </div>
          <div className="absolute right-0 bottom-8 left-6 rounded-[24px] bg-white p-4 shadow-[0_20px_50px_rgba(23,30,75,0.14)] ring-1 ring-[#171E4B]/8 sm:left-10">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-[#E3F5DC] text-[#24C68D]">
                <Check className="size-5" strokeWidth={2.5} aria-hidden />
              </span>
              <span>
                <span className="block text-[16px] font-semibold">Inspection completed</span>
                <span className="block text-[14px] text-[#62697C]">Routine inspection</span>
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-[#171E4B]/8 pt-3 text-[14px]">
              <span className="text-[#62697C]">Report ready</span>
              <span className="font-semibold text-[#24C68D]">View report</span>
            </div>
          </div>
          <Sparkles className="absolute right-2 bottom-2 size-8 text-[#24C68D]" aria-hidden />
        </div>
      </section>

      <section className="bg-[#1B3A30] text-white">
        <ul className="mx-auto flex w-full max-w-[1480px] flex-col gap-4 px-6 py-4 text-[15px] font-semibold sm:flex-row sm:items-center sm:justify-between md:px-8">
          <li className="flex items-center gap-2">
            <Sparkles className="size-4 text-[#24C68D]" aria-hidden />
            Your agency stays in control
          </li>
          <li className="flex items-center gap-2">
            <span className="size-3 rotate-45 border-2 border-[#24C68D]" aria-hidden />
            Professional on-site attendance
          </li>
          <li className="flex items-center gap-2">
            <span className="size-3 rounded-[3px] bg-[#24C68D]" aria-hidden />
            Reporting connected to CROS
          </li>
        </ul>
      </section>

      <section className="mx-auto w-full max-w-[1480px] px-6 py-16 md:px-8 md:py-24">
        <div className="grid items-end gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[15px] font-semibold text-[#24C68D]">
              What we take off your plate
            </p>
            <h2 className="mt-4 text-[44px] leading-[1.02] font-bold tracking-[-0.03em] sm:text-[56px]">
              Every inspection.
              <span className="block text-[#24C68D]">One reliable team.</span>
            </h2>
          </div>
          <p className="max-w-[360px] text-[17px] leading-[1.6] text-[#62697C] lg:justify-self-end">
            Four essential inspection services, delivered professionally while you focus on your
            portfolio.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {VISITS.map((visit) => (
            <article
              key={visit.title}
              className="flex flex-col rounded-[28px] bg-white p-6 shadow-[0_16px_40px_rgba(23,30,75,0.05)] ring-1 ring-[#171E4B]/6"
            >
              <p className="text-[14px] font-semibold text-[#8AA888]">
                {visit.n} / {visit.kicker}
              </p>
              <div className="mt-3 flex items-center justify-between gap-3">
                <h3 className="text-[26px] font-semibold tracking-[-0.02em]">{visit.title}</h3>
                <ArrowRight className="size-4 text-[#24C68D]" aria-hidden />
              </div>
              <p className="mt-3 text-[15px] leading-[1.55] text-[#62697C]">{visit.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#F3F8F0] py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-[1480px] items-center gap-12 px-6 md:px-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="absolute inset-x-6 top-8 bottom-0 rounded-[32px] bg-[#D5EBC4]" aria-hidden />
            <div className="relative rounded-[28px] bg-white p-5 shadow-[0_24px_60px_rgba(23,30,75,0.1)] ring-1 ring-[#171E4B]/6">
              <div className="flex items-center justify-between gap-3">
                <p className="flex items-center gap-2 text-[14px] font-semibold">
                  <span className="grid size-9 place-items-center rounded-xl bg-[#E3F5DC] text-[#24C68D]">
                    <Sparkles className="size-4" aria-hidden />
                  </span>
                  Your agency report
                </p>
                <span className="rounded-full bg-[#E3F5DC] px-3 py-1 text-[12px] font-semibold text-[#24C68D]">
                  Finalised
                </span>
              </div>
              <div className="mt-5 border-t border-[#171E4B]/8 pt-4">
                <p className="font-semibold">Routine Inspection Report</p>
                <p className="mt-1 text-[14px] text-[#62697C]">Filed on the property record</p>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {['Living', 'Kitchen', 'Interior'].map((room) => (
                  <div key={room} className="rounded-xl bg-[#F4F7F2] px-2 py-3 text-center text-[13px] font-medium text-[#62697C]">
                    {room}
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                {[
                  ['General condition', 'Documented'],
                  ['Maintenance observations', 'Recorded'],
                ].map(([label, status]) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl bg-[#F4F7F2] px-4 py-3">
                    <span>
                      <span className="block text-[15px] font-semibold">{label}</span>
                      <span className="block text-[13px] text-[#62697C]">On the property file</span>
                    </span>
                    <span className="text-[13px] font-semibold text-[#24C68D]">{status}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#24C68D] text-[15px] font-semibold text-white">
                Photos, notes and PDF
                <ArrowRight className="size-4" aria-hidden />
              </p>
            </div>
            <p className="relative mx-auto mt-[-18px] w-fit rounded-full bg-white px-4 py-2 text-[14px] font-semibold shadow-[0_10px_24px_rgba(23,30,75,0.1)]">
              Your branding. Your clients.
            </p>
          </div>

          <div>
            <p className="text-[15px] font-semibold text-[#24C68D]">More than an inspection</p>
            <h2 className="mt-4 text-[44px] leading-[1.02] font-bold tracking-[-0.03em] sm:text-[52px]">
              Your agency.
              <br />
              Your branding.
              <span className="block text-[#24C68D]">Our team.</span>
            </h2>
            <p className="mt-5 max-w-[520px] text-[17px] leading-[1.65] text-[#62697C]">
              Trained inspectors, insured for the work, look for repair, maintenance and safety
              issues, not only whether the property has been cleaned. Routine and vacate reports
              are returned within 48 hours. Someone at the agency still reviews what is sent.
            </p>
            <ul className="mt-8 space-y-5">
              {[
                ['Qualified local inspectors', 'Trained on the relevant tenancy rules, holding a property management certificate, and insured for the work.'],
                ['Reports that look like yours', 'Logo, layout and any extra checks you ask for can be set to the agency, so the report still looks like yours.'],
                ['Beyond surface-level checks', 'Photos and notes are captured in Cross Inspect, then edited, signed and stored with the property.'],
              ].map(([title, body]) => (
                <li key={title} className="flex gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#E3F5DC] text-[#24C68D]">
                    <Check className="size-5" strokeWidth={2.5} aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[18px] font-semibold">{title}</span>
                    <span className="mt-1 block text-[15px] leading-[1.55] text-[#62697C]">{body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="how" className="scroll-mt-28 py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1480px] px-6 text-center md:px-8">
          <p className="text-[15px] font-semibold text-[#24C68D]">Simple from start to finish</p>
          <h2 className="mt-4 text-[44px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[56px]">
            Three steps. <span className="text-[#24C68D]">Zero fuss.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[18px] text-[#62697C]">
            You book it. We handle the visit. Everything stays connected.
          </p>
          <div className="mt-12 grid gap-4 text-left md:grid-cols-3">
            {STEPS.map((step) => (
              <article
                key={step.n}
                className="rounded-[28px] bg-[#F7FBF6] p-6 ring-1 ring-[#1B3A30]/8"
              >
                <div className="flex items-center justify-between text-[#8AA888]">
                  <span className="text-[14px] font-bold">{step.n}</span>
                  <ArrowRight className="size-4" aria-hidden />
                </div>
                <span className="mt-8 grid size-12 place-items-center rounded-2xl bg-[#E3F5DC] text-[#24C68D]">
                  <step.icon className="size-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-6 text-[24px] font-semibold">{step.title}</h3>
                <p className="mt-2 text-[16px] leading-[1.55] text-[#62697C]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1480px] px-6 py-8 md:px-8">
        <div className="grid items-center gap-10 overflow-hidden rounded-[36px] bg-[#16352C] px-6 py-12 text-white sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-14 lg:py-16">
          <div>
            <p className="flex items-center gap-2 text-[15px] font-semibold text-[#24C68D]">
              <img src="/brand/cros.png" alt="" className="size-8 object-contain" />
              Powered by CROS
            </p>
            <h2 className="mt-4 text-[40px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[48px]">
              Great inspections.
              <span className="block text-[#24C68D]">Smarter follow-through.</span>
            </h2>
            <p className="mt-5 max-w-[480px] text-[16px] leading-[1.65] text-white/80">
              The visit runs in the inspector app. The agent reads the result in the Agent Portal.
              Photos, notes and the report stay with the property, alongside maintenance and leasing.
            </p>
            <p className="mt-4 max-w-[480px] text-[16px] leading-[1.65] text-white/80">
              Your team can also use CROS and the inspection software without booking our inspectors.
            </p>
            <a
              href={siteLinks.software}
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-2xl bg-[#24C68D] px-5 text-[15px] font-semibold text-white hover:bg-[#1AAB78]"
            >
              Meet CROS
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
          <div className="relative">
            <span className="absolute -top-3 right-6 z-10 rounded-xl bg-[#24C68D] px-3 py-1.5 text-[13px] font-semibold text-white">
              One platform
            </span>
            <div className="rounded-[28px] bg-[#F4F8F1] p-5 text-[#171E4B] shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
              <div className="flex items-center justify-between gap-3">
                <p className="flex items-center gap-2 font-semibold">
                  <img src="/brand/cros.png" alt="" className="size-9 object-contain" />
                  CROS · Property Workspace
                </p>
                <span className="text-[13px] font-semibold text-[#24C68D]">Connected</span>
              </div>
              <div className="mt-5 border-t border-[#171E4B]/8 pt-4">
                <p className="font-semibold">Inspection overview</p>
                <p className="mt-1 text-[14px] text-[#62697C]">All inspection information in one place</p>
              </div>
              <div className="mt-4 space-y-2">
                {[
                  ['Inspection report', 'Complete'],
                  ['Maintenance observations', 'Review'],
                  ['Property history', 'Linked'],
                ].map(([label, status]) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3">
                    <span className="font-semibold">{label}</span>
                    <span className="text-[14px] font-medium text-[#24C68D]">{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1480px] gap-10 px-6 py-16 md:px-8 md:py-24 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-[15px] font-semibold text-[#24C68D]">Good to know</p>
          <h2 className="mt-4 text-[44px] leading-[1.02] font-bold tracking-[-0.03em] sm:text-[52px]">
            A few quick <span className="text-[#24C68D]">answers.</span>
          </h2>
          <p className="mt-4 max-w-[260px] text-[16px] leading-[1.6] text-[#62697C]">
            Still have a question? Our team is happy to help.
          </p>
          <a
            href={siteLinks.bookDemo}
            className="mt-6 inline-flex h-12 items-center gap-2 rounded-2xl bg-white px-5 text-[15px] font-semibold shadow-[0_8px_24px_rgba(23,30,75,0.06)] ring-1 ring-[#171E4B]/10"
          >
            Talk to Our Team
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
        <div className="divide-y divide-[#171E4B]/10">
          {[
            {
              q: 'Is Inspection Only included in the free software?',
              a: 'No. The software and the inspection tools are free to use yourselves. Sending a CROSSUB inspector is Inspection Only, and that visit is paid. It is not the Full Service fee.',
            },
            {
              q: 'Which areas do you cover?',
              a: `On-site inspections are arranged from the North Sydney office, ${company.street}, ${company.locality}. The team supports agencies in New South Wales, Victoria and Queensland. Tell us the suburb when you book and we will confirm we can attend.`,
            },
            {
              q: 'How quickly will I receive the report?',
              a: 'Routine and vacate reports are returned within 48 hours. Please confirm timelines for other inspection types when booking. AI can draft a summary from the photos and notes. Someone at the agency still reviews what is sent.',
            },
            {
              q: 'Will inspection reports have our branding?',
              a: 'Yes. Logo, layout and any extra checks you ask for can be set to the agency, so the report still looks like yours.',
            },
            {
              q: 'Do we need to transfer our management?',
              a: 'No. Inspection Only is a separate service. You retain your property management and landlord relationships.',
            },
            {
              q: 'Do you lodge the bond after an outgoing inspection?',
              a: 'No. The outgoing report supports the bond conversation. The agent or the tenant lodges and releases the bond through Rental Bonds Online. CROSSUB does not collect it.',
            },
          ].map((item) => (
            <div key={item.q} className="py-6">
              <h3 className="text-[18px] font-semibold">{item.q}</h3>
              <p className="mt-3 text-[16px] leading-[1.65] text-[#62697C]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1480px] px-6 pb-8 md:px-8">
        <div className="relative overflow-hidden rounded-[36px] bg-[#D7EECB] px-6 py-14 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-10 -bottom-16 size-72 rounded-full bg-[#C5E4B4]" aria-hidden />
          <p className="relative text-[15px] font-semibold text-[#24C68D]">Let’s get started</p>
          <h2 className="relative mt-4 max-w-[640px] text-[40px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[52px]">
            Less travel. More time for what matters.
          </h2>
          <p className="relative mt-4 text-[17px] text-[#3E4A44]">
            Your next inspection is one conversation away.
          </p>
          <ForestLink href={`mailto:${company.salesEmail}`} className="relative mt-8">
            Request an Inspection Quote
            <ArrowRight className="size-4" aria-hidden />
          </ForestLink>
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}
