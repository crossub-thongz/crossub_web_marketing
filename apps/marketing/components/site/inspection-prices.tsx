'use client';

import { useState } from 'react';

import { company } from '@/lib/site-links';

const TABS = [
  { id: 'entry', label: 'Entry / Final' },
  { id: 'routine', label: 'Routine' },
  { id: 'open', label: 'Open home' },
] as const;

type TabId = (typeof TABS)[number]['id'];

const APARTMENT = [
  ['Studio', '$75'],
  ['1 bedroom', '$95'],
  ['2 bedrooms', '$110'],
  ['3 bedrooms', '$130'],
  ['4 bedrooms', '$150'],
  ['5 bedrooms', '$150'],
] as const;

const HOUSE = [
  ['Studio', '$75'],
  ['1 bedroom', '$110'],
  ['2 bedrooms', '$130'],
  ['3 bedrooms', '$150'],
  ['4 bedrooms', '$165'],
  ['6+ bedrooms', 'By quotation'],
] as const;

function PriceTable({ title, rows }: { title: string; rows: readonly (readonly [string, string])[] }) {
  return (
    <div className="overflow-hidden rounded-[15px] border border-[#dfebe6] bg-white">
      <h3 className="min-h-[67px] px-[19px] py-[19px] pb-[17px] text-[14px] font-bold tracking-[-0.02em]">{title}</h3>
      <table className="w-full border-collapse text-[13px]">
        <thead>
          <tr>
            <th className="bg-[#f4f8f6] px-[18px] py-3 text-left text-[10px] font-medium tracking-[0.09em] text-[#819089] uppercase">
              Bedrooms
            </th>
            <th className="bg-[#f4f8f6] px-[18px] py-3 text-left text-[10px] font-medium tracking-[0.09em] text-[#819089] uppercase">
              Price (ex GST)
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([bedrooms, price], index) => (
            <tr key={bedrooms} className={index % 2 === 1 ? 'bg-[#fbfdfc]' : undefined}>
              <td className="border-t border-[#edf2ef] px-[18px] py-[13px]">{bedrooms}</td>
              <td className="border-t border-[#edf2ef] px-[18px] py-[13px] font-bold">{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function InspectionPrices() {
  const [tab, setTab] = useState<TabId>('entry');

  return (
    <div>
      <div className="mb-5 inline-flex rounded-[11px] bg-[#f1f5f3] p-1 max-[550px]:flex max-[550px]:w-full" role="tablist" aria-label="Inspection type">
        {TABS.map((item) => {
          const active = item.id === tab;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setTab(item.id)}
              className={`rounded-lg px-[19px] py-[11px] text-[13px] max-[550px]:flex-1 max-[550px]:px-1.5 ${
                active ? 'bg-white font-extrabold text-[#065f4b] shadow-[0_2px_8px_#d9e4df]' : 'text-[#667771]'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {tab === 'entry' ? (
        <div>
          <div className="grid gap-[15px] md:grid-cols-2">
            <PriceTable title="Apartment · Unit · Townhouse · Studio" rows={APARTMENT} />
            <PriceTable title="House" rows={HOUSE} />
          </div>
          <p className="mt-[17px] text-[12px] leading-[1.6] text-[#788780]">
            The supplied House schedule does not list a 5-bedroom rate. Please request a quote for unlisted
            configurations.
          </p>
        </div>
      ) : null}

      {tab === 'routine' ? (
        <div className="mt-0 flex flex-col items-start justify-between gap-5 rounded-[14px] border border-[#d5e9df] bg-[#f7fcf9] p-[22px] sm:flex-row sm:items-center">
          <div>
            <strong className="text-[15px]">Routine inspections</strong>
            <small className="mt-[5px] block text-[#63746e]">Routine inspection rates are available on request.</small>
          </div>
          <a
            href={`mailto:${company.salesEmail}`}
            className="inline-flex items-center justify-center rounded-[10px] border border-[#dfebe6] px-5 py-[13px] text-[13px] font-bold hover:bg-[#ecfaf4]"
          >
            Ask for a quote ↗
          </a>
        </div>
      ) : null}

      {tab === 'open' ? (
        <div className="flex flex-col items-start justify-between gap-5 rounded-[14px] border border-[#d5e9df] bg-[#f7fcf9] p-[22px] sm:flex-row sm:items-center">
          <div>
            <strong className="text-[15px]">Open home inspection</strong>
            <small className="mt-[5px] block text-[#63746e]">Per scheduled open inspection event.</small>
          </div>
          <div className="text-[26px] font-extrabold tracking-[-0.04em] whitespace-nowrap">
            $55 <small className="text-[12px] font-medium tracking-normal text-[#63746e]">ex GST</small>
          </div>
        </div>
      ) : null}
    </div>
  );
}
