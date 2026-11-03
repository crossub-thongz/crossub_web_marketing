import { LegalToc } from '@/components/site/legal-toc';
import type { LegalDocument } from '@/lib/legal-documents';
import { registerHref, withRegion, type RegionCode } from '@/lib/regions';
import { company } from '@/lib/site-links';
import { cn } from '@/lib/utils';

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px] fill-none stroke-current stroke-[1.8]">
      <path d="m12 3 8 4v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V7l8-4Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px] fill-none stroke-current stroke-[1.8]">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h4" strokeLinecap="round" />
    </svg>
  );
}

export function LegalPage({ region, document }: { region: RegionCode; document: LegalDocument }) {
  const startFree = registerHref(region);
  const privacyHref = withRegion(region, '/privacy');
  const termsHref = withRegion(region, '/terms');

  return (
    <main className="-my-[8vh] bg-white text-[#11183D]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_81%_25%,#cdf9e8_0,transparent_32%),radial-gradient(circle_at_7%_100%,#efe6ff_0,transparent_31%),radial-gradient(circle_at_94%_100%,#fff5df_0,transparent_30%),#fff]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(#dce1e5_0.7px,transparent_0.7px)] [background-size:17px_17px]"
        />
        <div className="relative mx-auto max-w-[1150px] px-5 pt-14 pb-9 text-center sm:px-8 sm:pt-16">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-[#17A77C]">
            <span aria-hidden>✦</span>
            THE CROSSUB PLATFORM
          </p>
          <h1 className="mt-6 text-[43px] leading-[1.12] font-bold tracking-[-0.04em] sm:text-[56px] lg:text-[68px]">
            Clear terms.
            <br />
            <span className="text-[#22BF89]">Complete confidence.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[680px] text-[15px] leading-[1.75] text-[#737C8E] sm:text-[17px]">
            Everything you need to know about how CROSSUB works, how we handle information, and the choices that
            keep you in control.
          </p>
          <div
            role="tablist"
            aria-label="Legal documents"
            className="mx-auto mt-8 inline-flex w-full max-w-[360px] gap-1 rounded-[15px] border border-[#E7ECEB] bg-white p-1.5 shadow-[0_12px_40px_rgba(49,75,75,0.07)] sm:w-auto sm:max-w-none"
          >
            <a
              role="tab"
              aria-selected={document.id === 'privacy'}
              href={privacyHref}
              className={cn(
                'inline-flex flex-1 items-center justify-center gap-2.5 rounded-[10px] px-4 py-3 text-[13px] font-semibold sm:flex-none sm:px-5 sm:text-[14px]',
                document.id === 'privacy' ? 'bg-[#E7FBF2] text-[#16A97B]' : 'text-[#6C7586]',
              )}
            >
              <ShieldIcon />
              Privacy Policy
            </a>
            <a
              role="tab"
              aria-selected={document.id === 'terms'}
              href={termsHref}
              className={cn(
                'inline-flex flex-1 items-center justify-center gap-2.5 rounded-[10px] px-4 py-3 text-[13px] font-semibold sm:flex-none sm:px-5 sm:text-[14px]',
                document.id === 'terms' ? 'bg-[#E7FBF2] text-[#16A97B]' : 'text-[#6C7586]',
              )}
            >
              <DocumentIcon />
              Terms of Use
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1190px] px-5 pt-8 pb-16 sm:px-8 sm:pt-9 sm:pb-24">
        <div className="flex items-center justify-between gap-3 border-b border-[#E8ECEE] pb-6 text-[11px] font-semibold tracking-[0.04em] text-[#939AA8] sm:text-[12px]">
          <div className="flex min-w-0 items-center gap-3">
            <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-[#24C58E]" />
            <span className="shrink-0">{document.category}</span>
            <span className="text-[#C9D0D4]">/</span>
            <span className="truncate">{document.title}</span>
          </div>
          <span className="shrink-0 text-right text-[10px] font-medium tracking-normal sm:text-[12px]">
            {document.status}
          </span>
        </div>

        <div className="mt-8 lg:mt-10 lg:grid lg:grid-cols-[254px_minmax(0,1fr)] lg:gap-[62px]">
          <aside className="hidden lg:block" aria-label="Document sections">
            <div className="sticky top-24">
              <p className="mb-5 ml-4 text-[11px] font-bold tracking-[0.16em] text-[#9AA2AD]">ON THIS PAGE</p>
              <LegalToc items={document.toc} />
              <div className="mt-11 rounded-[15px] border border-[#EDF1EF] bg-[#F7FAF9] p-5">
                <div className="mb-3 grid h-[30px] w-[30px] place-items-center rounded-[9px] bg-[#E2F9EF] text-[15px] text-[#1BAF7F]">
                  ✉
                </div>
                <p className="text-[14px] font-semibold">Need a hand?</p>
                <p className="mt-2 text-[12px] leading-relaxed text-[#8C94A2]">
                  Our team is here to help with any questions.
                </p>
                <a href={`mailto:${company.email}`} className="mt-3 inline-block text-[12px] font-bold text-[#10A675]">
                  Contact us <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
          </aside>

          <article className="min-w-0">
            <header className="border-b border-[#E8ECEE] pb-8">
              <p className="text-[11px] font-bold tracking-[0.16em] text-[#1BA87D]">{document.kicker}</p>
              <h2 className="mt-3 text-[34px] font-bold tracking-[-0.04em] sm:text-[40px]">{document.title}</h2>
              <p className="mt-3 max-w-[680px] text-[15px] leading-[1.7] text-[#808896]">{document.intro}</p>
            </header>

            <div className="mt-8 flex gap-4 rounded-[14px] border border-[#DFF5EA] bg-[#F0FBF6] px-5 py-5 sm:px-6">
              <div className="grid h-[31px] w-[31px] shrink-0 place-items-center rounded-[9px] bg-[#D7F7E8] text-[#12AA75]">
                ✦
              </div>
              <div>
                <p className="text-[14px] font-semibold">Built with transparency in mind.</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[#6A8277]">{document.callout}</p>
              </div>
            </div>

            <div
              className="mt-8 text-[14px] leading-[1.9] text-[#647085] [&_a]:text-[#13AA7A] [&_a]:underline [&_a]:underline-offset-2 [&_h3]:mt-9 [&_h3]:mb-3 [&_h3]:scroll-mt-28 [&_h3]:text-[20px] [&_h3]:leading-snug [&_h3]:font-semibold [&_h3]:tracking-[-0.02em] [&_h3]:text-[#192143] [&_li]:my-1.5 [&_ol]:my-2 [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4 [&_strong]:font-bold [&_strong]:text-[#252F4A] [&_ul]:my-2 [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_.draft-note]:rounded-[10px] [&_.draft-note]:border [&_.draft-note]:border-[#F5EDDB] [&_.draft-note]:bg-[#FBFAF6] [&_.draft-note]:p-4 [&_.draft-note]:text-[12px] [&_.draft-note]:text-[#A1A7B1]"
              dangerouslySetInnerHTML={{ __html: document.html }}
            />

            <div className="mt-14 flex flex-wrap items-center gap-4 rounded-[15px] border border-[#E3EFEB] bg-gradient-to-r from-[#F8FDFA] to-white p-5 sm:p-6">
              <div className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full bg-[#DCF8EA] text-[16px] font-extrabold text-[#0EAE78]">
                ✓
              </div>
              <div className="min-w-[180px] flex-1">
                <p className="text-[14px] font-semibold">Have a question about these terms?</p>
                <p className="mt-1 text-[12px] text-[#8B93A0]">
                  We&apos;re happy to help explain how CROSSUB handles your information and services.
                </p>
              </div>
              <a
                href={`mailto:${company.email}`}
                className="rounded-full bg-[#21C48C] px-4 py-3 text-[12px] font-bold text-white"
              >
                Get in touch ↗
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#E9FFF5] via-[#F2FBF7] to-[#E8F9F3]">
        <div className="mx-auto flex max-w-[1190px] flex-col gap-6 px-5 py-12 sm:px-8 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#12A97C]">
              LET&apos;S MAKE PROPERTY MANAGEMENT SIMPLER
            </p>
            <h2 className="mt-2 text-[29px] font-bold tracking-[-0.03em] sm:text-[35px]">Ready to work smarter?</h2>
            <p className="mt-2 text-[15px] text-[#768B83]">Free software. Free AI. Your way to manage.</p>
          </div>
          <a
            href={startFree}
            className="inline-flex w-fit items-center rounded-full bg-[#20C58D] px-7 py-4 text-[14px] font-bold text-white shadow-[0_9px_20px_rgba(32,197,141,0.2)]"
          >
            Start for free <span className="ml-3">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
