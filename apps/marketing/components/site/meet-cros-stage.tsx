'use client';

import { useEffect, useState, type ReactNode } from 'react';

const SCENES = [
  {
    found: 'Found 5 rent reviews',
    tasks: [
      '454 Tenant Self Routine Street 3.24, registered NSW 2000',
      '405 Hume Highway, Lansdowne NSW 2163',
      '405 Tenant Self Routine Street 3.24, Haymarket',
      '405 Tenant Self Routine Street 3.24, market rent $900',
    ],
    note: 'Drafting the owner note from the new rent review.',
    banner: 'Opening remarks sent',
    lines: [
      'Owner notified. Market comparison is ready.',
      'Tenant updated that the review has started.',
      'Proposed rent is waiting on your confirmation.',
      'Follow-up scheduled if no reply by 4pm.',
    ],
    arrangedTitle: '2 inspections arranged',
    arranged: [
      ['Routine', '454 Tenant Self Routine Street'],
      ['Outgoing', '405 Hume Highway, Lansdowne'],
    ],
    decisionTitle: 'Rent Review',
    decisionMeta: 'Rent 1 review — 454 Tenant Self Routine Street 3.24',
    decisionAlert: 'Agent review required',
    decisionBody: 'Market range is ready. Confirm the proposed rent, or send it back.',
    decisionAction: 'Ready for your decision',
  },
  {
    found: 'Found 3 maintenance jobs',
    tasks: [
      'Hot water unit, 12 Miller Street',
      'Leaking tap, 8 George Street, Sydney',
      'Garage door, 405 Hume Highway',
      'Quote comparison finished for Miller Street',
    ],
    note: 'Comparing vendor quotes for the hot water unit.',
    banner: 'Best quote selected',
    lines: [
      'Three vendors compared on price and availability.',
      'Tenant access booked for Thursday morning.',
      'Owner approval draft is ready to send.',
      'Work order held until you confirm.',
    ],
    arrangedTitle: '2 trades booked',
    arranged: [
      ['Plumbing', '12 Miller Street'],
      ['Electrical', '8 George Street, Sydney'],
    ],
    decisionTitle: 'Maintenance',
    decisionMeta: 'Hot water unit — 12 Miller Street',
    decisionAlert: 'Approval required',
    decisionBody: 'The selected quote is ready. Approve it, or ask for another vendor.',
    decisionAction: 'Approve the quote',
  },
  {
    found: 'Found 4 leasing enquiries',
    tasks: [
      'Viewing request, 19 Halifax Street',
      'Application received, 4 Staging Street',
      'Lease renewal, 405 Tenant Self Routine Street',
      'Open home attendance logged',
    ],
    note: 'Replying to the new viewing request.',
    banner: 'Viewing times offered',
    lines: [
      'Applicant offered Thursday and Saturday slots.',
      'Application checked against the listing.',
      'Owner updated with the attendance count.',
      'Calendar hold placed for the open home.',
    ],
    arrangedTitle: '2 viewings arranged',
    arranged: [
      ['Open home', '19 Halifax Street'],
      ['Private viewing', '4 Staging Street'],
    ],
    decisionTitle: 'Leasing',
    decisionMeta: 'Application — 19 Halifax Street',
    decisionAlert: 'Applicant ready for review',
    decisionBody: 'The application pack is complete. Accept it, or request more detail.',
    decisionAction: 'Review the application',
  },
] as const;

function StageCard({ children }: { children: ReactNode }) {
  return (
    <article className="flex min-h-[300px] w-[220px] shrink-0 flex-col overflow-hidden rounded-[16px] bg-white text-[#172033] shadow-[0_12px_28px_rgba(0,0,0,0.28)] lg:w-auto lg:min-w-0 lg:flex-1 lg:shrink">
      {children}
    </article>
  );
}

