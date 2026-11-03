import type { Metadata } from 'next';

import { DemoVideo } from '@/components/site/demo-video';

export const metadata: Metadata = {
  title: 'Watch a demo | CROSSUB',
  description: 'Watch a five-minute demo of the CROSSUB property management software.',
};

export default function BookDemoPage() {
  return (
    <main>
      <section className="mx-auto w-full max-w-[1100px] px-6 pt-10 pb-20 md:px-10 md:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[15px] font-semibold text-[#24C68D]">Watch a demo</p>
          <h1 className="mt-4 text-[40px] leading-[1.08] font-bold tracking-[-0.03em] text-[#171E4B] sm:text-[52px]">
            See CROSSUB in five minutes.
          </h1>
          <p className="mx-auto mt-4 max-w-[640px] text-[17px] leading-[1.65] text-[#62697C]">
            A short walkthrough of the free property management software, Cros AI, and how an agency
            stays in control.
          </p>
        </div>
        <DemoVideo />
      </section>
    </main>
  );
}
