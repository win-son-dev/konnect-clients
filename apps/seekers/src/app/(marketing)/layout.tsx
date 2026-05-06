import type { ReactNode } from 'react';
import { MarketingPageHeader } from '@konnect/shared-ui';

export default function SeekersMarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingPageHeader audienceLabel="for Seekers" />
      <div className="flex-1">{children}</div>
    </div>
  );
}