export function CrosStage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % SCENES.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  const scene = SCENES[index];

  return (
    <div
      className="relative mx-auto w-full min-w-0 max-w-[820px]"
      aria-label="CROS working through rent reviews, maintenance and leasing"
    >
      <div
        className="pointer-events-none absolute -inset-x-8 -inset-y-10 rounded-[80px] bg-[radial-gradient(ellipse_at_18%_50%,rgba(110,255,210,0.95),transparent_58%),radial-gradient(ellipse_at_82%_50%,rgba(124,92,255,0.9),transparent_56%)] blur-2xl"
        aria-hidden
      />
      <div className="relative min-w-0 rounded-[40px] bg-[linear-gradient(100deg,#9dffe4_0%,#3DDC97_32%,#6a5cff_70%,#8eb6ff_100%)] p-[9px] shadow-[0_0_28px_rgba(90,255,210,0.55),0_0_42px_rgba(110,90,255,0.45)]">
        <div className="min-w-0 rounded-[32px] bg-[#07090c] px-3 pt-3 pb-2.5 sm:px-3.5">
          <div
            key={index}
            className="flex min-w-0 gap-2 overflow-x-auto pb-1 motion-safe:[animation:cros-stage-in_0.45s_ease]"
          >
            <StageCard>
              <div className="flex items-center border-b border-[#edf1f4] px-2.5 py-2">
                <p className="text-[11px] font-bold tracking-[-0.02em]">CROS Assistant</p>
                <span className="ml-auto text-[12px] text-[#98a2b3]" aria-hidden>
                  ×
                </span>
              </div>
              <div className="flex gap-2 px-2.5 pt-2 text-[8px] text-[#667085]">
                <span>Discover</span>
                <span className="font-semibold text-[#12946a]">Chat</span>
                <span>Insights</span>
                <span>History</span>
              </div>
              <p className="mx-2.5 mt-2 w-fit rounded-full border border-[#9ae6cb] px-2 py-0.5 text-[8px] font-semibold text-[#0f766e]">
                {scene.found}
              </p>
              <ul className="mt-2 space-y-1 px-2.5">
                {scene.tasks.map((task) => (
                  <li
                    key={task}
                    className="flex items-center gap-1.5 rounded-lg bg-[#eefbf6] px-1.5 py-1 text-[8px] leading-tight text-[#243042]"
                  >
                    <span className="size-2 shrink-0 rounded-full bg-[#b7f3dc]" aria-hidden />
                    <span className="min-w-0 flex-1">{task}</span>
                    <span className="shrink-0 font-semibold text-[#12946a]">Open &gt;</span>
                  </li>
                ))}
              </ul>
              <p className="mt-auto border-t border-[#edf1f4] px-2.5 py-2 text-[8px] text-[#98a2b3]">
                Ask CROS anything…
              </p>
            </StageCard>

            <StageCard>
              <div className="px-2.5 py-2 text-[8px] leading-snug text-[#667085]">{scene.note}</div>
              <p className="mx-2.5 rounded-lg bg-[#d9fff0] px-2 py-1.5 text-[10px] font-semibold text-[#0f766e]">
                {scene.banner}
              </p>
              <ul className="mt-2 space-y-1.5 px-2.5 text-[8px] leading-snug text-[#344054]">
                {scene.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </StageCard>

            <StageCard>
              <p className="px-2.5 pt-2.5 text-[11px] leading-tight font-bold">{scene.arrangedTitle}</p>
              <div className="mt-2 space-y-1.5 px-2.5">
                {scene.arranged.map(([kind, place]) => (
                  <div key={place} className="rounded-lg border border-[#edf1f4] px-2 py-1.5">
                    <p className="text-[8px] font-semibold text-[#12946a]">{kind}</p>
                    <p className="mt-0.5 text-[8px] leading-tight text-[#243042]">{place}</p>
                    <span className="mt-1 inline-flex rounded-full bg-[#3DDC97] px-2 py-0.5 text-[8px] font-semibold text-[#083226]">
                      Arranged
                    </span>
                  </div>
                ))}
              </div>
            </StageCard>

            <StageCard>
              <p className="px-2.5 pt-2.5 text-[11px] font-bold">{scene.decisionTitle}</p>
              <p className="px-2.5 pt-1 text-[8px] leading-tight text-[#667085]">{scene.decisionMeta}</p>
              <p className="mx-2.5 mt-2 rounded-lg bg-[#fff1f3] px-2 py-1.5 text-[9px] font-semibold text-[#e11d48]">
                {scene.decisionAlert}
              </p>
              <p className="px-2.5 pt-1.5 text-[8px] leading-snug text-[#344054]">{scene.decisionBody}</p>
              <span className="mx-2.5 mt-2 inline-flex w-fit rounded-full bg-[#3DDC97] px-2.5 py-1 text-[8px] font-semibold text-[#083226]">
                {scene.decisionAction}
              </span>
              <div className="mt-auto flex justify-between border-t border-[#edf1f4] px-2 py-1.5 text-[7px] text-[#98a2b3]">
                <span>Activity</span>
                <span>Details</span>
                <span>Tenant</span>
                <span>History</span>
              </div>
            </StageCard>
          </div>
          <div className="flex justify-center pt-2.5 pb-0.5">
            <div className="h-2.5 w-16 rounded-full bg-[#e9fff8] shadow-[0_0_16px_rgba(160,255,230,0.95),0_0_32px_rgba(120,255,220,0.7)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
