import type { ReactNode } from 'react';
import { ResponsiveAppShell, type AuthenticatedUser } from '@konnect/shared-ui';
import { auth0 } from '@/lib/auth0';

const seekerNavigationLinks = [
  { href: '/dashboard', label: 'Home', icon: <HomeIcon /> },
  { href: '/dashboard/job-search', label: 'Search', icon: <SearchIcon /> },
  { href: '/dashboard/applications', label: 'Applications', icon: <ClipboardIcon /> },
  { href: '/dashboard/resume', label: 'Resume', icon: <DocumentIcon /> },
];

export default async function SeekersDashboardLayout({ children }: { children: ReactNode }) {
  const session = await auth0.getSession();
  const user: AuthenticatedUser | undefined = session?.user
    ? {
        name: session.user.name ?? session.user.email ?? 'You',
        email: session.user.email ?? undefined,
      }
    : undefined;

  return (
    <ResponsiveAppShell
      roleLabel="Seekers"
      navigationLinks={seekerNavigationLinks}
      user={user}
      signOutHref="/auth/logout"
    >
      {children}
    </ResponsiveAppShell>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path d="M3 11l9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
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

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v4h4" />
      <path d="M8 12h8M8 16h8" />
    </svg>
  );
}
