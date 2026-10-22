import type { Metadata } from 'next';
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Check,
  ClipboardCheck,
  ClipboardList,
  Home,
  KeyRound,
  LayoutGrid,
  Mail,
  Sparkles,
  Wrench,
} from 'lucide-react';
import type { ReactNode } from 'react';

import { MeetCrosHero } from '@/components/site/meet-cros-hero';
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
    kicker: 'CROS Software',
    title: 'Manage everything in one place.',
    body: 'Free property management software with AI-powered workflows, from leasing to the property record. Trust money stays with a person.',
    tags: 'Properties · Leasing · Trust',
    icon: LayoutGrid,
  },
  {
    kicker: 'Agent Portal',
    title: 'Your portfolio, at your fingertips.',
    body: 'Stay on top of properties, tasks and approvals, wherever you work.',
    tags: 'Portfolio · Tasks · Approvals',
    icon: Briefcase,
  },
  {
    kicker: 'Tenant App',
    title: 'Renting made simple.',
    body: 'Everything tenants need, from applications and documents to repairs and communication.',
    tags: 'Applications · Repairs · Messages',
    icon: Home,
  },
  {
    kicker: 'Inspector App',
    title: 'Inspections, simplified.',
    body: 'Complete inspections on site, capture photos and sync reports instantly.',
    tags: 'Scheduling · Photos · Reports',
    icon: ClipboardCheck,
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
      className={`inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#24C68D] px-7 text-[16px] font-semibold text-white shadow-[0_10px_24px_rgba(36,198,141,0.28)] transition-colors hover:bg-[#1AAB78] ${className}`}
      {...(isExternalHref(href) ? { rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}

export default function SoftwarePage() {
  return (
    <main>
      <MeetCrosHero />

      <section className="mx-auto w-full max-w-[1480px] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <img src="/home/ai-clear.png" alt="" className="h-16 w-auto sm:h-20" />
            <img src="/brand/cros.png" alt="" className="size-16 object-contain sm:size-20" />
            <h2 className="text-[48px] leading-none font-bold tracking-[-0.04em] text-[#24C68D] sm:text-[72px]">
              MEET CROS
            </h2>
          </div>
          <p className="mt-4 text-[20px] text-[#62697C]">
            Your entire property portfolio. One connected workspace.
          </p>
          <a href="#ai" className="mt-3 inline-flex items-center gap-1 text-[16px] font-semibold text-[#171E4B]">
            See how CROS AI simplifies your daily work
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((item) => {
            const Icon = item.icon;
            return (
            <article
              key={item.title}
              className={`rounded-[28px] p-7 ${
                item.title === 'Keys'
                  ? 'bg-[#16324A] text-white'
                  : 'bg-white text-[#171E4B] ring-1 ring-[#24C68D]/40'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-[22px] font-semibold tracking-[-0.02em]">{item.title}</h3>
                <Icon className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />
              </div>
              <p className={`mt-3 text-[16px] leading-[1.6] ${item.title === 'Keys' ? 'text-white/80' : 'text-[#62697C]'}`}>
                {item.body}
              </p>
            </article>
            );
          })}
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
              <span className="text-[#24C68D]">CROS AI</span> helps you prepare the admin.
              <span className="mt-1 block">Your team decides.</span>
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
              <p className="text-[15px] font-semibold text-[#24C68D]">In the field</p>
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
          <h2 className="text-[40px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[52px]">
            One platform. Built for everyone.
          </h2>
          <p className="mx-auto mt-4 max-w-[40rem] text-[18px] leading-[1.55] text-[#62697C] sm:text-[20px]">
            Every role has its own experience, all connected to the same property.
          </p>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {APPS.map((app) => (
            <article
              key={app.kicker}
              className="flex h-full flex-col rounded-[28px] bg-[#F7F6F4] p-6 ring-1 ring-[#171E4B]/8 sm:p-7"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-[#E7FBF4] text-[#24C68D]">
                  <app.icon className="size-5" strokeWidth={1.75} aria-hidden />
                </span>
                <ArrowUpRight className="size-4 text-[#C5CAD3]" aria-hidden />
              </div>
              <p className="mt-5 text-[14px] font-semibold text-[#24C68D]">{app.kicker}</p>
              <h3 className="mt-2 text-[26px] font-semibold tracking-[-0.03em]">{app.title}</h3>
              <p className="mt-3 text-[16px] leading-[1.6] text-[#62697C]">{app.body}</p>
              <div className="mt-auto pt-5">
                <p className="border-t border-[#171E4B]/10 pt-4 text-[14px] text-[#8B93A7]">
                  {app.tags}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-[20px] font-semibold tracking-[-0.02em] text-[#171E4B]">
            One property. One shared record. No duplicated work.
          </p>
          <p className="mt-2 text-[16px] leading-[1.65] text-[#62697C]">
            From self-management to full service, everything stays connected.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1480px] px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[15px] font-semibold text-[#24C68D]">Your team, your way</p>
          <h2 className="mt-4 text-[40px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[52px]">
            The software is free.{' '}
            <span className="text-[#24C68D]">Paid people are optional.</span>
          </h2>
        </div>
        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-3">
          <article className="flex h-full flex-col rounded-[28px] bg-white p-7 shadow-[0_16px_40px_rgba(23,30,75,0.05)] ring-1 ring-[#24C68D]/40">
            <p className="flex h-8 items-center">
              <span className="w-fit rounded-full bg-[#E7F6EE] px-3 py-1 text-[13px] font-semibold text-[#24C68D]">
                Free software
              </span>
            </p>
            <h3 className="mt-5 text-[24px] leading-tight font-semibold">The rent roll, on the web.</h3>
            <p className="mt-3 text-[16px] leading-[1.65] text-[#62697C]">
              This is the free software. The command center, properties, leasing, inspections,
              maintenance, keys and the communication record live here.
            </p>
            <a
              href={siteLinks.startFree}
              className="mt-auto inline-flex items-center gap-1 pt-6 text-[15px] font-semibold text-[#24C68D] hover:text-[#1AAB78]"
              {...(isExternalHref(siteLinks.startFree) ? { rel: 'noopener noreferrer' } : {})}
            >
              Start for free
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </article>
          <article className="flex h-full flex-col rounded-[28px] bg-white p-7 shadow-[0_16px_40px_rgba(23,30,75,0.05)] ring-1 ring-[#171E4B]/6">
            <p className="flex h-8 items-center text-[14px] font-semibold text-[#8B93A7]">
              Optional service
            </p>
            <h3 className="mt-5 text-[24px] leading-tight font-semibold">Inspection Only</h3>
            <p className="mt-3 text-[16px] leading-[1.65] text-[#62697C]">
              Your own staff can complete the visit in the app. Or you can book CROSSUB inspectors
              and have the same report land on the property.
            </p>
            <a
              href={siteLinks.inspections}
              className="mt-auto inline-flex items-center gap-1 pt-6 text-[15px] font-semibold text-[#171E4B] hover:text-[#24C68D]"
            >
              See inspections
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </article>
          <article className="flex h-full flex-col rounded-[28px] bg-white p-7 shadow-[0_16px_40px_rgba(23,30,75,0.05)] ring-1 ring-[#171E4B]/6">
            <p className="flex h-8 items-center text-[14px] font-semibold text-[#8B93A7]">
              Optional service
            </p>
            <h3 className="mt-5 text-[24px] leading-tight font-semibold">Full Service</h3>
            <p className="mt-3 text-[16px] leading-[1.65] text-[#62697C]">
              Inspection Only and Full Service write into this same record. The agency does not
              move the portfolio to a second system to add people.
            </p>
            <a
              href={siteLinks.fullService}
              className="mt-auto inline-flex items-center gap-1 pt-6 text-[15px] font-semibold text-[#171E4B] hover:text-[#24C68D]"
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

      <section className="px-6 py-16 text-center md:px-10 md:py-24">
        <img src="/brand/cros.png" alt="" className="mx-auto w-28" />
        <h2 className="mt-2 text-[40px] leading-[1.08] font-bold tracking-[-0.03em] text-[#24C68D] sm:text-[52px]">
          Discover how CROS AI helps your business
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-[18px] leading-[1.6] text-[#62697C]">
          Meet CROS, your free AI assistant. Manage your way with optional support.
        </p>
        <CoralLink href={siteLinks.startFree} className="mt-8">
          Start for free
          <ArrowRight className="size-4" aria-hidden />
        </CoralLink>
      </section>

      <ContactStrip />
    </main>
  );
}
