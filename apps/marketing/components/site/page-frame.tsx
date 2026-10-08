import type { ReactNode } from 'react';

import { PrimaryLink, SecondaryLink } from '@/components/site/buttons';
import { company } from '@/lib/site-links';

export function PageHero({
  eyebrow,
  title,
  children,
  actions,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-[860px] px-6 pt-16 pb-16 text-center md:px-10 md:pt-24 md:pb-20 lg:pb-[5.5rem]">
      <p className="text-[15px] font-semibold text-[#24C68D]">{eyebrow}</p>
      <h1 className="mt-8 text-[40px] leading-[1.08] font-bold tracking-[-0.035em] text-[#171E4B] sm:text-[52px]">
        {title}
      </h1>
      <div className="mx-auto mt-5 max-w-[640px] text-[17px] leading-[1.65] text-[#62697C] sm:text-[18px]">
        {children}
      </div>
      {actions ? (
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">{actions}</div>
      ) : null}
    </section>
  );
}

export function PageSection({
  id,
  eyebrow,
  title,
  children,
  className = '',
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-28 py-16 md:py-20 lg:py-[5.5rem] ${className}`}>
      <div className="mx-auto w-full max-w-[1480px] px-6 md:px-10">
        {eyebrow ? (
          <p className="text-[15px] font-semibold text-[#24C68D]">{eyebrow}</p>
        ) : null}
        {title ? (
          <h2 className="mt-10 max-w-3xl text-[34px] leading-[1.12] font-bold tracking-[-0.03em] text-[#171E4B] sm:text-[42px]">
            {title}
          </h2>
        ) : null}
        <div className={title || eyebrow ? 'mt-8' : ''}>{children}</div>
      </div>
    </section>
  );
}

export function FeatureGrid({
  items,
}: {
  items: { title: string; body: string; tone: 'mint' | 'lilac' | 'cream'; icon?: string }[];
}) {
  const tones = {
    mint: 'bg-[#E7FBF4] shadow-[0_0_0_6px_rgba(0,167,120,0.12)]',
    lilac: 'bg-[#F4EEFF] shadow-[0_0_0_6px_rgba(124,92,196,0.12)]',
    cream: 'bg-[#FFF8E8] shadow-[0_0_0_6px_rgba(232,184,74,0.2)]',
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-[24px] bg-white/85 p-6 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white"
        >
          <span className={`mb-5 grid size-12 place-items-center rounded-2xl ${tones[item.tone]}`}>
            {item.icon ? <img src={item.icon} alt="" className="size-6" /> : null}
          </span>
          <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-[#171E4B]">{item.title}</h3>
          <p className="mt-2 text-[16px] leading-[1.65] text-[#62697C]">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function FaqList({
  items,
}: {
  items: { question: string; answer: ReactNode }[];
}) {
  return (
    <div className="overflow-hidden rounded-[28px] bg-white/85 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white">
      {items.map((item) => (
        <details key={item.question} className="group border-b border-[#171E4B]/8 last:border-b-0">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[16px] font-semibold sm:px-6 [&::-webkit-details-marker]:hidden">
            {item.question}
            <span aria-hidden className="text-[#24C68D] transition group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="px-5 pb-5 text-[16px] leading-[1.65] text-[#62697C] sm:px-6">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}

export function ContactStrip() {
  const items = [
    {
      label: 'Head office',
      body: (
        <>
          {company.street}
          <br />
          {company.locality}
        </>
      ),
    },
    {
      label: 'General email',
      body: (
        <a className="font-semibold text-[#24C68D]" href={`mailto:${company.email}`}>
          {company.email}
        </a>
      ),
    },
    {
      label: 'Sales and demos',
      body: (
        <>
          <a className="font-semibold text-[#24C68D]" href={`mailto:${company.salesEmail}`}>
            {company.salesEmail}
          </a>
          <br />
          <a className="font-semibold text-[#24C68D]" href={`tel:${company.phoneTel}`}>
            {company.phoneDisplay}
          </a>
        </>
      ),
    },
    {
      label: 'Urgent repairs',
      body: (
        <a className="font-semibold text-[#24C68D]" href={`tel:${company.emergencyTel}`}>
          {company.emergencyDisplay}
        </a>
      ),
    },
  ];

  return (
    <section id="contact" className="scroll-mt-28 pt-16 pb-20 md:pt-20 lg:pt-[5.5rem] lg:pb-28">
      <div className="mx-auto w-full max-w-[1480px] px-6 md:px-10">
      <div className="rounded-[36px] bg-white/80 p-7 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white sm:p-10">
        <h2 className="text-[22px] font-semibold">Talk to CROSSUB</h2>
        <p className="mt-2 max-w-xl text-[16px] leading-[1.65] text-[#62697C]">
          Head office is in North Sydney. Pick the line that matches what you need.
        </p>
        <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.label}>
              <dt className="text-[13px] font-semibold text-[#24C68D]">
                {item.label}
              </dt>
              <dd className="mt-2 text-[16px] leading-[1.65] text-[#171E4B]">{item.body}</dd>
            </div>
          ))}
        </dl>
      </div>
      </div>
    </section>
  );
}

export function DualActions({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  return (
    <>
      <PrimaryLink href={primaryHref} className="w-full sm:w-auto">
        {primaryLabel}
      </PrimaryLink>
      <SecondaryLink href={secondaryHref} className="w-full sm:w-auto">
        {secondaryLabel}
      </SecondaryLink>
    </>
  );
}
