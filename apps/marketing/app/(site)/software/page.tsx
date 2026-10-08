import type { Metadata } from 'next';
import {
  ArrowRight,
  Check,
  ClipboardList,
  Home,
  KeyRound,
  LayoutGrid,
  Mail,
  Sparkles,
  Wrench,
} from 'lucide-react';
import type { ReactNode } from 'react';

import { ContactStrip, FaqList } from '@/components/site/page-frame';
import { isExternalHref, siteLinks } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'Meet CROS | CROSSUB',
  description:
    'Free property management software, plus the Agent Portal, tenant app and inspector app, all on the same property record.',
};

const FEATURES = [
  {
    title: 'Portfolio',
    body: 'Properties, people, agreements and documents stay together, so the agency is not rebuilding the file from inboxes.',
    icon: LayoutGrid,
  },
  {
    title: 'Leasing',
    body: 'Applications, reference checks, agreements and renewals sit on the same property as the inspection and the ledger.',
    icon: Home,
  },
  {
    title: 'Maintenance',
    body: 'A request is logged, quotes are gathered, the agent approves, and the job is followed through to completion.',
    icon: Wrench,
  },
  {
    title: 'Inspections',
    body: 'Ingoing, routine, outgoing and open homes are scheduled here, with photos, notes and the report filed against the property.',
    icon: ClipboardList,
  },
  {
    title: 'Keys',
    body: 'Key movements are recorded digitally, so the office can see who holds a set and when it came back.',
    icon: KeyRound,
  },
  {
    title: 'Messages',
    body: 'SMS and email on a job are kept on the record. The agent can read the history without asking someone to forward a thread.',
    icon: Mail,
  },
] as const;

const AI_POINTS = [
  ['Understand', 'Make sense of requests, photos and reports.'],
  ['Prepare', 'Draft responses and organise next steps.'],
  ['Review', 'Flag what needs your team’s attention.'],
] as const;

const APPS = [
  {
    kicker: 'Property platform',
    title: 'The rent roll, on the web.',
    paragraphs: [
      'This is the free software. The command center, properties, leasing, inspections, maintenance, keys and the communication record live here. Applications, agreements, rent reviews, arrears, open homes and vacating sit on the property, with the photos and messages beside them.',
      'AI prepares drafts and sorts the next step. Spending, trust money and the message that goes to a landlord stay with a person.',
    ],
  },
  {
    kicker: 'Agent portal',
    title: 'Where the agency signs in.',
    paragraphs: [
      'Property managers use the Agent Portal on the web or the phone. The dashboard, property list, leasing, maintenance, inspections and tasks are the daily view. Reports, quotes and anything that needs a decision come back here.',
      'History stays on the file after the job is done. Landlord conversations stay with the agency. Log in opens this portal.',
    ],
  },
  {
    kicker: 'Tenant app',
    title: 'The tenancy, from the tenant’s side.',
    paragraphs: [
      'A tenant can browse listings and apply before they have a login. After they are accepted, onboarding, the lease, documents, repairs, messages and inspections for their own home are in the app.',
      'Rent review, renewal and the move-out, including the outgoing report, stay on that tenancy. The tenant does not see the rest of the agency’s rent roll, and the bond is still lodged by the agent or the tenant through Rental Bonds Online.',
    ],
  },
  {
    kicker: 'Inspector app',
    title: 'The visit, completed on site.',
    paragraphs: [
      'Inspectors take a job from the pool or from an assignment, open directions to the property, and run an open home, ingoing, outgoing or routine inspection in the app. Photos, notes and the report file back against that property.',
      'The same report is what the agent reads in the portal. Agency staff can run the visit themselves, or book a CROSSUB inspector and use this same path.',
    ],
  },
] as const;

const REPORTS = [
  'Quick photo capture',
  'Custom report layouts',
  'Phrase library',
  'Edit the report online',
  'Digital signing',
  'Export as PDF',
  'Share the report',
  'Secure cloud storage',
] as const;

