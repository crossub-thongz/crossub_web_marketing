export function WorkspacePreview() {
  return (
    <div
      className="overflow-hidden rounded-[28px] bg-white text-left text-[#171E4B] shadow-[0_30px_70px_rgba(23,30,75,0.12)] ring-1 ring-[#171E4B]/8"
      aria-hidden
    >
      <div className="flex min-h-[420px]">
        <div className="hidden w-[168px] shrink-0 border-r border-[#171E4B]/8 bg-[#F7F8FB] p-4 sm:block">
          <p className="text-[13px] font-bold tracking-[0.08em]">CROSSUB</p>
          <ul className="mt-6 space-y-2 text-[13px] font-medium text-[#62697C]">
            <li className="rounded-lg bg-[#E7FBF4] px-3 py-2 text-[#171E4B]">Dashboard</li>
            {['Properties', 'Tasks', 'History'].map((item) => (
              <li key={item} className="px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <p className="text-[12px] text-[#8B93A7]">Portfolio today</p>
          <p className="mt-1 text-[22px] font-bold tracking-[-0.03em]">Good morning</p>
          <p className="text-[13px] text-[#62697C]">Here’s what’s happening with your portfolio.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-2xl bg-[#F7F8FB] p-4">
              <p className="text-[13px] text-[#62697C]">Portfolio overview</p>
              <p className="mt-2 text-[32px] leading-none font-bold tracking-[-0.04em]">38</p>
              <p className="text-[13px] text-[#62697C]">Properties</p>
              <p className="mt-3 text-[12px] text-[#24C68D]">23 occupied</p>
              <p className="text-[12px] text-[#8A6414]">15 vacant</p>
            </div>
            <div className="rounded-2xl bg-[#F7F8FB] p-4">
              <p className="text-[13px] font-semibold">Needs your attention</p>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                {[
                  ['5', 'Rent reviews'],
                  ['4', 'Lease renewals'],
                  ['24', 'Other decisions'],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="text-[22px] font-bold">{value}</p>
                    <p className="text-[11px] leading-tight text-[#62697C]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-4 text-[14px] font-semibold">Upcoming events · summarised by CROS</p>
          <ul className="mt-2 space-y-2 text-[13px]">
            {[
              ['Lease renewal', 'Action required'],
              ['Routine inspection', 'Scheduled'],
              ['Vacate date', 'Coming up'],
            ].map(([item, status]) => (
              <li key={item} className="flex items-center justify-between rounded-xl bg-[#F7F8FB] px-3 py-2">
                <span>{item}</span>
                <span className="font-medium text-[#24C68D]">{status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
