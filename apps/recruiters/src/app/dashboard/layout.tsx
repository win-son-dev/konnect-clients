import type { ReactNode } from 'react';
import { ResponsiveAppShell, type AuthenticatedUser } from '@konnect/shared-ui';
import { auth0 } from '@/lib/auth0';

const recruiterNavigationLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
  { href: '/dashboard/job-postings', label: 'Job postings', icon: <BriefcaseIcon /> },
  { href: '/dashboard/applications', label: 'Applications', icon: <ClipboardIcon /> },
  { href: '/dashboard/company-profile', label: 'Company', icon: <BuildingIcon /> },
];

export default async function RecruitersDashboardLayout({ children }: { children: ReactNode }) {
  const session = await auth0.getSession();
  const user: AuthenticatedUser | undefined = session?.user
    ? {
        name: session.user.name ?? session.user.email ?? 'You',
        email: session.user.email ?? undefined,
      }
    : undefined;

  return (
    <ResponsiveAppShell
      roleLabel="Recruiters"
      navigationLinks={recruiterNavigationLinks}
      user={user}
      signOutHref="/auth/logout"
    >
      {children}
    </ResponsiveAppShell>
  );
}

function DashboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4h6v3H9z" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
    </svg>
  );
}
