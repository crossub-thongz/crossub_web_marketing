import { headers } from 'next/headers';

import { HomePage } from '@/components/site/home-page';
import { regionFromHeader } from '@/lib/regions';

export default async function Page() {
  const region = regionFromHeader(await headers());
  return <HomePage region={region} />;
}