function CoralLink({
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
      className={`inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#E39284] px-7 text-[16px] font-semibold text-white shadow-[0_10px_24px_rgba(227,146,132,0.35)] transition-colors hover:bg-[#D47B6C] ${className}`}
      {...(isExternalHref(href) ? { rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}

export default function SoftwarePage() {
  return (
    <main>
      <section className="mx-auto grid w-full max-w-[1480px] items-center gap-10 px-6 pt-6 pb-16 md:px-8 md:pt-10 md:pb-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 text-[16px] font-semibold text-[#171E4B] shadow-[0_8px_24px_rgba(23,30,75,0.06)] ring-1 ring-[#171E4B]/8">
            <span className="size-2 rounded-full bg-[#24C68D]" aria-hidden />
            Free software
          </p>
          <h1 className="mt-8 text-[52px] leading-[1.02] font-bold tracking-[-0.04em] text-[#171E4B] sm:text-[68px] lg:text-[80px]">
            Meet <span className="text-[#E39284]">CROS.</span>
          </h1>
          <p className="mt-6 text-[36px] leading-[1.08] font-bold tracking-[-0.03em] text-[#171E4B] sm:text-[44px]">
            One platform for the portfolio, the visits and the follow-up.
          </p>
          <p className="mt-6 max-w-[560px] text-[18px] leading-[1.6] text-[#62697C] sm:text-[20px]">
            The property management software is free. Agencies use it to schedule ingoing, outgoing
            and routine inspections, open homes, maintenance and leasing, and to keep the record in
            one place. Paid people — Inspection Only or Full Service — are optional.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CoralLink href={siteLinks.startFree} className="w-full sm:w-auto">
              Start for free
              <ArrowRight className="size-4" aria-hidden />
            </CoralLink>
            <a
              href={siteLinks.bookDemo}
              className="inline-flex h-14 w-full items-center justify-center rounded-full bg-white px-7 text-[16px] font-semibold text-[#171E4B] shadow-[0_8px_24px_rgba(23,30,75,0.06)] ring-1 ring-[#171E4B]/10 hover:bg-[#FFF8F6] sm:w-auto"
            >
              Book a demo
            </a>
          </div>
          <ul className="mt-8 flex max-w-[520px] flex-wrap gap-x-6 gap-y-3">
            {['Free software', 'Optional paid support', 'Your team decides'].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[15px] font-medium text-[#5C6578]">
                <Check className="size-4 text-[#24C68D]" strokeWidth={2.5} aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="rounded-[28px] bg-white p-3 shadow-[0_30px_70px_rgba(23,30,75,0.12)] ring-1 ring-[#171E4B]/8">
            <div className="flex items-center justify-between px-3 py-2">
              <span className="flex gap-1.5" aria-hidden>
                <span className="size-2.5 rounded-full bg-[#FF5F57]" />
                <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="size-2.5 rounded-full bg-[#28C840]" />
              </span>
              <span className="text-[13px] text-[#8B93A7]">CROS Workspace · Overview</span>
            </div>
            <div className="flex gap-2 px-2 pb-3">
              <div className="flex w-11 shrink-0 flex-col items-center gap-5 pt-6 text-[#C5CAD3]" aria-hidden>
                <Sparkles className="size-4" />
                <Home className="size-4" />
                <LayoutGrid className="size-4" />
                <ClipboardList className="size-4" />
                <KeyRound className="size-4" />
                <Mail className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold text-[#8B93A7]">Thursday, 8 October</p>
                    <p className="mt-1 text-[22px] font-bold tracking-[-0.03em]">Good morning</p>
                  </div>
                  <p className="pt-5 text-[13px] text-[#8B93A7]">Dashboard</p>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    ['Properties', '128', 'Active', 'text-[#24C68D]'],
                    ['Open tasks', '12', '4 need review', 'text-[#E39284]'],
                    ['Inspections', '08', 'Scheduled', 'text-[#62697C]'],
                  ].map(([label, value, note, noteClass]) => (
                    <div key={label} className="rounded-2xl bg-[#F7F8FB] px-3 py-3">
                      <p className="text-[12px] text-[#8B93A7]">{label}</p>
                      <p className="mt-1 text-[28px] leading-none font-bold tracking-[-0.04em]">{value}</p>
                      <p className={`mt-2 text-[12px] font-medium ${noteClass}`}>{note}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-[15px] font-semibold">Today’s activity</p>
                <ul className="mt-2 divide-y divide-[#171E4B]/8 text-[14px]">
                  {[
                    ['Routine inspection', 'Scheduled', 'text-[#24C68D]'],
                    ['Lease renewal', 'Review', 'text-[#62697C]'],
                    ['Maintenance request', 'New', 'text-[#62697C]'],
                  ].map(([item, status, statusClass]) => (
                    <li key={item} className="flex items-center justify-between gap-3 py-2.5">
                      <span>{item}</span>
                      <span className={`font-medium ${statusClass}`}>{status}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 rounded-2xl bg-[#F4F0FF] p-4">
                  <p className="flex items-center gap-2 text-[14px] font-semibold">
                    <img src="/brand/cros.png" alt="" className="size-7 object-contain" />
                    A little help from CROS
                  </p>
                  <p className="mt-2 text-[13px] leading-[1.5] text-[#62697C]">
                    A draft reply is ready for the new maintenance request. Your team still reviews
                    it.
                  </p>
                  <p className="mt-2 text-[13px] font-semibold text-[#7A6BB5]">Prepared for review</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-2 -bottom-5 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-[0_16px_40px_rgba(23,30,75,0.12)] ring-1 ring-[#171E4B]/8">
            <img src="/brand/cros.png" alt="" className="size-9 object-contain" />
            <span>
              <span className="block text-[13px] font-semibold">Hi, I’m CROS</span>
              <span className="block text-[12px] text-[#62697C]">Your AI sidekick</span>
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1480px] px-6 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-[15px] font-semibold text-[#E39284]">
            What the platform holds
          </p>
          <h2 className="mt-4 text-[40px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[52px]">
            The daily work, <span className="text-[#E39284]">on the property record.</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] bg-white p-7 shadow-[0_16px_40px_rgba(23,30,75,0.05)] ring-1 ring-[#171E4B]/6"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-[#F8EBE6] text-[#E39284]">
                <item.icon className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-6 text-[22px] font-semibold tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-2 text-[16px] leading-[1.6] text-[#62697C]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="ai" className="scroll-mt-28 bg-[#F4F1FB] py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-[1480px] items-center gap-12 px-6 md:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-[15px] font-semibold text-[#7A6BB5]">
              <img src="/brand/cros.png" alt="" className="size-11 object-contain" />
              Built-in intelligence
            </p>
            <h2 className="mt-6 text-[40px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[52px]">
              AI prepares the admin.
              <span className="mt-1 block text-[#7A6BB5]">Your team decides.</span>
            </h2>
            <p className="mt-5 max-w-[520px] text-[18px] leading-[1.6] text-[#62697C]">
              AI reduces the admin between a photo, a maintenance request and the next email. It
              does not approve spending, handle trust money, or send every message on its own.
            </p>
            <ul className="mt-8 space-y-5">
              {AI_POINTS.map(([title, body]) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#E5F6EE] text-[#24C68D]">
                    <Check className="size-3.5" strokeWidth={2.75} aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[18px] font-semibold">{title}</span>
                    <span className="mt-1 block text-[16px] leading-[1.55] text-[#62697C]">{body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] bg-white p-5 shadow-[0_20px_50px_rgba(23,30,75,0.08)] ring-1 ring-[#171E4B]/6 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="flex items-center gap-3 text-[16px] font-semibold">
                <img src="/brand/cros.png" alt="" className="size-10 object-contain" />
                CROS
              </p>
              <span className="rounded-full bg-[#F1E9FF] px-3 py-1 text-[12px] font-semibold text-[#7A6BB5]">
                AI-powered
              </span>
            </div>
            <div className="mt-5 rounded-2xl bg-[#F7F5FB] p-5">
              <p className="text-[14px] text-[#62697C]">Understand</p>
              <p className="mt-2 text-[18px] leading-[1.45] font-semibold">
                Make sense of requests, photos and reports.
              </p>
            </div>
            <div className="mt-3 rounded-2xl bg-[#F7F4FF] p-5">
              <p className="flex items-center gap-2 text-[16px] font-semibold">
                <Sparkles className="size-4 text-[#B9A6F2]" aria-hidden />
                Prepare
              </p>
              <p className="mt-2 text-[15px] leading-[1.55] text-[#62697C]">
                Draft responses and organise next steps. Flag what needs your team’s attention.
              </p>
            </div>
            <p className="mt-4 px-1 text-[14px] text-[#62697C]">Prepared for your review</p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1480px] px-6 py-16 md:px-8 md:py-24">
        <div className="rounded-[32px] bg-[#FBF6F2] p-6 sm:p-10 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-[15px] font-semibold text-[#E39284]">In the field</p>
              <h2 className="mt-4 text-[36px] leading-[1.08] font-bold tracking-[-0.03em] sm:text-[44px]">
                Reports the agency can actually send.
              </h2>
              <div className="mt-5 space-y-4 text-[17px] leading-[1.65] text-[#62697C]">
                <p>
                  Cross Inspect is CROSSUB’s inspection app. Inspectors and agency staff capture
                  the visit on site, then the report is edited, signed and shared from the same
                  system.
                </p>
                <p>
                  Reports can carry the agency’s logo and layout. Photos, a phrase library and PDF
                  export are part of the report, and the file is stored so the agent and the owner
                  portal can open it later.
                </p>
              </div>
            </div>
            <div className="rounded-[24px] bg-white p-6 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-[#171E4B]/6">
              <ul className="divide-y divide-[#171E4B]/8">
                {REPORTS.map((item) => (
                  <li key={item} className="flex items-center gap-3 py-3 text-[16px] font-medium">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#E5F6EE] text-[#24C68D]">
                      <Check className="size-3.5" strokeWidth={2.75} aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1480px] px-6 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[15px] font-semibold text-[#E39284]">Four apps, one record</p>
          <h2 className="mt-4 text-[40px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[52px]">
            Each person opens the same property from their own side.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {APPS.map((app) => (
            <article
              key={app.kicker}
              className="rounded-[28px] bg-white p-7 shadow-[0_16px_40px_rgba(23,30,75,0.05)] ring-1 ring-[#171E4B]/6 sm:p-8"
            >
              <p className="text-[14px] font-semibold text-[#E39284]">{app.kicker}</p>
              <h3 className="mt-3 text-[24px] font-semibold tracking-[-0.02em]">{app.title}</h3>
              {app.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-[16px] leading-[1.7] text-[#62697C]">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-[16px] leading-[1.65] text-[#62697C]">
          Inspection Only and Full Service write into this same record. The agency does not move
          the portfolio to a second system to add people.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1480px] px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[15px] font-semibold text-[#E39284]">Your team, your way</p>
          <h2 className="mt-4 text-[40px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[52px]">
            The software is free.{' '}
            <span className="text-[#E39284]">Paid people are optional.</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <article className="flex flex-col rounded-[28px] bg-white p-7 shadow-[0_16px_40px_rgba(23,30,75,0.05)] ring-1 ring-[#E39284]/40">
            <p className="w-fit rounded-full bg-[#E7F6EE] px-3 py-1 text-[13px] font-semibold text-[#24C68D]">
              Free software
            </p>
            <h3 className="mt-5 text-[24px] font-semibold">The rent roll, on the web.</h3>
            <p className="mt-3 text-[16px] leading-[1.65] text-[#62697C]">
              This is the free software. The command center, properties, leasing, inspections,
              maintenance, keys and the communication record live here.
            </p>
            <a
              href={siteLinks.startFree}
              className="mt-6 inline-flex items-center gap-1 text-[15px] font-semibold text-[#E39284] hover:text-[#D47B6C]"
              {...(isExternalHref(siteLinks.startFree) ? { rel: 'noopener noreferrer' } : {})}
            >
              Start for free
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </article>
          <article className="flex flex-col rounded-[28px] bg-white p-7 shadow-[0_16px_40px_rgba(23,30,75,0.05)] ring-1 ring-[#171E4B]/6">
            <p className="text-[14px] font-semibold text-[#8B93A7]">Optional service</p>
            <h3 className="mt-5 text-[24px] font-semibold">Inspection Only</h3>
            <p className="mt-3 text-[16px] leading-[1.65] text-[#62697C]">
              Your own staff can complete the visit in the app. Or you can book CROSSUB inspectors
              and have the same report land on the property.
            </p>
            <a
              href={siteLinks.inspections}
              className="mt-6 inline-flex items-center gap-1 text-[15px] font-semibold text-[#171E4B] hover:text-[#E39284]"
            >
              See inspections
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </article>
          <article className="flex flex-col rounded-[28px] bg-white p-7 shadow-[0_16px_40px_rgba(23,30,75,0.05)] ring-1 ring-[#171E4B]/6">
            <p className="text-[14px] font-semibold text-[#8B93A7]">Optional service</p>
            <h3 className="mt-5 text-[24px] font-semibold">Full Service</h3>
            <p className="mt-3 text-[16px] leading-[1.65] text-[#62697C]">
              Inspection Only and Full Service write into this same record. The agency does not
              move the portfolio to a second system to add people.
            </p>
            <a
              href={siteLinks.fullService}
              className="mt-6 inline-flex items-center gap-1 text-[15px] font-semibold text-[#171E4B] hover:text-[#E39284]"
            >
              See Full Service
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </article>
        </div>
        <p className="mt-8 text-center text-[15px] text-[#62697C]">
          The software is free. Inspection Only and Full Service are paid, and they are only added
          when the agency asks for them.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1480px] px-6 pb-8 md:px-8">
        <FaqList
          items={[
            {
              question: 'Is the software free if I never buy a service?',
              answer: (
                <p>
                  Yes. The software is free. Inspection Only and Full Service are paid, and they
                  are only added when the agency asks for them.
                </p>
              ),
            },
            {
              question: 'Which app does each person use?',
              answer: (
                <p>
                  The agency’s rent roll is the web platform. Property managers sign in to the
                  Agent Portal. Tenants use the tenant app for their own home. Inspectors use the
                  inspector app on site. All four write to the same property.
                </p>
              ),
            },
            {
              question: 'Can we run inspections ourselves?',
              answer: (
                <p>
                  Yes. Your own staff can complete the visit in the app. Or you can book CROSSUB
                  inspectors and have the same report land on the property.
                </p>
              ),
            },
          ]}
        />
      </section>

      <section className="mx-auto w-full max-w-[1480px] px-6 py-16 md:px-8 md:py-20">
        <div className="relative overflow-hidden rounded-[36px] bg-[#2C3A4A] px-6 py-16 text-center text-white sm:px-12">
          <div className="pointer-events-none absolute -top-16 -right-10 size-56 rounded-full bg-[#3D4E63]" aria-hidden />
          <img src="/brand/cros.png" alt="" className="relative mx-auto size-28 object-contain" />
          <h2 className="relative mt-6 text-[40px] font-bold tracking-[-0.03em] sm:text-[48px]">
            Ready to meet CROS?
          </h2>
          <p className="relative mx-auto mt-4 max-w-[560px] text-[18px] leading-[1.6] text-white/80">
            The property management software is free. Paid people — Inspection Only or Full Service
            — are optional.
          </p>
          <CoralLink href={siteLinks.startFree} className="relative mt-8">
            Start for free
            <ArrowRight className="size-4" aria-hidden />
          </CoralLink>
        </div>
      </section>

      <ContactStrip />
    </main>
  );
}
