'use client';

import { FormEvent, useState, type ChangeEvent } from 'react';

import { company } from '@/lib/site-links';

type Fields = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTimeStart: string;
  preferredTimeEnd: string;
  note: string;
};

const EMPTY: Fields = {
  name: '',
  businessName: '',
  email: '',
  phone: '',
  preferredDate: '',
  preferredTimeStart: '09:00',
  preferredTimeEnd: '10:00',
  note: '',
};

function minutesBetween(start: string, end: string): number {
  const [startHour, startMinute] = start.split(':').map(Number);
  const [endHour, endMinute] = end.split(':').map(Number);
  return endHour * 60 + endMinute - (startHour * 60 + startMinute);
}

const inputClass =
  'h-12 w-full rounded-2xl border border-[#171E4B]/12 bg-white px-4 text-[15px] text-[#171E4B]';

export function BookDemoForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [pending, setPending] = useState(false);
  const today = new Date().toISOString().slice(0, 10);

  const set = (key: keyof Fields) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((current) => ({ ...current, [key]: event.target.value }));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (!values.name.trim() || !values.businessName.trim()) {
      setError('Enter your name and the agency name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      setError('Enter a valid email address.');
      return;
    }
    const digits = values.phone.replace(/\D/g, '');
    if (digits.length < 8) {
      setError('Enter a phone number we can call.');
      return;
    }
    if (!values.preferredDate) {
      setError('Pick a preferred date.');
      return;
    }
    if (values.preferredTimeStart >= values.preferredTimeEnd) {
      setError('The end time has to be after the start time.');
      return;
    }
    if (minutesBetween(values.preferredTimeStart, values.preferredTimeEnd) < 15) {
      setError('Please leave at least 15 minutes for the call.');
      return;
    }

    setPending(true);
    try {
      const response = await fetch('/api/sales/public/book-expert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          businessName: values.businessName.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          preferredDate: values.preferredDate,
          preferredTimeStart: values.preferredTimeStart,
          preferredTimeEnd: values.preferredTimeEnd,
          note: values.note.trim() || undefined,
        }),
      });
      const body: unknown = await response.json().catch(() => null);
      if (!response.ok) {
        const message =
          body && typeof body === 'object' && body !== null && 'message' in body
            ? String((body as { message: unknown }).message)
            : '';
        throw new Error(message);
      }
      const message =
        body && typeof body === 'object' && body !== null && 'message' in body
          ? String((body as { message: unknown }).message)
          : 'Booking request received. Check your email.';
      setSuccess(message);
      setValues(EMPTY);
    } catch (err) {
      const detail = err instanceof Error ? err.message : '';
      setError(
        detail ||
          `We could not send the booking just now. Email ${company.email} or call ${company.phoneDisplay} and we will arrange the call.`,
      );
    } finally {
      setPending(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-[28px] bg-white/90 p-8 text-center shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white">
        <h2 className="text-[24px] font-semibold">Request received</h2>
        <p className="mt-3 text-[16px] leading-relaxed text-[#62697C]">{success}</p>
        <button
          type="button"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-[#24C68D] px-7 text-[15px] font-semibold text-white"
          onClick={() => setSuccess('')}
        >
          Book another time
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[28px] bg-white/90 p-6 shadow-[0_16px_40px_rgba(23,30,75,0.06)] ring-1 ring-white sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-[14px] font-semibold">
          Your name
          <input className={`${inputClass} mt-2 font-normal`} value={values.name} onChange={set('name')} autoComplete="name" required />
        </label>
        <label className="block text-[14px] font-semibold">
          Agency
          <input className={`${inputClass} mt-2 font-normal`} value={values.businessName} onChange={set('businessName')} autoComplete="organization" required />
        </label>
        <label className="block text-[14px] font-semibold">
          Email
          <input className={`${inputClass} mt-2 font-normal`} type="email" value={values.email} onChange={set('email')} autoComplete="email" required />
        </label>
        <label className="block text-[14px] font-semibold">
          Phone
          <input className={`${inputClass} mt-2 font-normal`} type="tel" value={values.phone} onChange={set('phone')} autoComplete="tel" required />
        </label>
        <label className="block text-[14px] font-semibold sm:col-span-2">
          Preferred date
          <input className={`${inputClass} mt-2 font-normal`} type="date" min={today} value={values.preferredDate} onChange={set('preferredDate')} required />
        </label>
        <label className="block text-[14px] font-semibold">
          Start
          <input className={`${inputClass} mt-2 font-normal`} type="time" value={values.preferredTimeStart} onChange={set('preferredTimeStart')} required />
        </label>
        <label className="block text-[14px] font-semibold">
          End
          <input className={`${inputClass} mt-2 font-normal`} type="time" value={values.preferredTimeEnd} onChange={set('preferredTimeEnd')} required />
        </label>
        <label className="block text-[14px] font-semibold sm:col-span-2">
          Anything we should know
          <textarea
            className="mt-2 min-h-28 w-full rounded-2xl border border-[#171E4B]/12 bg-white px-4 py-3 text-[15px] font-normal text-[#171E4B]"
            value={values.note}
            onChange={set('note')}
            maxLength={2000}
          />
        </label>
      </div>
      <p className="mt-3 text-[13px] text-[#62697C]">Times are in Australian Eastern Time.</p>
      {error ? (
        <p role="alert" className="mt-4 text-[14px] leading-relaxed font-medium text-[#9F1239]">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-[#24C68D] px-7 text-[15px] font-semibold text-white hover:bg-[#1AAB78] disabled:opacity-60"
      >
        {pending ? 'Sending…' : 'Request a call'}
      </button>
    </form>
  );
}
