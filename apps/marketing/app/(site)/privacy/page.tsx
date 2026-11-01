import type { Metadata } from 'next';
import { headers } from 'next/headers';

import { LegalPage } from '@/components/site/legal-page';
import { getLegalDocument } from '@/lib/legal-documents';
import { regionFromHeader } from '@/lib/regions';

export const metadata: Metadata = {
  title: 'Privacy Policy | CROSSUB',
  description: 'Learn how CROSSUB protects your information and review our terms of use.',
};

export default async function PrivacyPage() {
  const region = regionFromHeader(await headers());
  return <LegalPage region={region} document={getLegalDocument('privacy')} />;
}
