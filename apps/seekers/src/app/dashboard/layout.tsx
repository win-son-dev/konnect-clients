import type { ReactNode } from 'react';
import { ResponsiveAppShell } from '@konnect/shared-ui';

const seekerNavigationLinks = [
  { href: '/dashboard', label: 'Home' },
  { href: '/dashboard/job-search', label: 'Job search' },
  { href: '/dashboard/applications', label: 'My applications' },
  { href: '/dashboard/resume', label: 'Resume' },
];

export default function SeekersDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <ResponsiveAppShell roleLabel="Seekers" navigationLinks={seekerNavigationLinks}>
      {children}
    </ResponsiveAppShell>
  );
}
