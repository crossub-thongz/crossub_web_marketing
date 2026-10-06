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
    <section className="mx-auto max-w-[860px] px-5 pt-14 pb-8 text-center md:px-6 md:pt-20">
      <p className="text-[12px] font-semibold tracking-[0.16em] text-[#007455]">{eyebrow}</p>
      <h1 className="mt-4 text-[36px] leading-[1.12] font-semibold tracking-[-0.035em] text-[#171E4B] sm:text-[48px]">
        {title}
      </h1>
      <div className="mx-auto mt-5 max-w-[640px] text-[17px] leading-[1.65] text-[#3E4660] sm:text-[18px]">
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
    <section id={id} className={`scroll-mt-28 px-5 py-12 md:px-6 md:py-16 ${className}`}>
      <div className="mx-auto max-w-[1100px]">
        {eyebrow ? (
          <p className="text-[12px] font-semibold tracking-[0.16em] text-[#007455]">{eyebrow}</p>
        ) : null}
        {title ? (
          <h2 className="mt-3 max-w-2xl text-[30px] leading-[1.15] font-semibold tracking-[-0.03em] sm:text-[36px]">
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
  items: { title: string; body: string; tone: 'mint' | 'lilac' | 'cream' }[];
}) {
  const tones = {
    mint: 'bg-[#E7FBF4]',
    lilac: 'bg-[#F4EEFF]',
    cream: 'bg-[#FFF8E8]',
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-[24px] bg-white/85 p-6 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white"
        >
          <span className={`mb-4 block size-10 rounded-2xl ${tones[item.tone]}`} />
          <h3 className="text-[18px] font-semibold">{item.title}</h3>
          <p className="mt-2 text-[15px] leading-[1.6] text-[#3E4660]">{item.body}</p>
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
            <span aria-hidden className="text-[#007455] transition group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="px-5 pb-5 text-[15px] leading-[1.65] text-[#3E4660] sm:px-6">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}

export function ContactStrip() {
  return (
    <section id="contact" className="scroll-mt-28 px-5 pt-4 pb-20 md:px-6">
      <div className="mx-auto grid max-w-[1100px] gap-6 rounded-[36px] bg-white/80 p-7 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white sm:p-10 md:grid-cols-3">
        <div>
          <h2 className="text-[22px] font-semibold">Talk to CROSSUB</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-[#3E4660]">
            Head office in North Sydney. We reply from the addresses below.
          </p>
        </div>
        <div className="text-[15px] leading-relaxed text-[#171E4B]">
          <p className="font-semibold">Office</p>
          <p className="mt-1 text-[#3E4660]">
            {company.street}
            <br />
            {company.locality}
          </p>
        </div>
        <div className="text-[15px] leading-relaxed">
          <p>
            <a className="font-semibold text-[#007455]" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
          <p className="mt-2">
            <a className="font-semibold text-[#007455]" href={`tel:${company.phoneTel}`}>
              {company.phoneDisplay}
            </a>
          </p>
          <p className="mt-2 text-[#3E4660]">
            Urgent repairs:{' '}
            <a className="font-semibold text-[#007455]" href={`tel:${company.emergencyTel}`}>
              {company.emergencyDisplay}
            </a>
          </p>
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
