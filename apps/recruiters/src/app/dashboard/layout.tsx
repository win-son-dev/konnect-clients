import type { ReactNode } from 'react';
import { ResponsiveAppShell } from '@konnect/shared-ui';

const recruiterNavigationLinks = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/dashboard/job-postings', label: 'Job postings' },
  { href: '/dashboard/applications', label: 'Applications' },
  { href: '/dashboard/company-profile', label: 'Company profile' },
];

export default function RecruitersDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <ResponsiveAppShell roleLabel="Recruiters" navigationLinks={recruiterNavigationLinks}>
      {children}
    </ResponsiveAppShell>
  );
}
