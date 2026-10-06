import type { Metadata } from 'next';

import { BookDemoForm } from '@/components/site/book-demo-form';
import { PageHero } from '@/components/site/page-frame';
import { company } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'Book a demo | CROSSUB',
  description:
    'Book a call with CROSSUB to see the free property management software and the paid Inspection Only and Full Service options.',
};

export default function BookDemoPage() {
  return (
    <main>
      <PageHero eyebrow="BOOK A DEMO" title="See the software, then decide on support.">
        <p>
          Tell us when suits for a call. We will walk through the free software and, if you want,
          Inspection Only and Full Service. You can also email{' '}
          <a className="font-semibold text-[#007455]" href={`mailto:${company.email}`}>
            {company.email}
          </a>{' '}
          or call {company.phoneDisplay}.
        </p>
      </PageHero>
      <section className="mx-auto max-w-[720px] px-5 pb-20 md:px-6">
        <BookDemoForm />
      </section>
    </main>
  );
}
