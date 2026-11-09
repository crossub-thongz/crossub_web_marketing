'use client';

import { useEffect } from 'react';

const VISITOR_KEY = 'cros_vid';
const SENT_PREFIX = 'cros_visit_sent:';
const UUID_V4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function visitorKey(): string {
  const existing = window.localStorage.getItem(VISITOR_KEY);
  if (existing && UUID_V4.test(existing)) return existing;
  const created = crypto.randomUUID();
  window.localStorage.setItem(VISITOR_KEY, created);
  return created;
}

/** One unique visitor per browser per Sydney day. Failures stay silent and retry on the next page. */
export function SiteVisit() {
  useEffect(() => {
    if (navigator.webdriver) return;
    const day = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Australia/Sydney',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(new Date());
    const sentKey = `${SENT_PREFIX}${day}`;
    if (window.localStorage.getItem(sentKey) === '1') return;
    void fetch('/api/marketing/visits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({ visitorKey: visitorKey(), host: window.location.hostname }),
    })
      .then((response) => {
        if (response.ok) window.localStorage.setItem(sentKey, '1');
      })
      .catch(() => undefined);
  }, []);

  return null;
}
