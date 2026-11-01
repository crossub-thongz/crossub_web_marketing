import type { Metadata } from 'next';
import { headers } from 'next/headers';

import { LegalPage } from '@/components/site/legal-page';
import { getLegalDocument } from '@/lib/legal-documents';
import { regionFromHeader } from '@/lib/regions';

export const metadata: Metadata = {
  title: 'Terms of Use | CROSSUB',
  description: 'Terms of use for the CROSSUB website, free software, Cros AI, and optional services.',
};

export default async function TermsPage() {
  const region = regionFromHeader(await headers());
  return <LegalPage region={region} document={getLegalDocument('terms')} />;
}
