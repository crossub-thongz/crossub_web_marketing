import type { Metadata } from 'next';

import { MeetCrosHero } from '@/components/site/meet-cros-hero';
import { MeetCrosSections } from '@/components/site/meet-cros-sections';

export const metadata: Metadata = {
  title: 'Meet CROS | CROSSUB',
  description:
    'CROS is the autonomous core for property management. It executes leasing, inspections, maintenance and tenant work, and brings decisions back to you.',
};

export default function SoftwarePage() {
  return (
    <main>
      <MeetCrosHero />
      <MeetCrosSections />
    </main>
  );
}
