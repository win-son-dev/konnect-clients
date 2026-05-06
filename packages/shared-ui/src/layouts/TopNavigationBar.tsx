import Link from 'next/link';
import type { AuthenticatedUser, NavigationLink } from './types';

type TopNavigationBarProps = {
  productName: string;
  roleLabel: string;
  navigationLinks: NavigationLink[];
  user?: AuthenticatedUser;
  signOutHref?: string;
};

export function TopNavigationBar({
  productName,
  roleLabel,
  navigationLinks,
  user,
  signOutHref,
}: TopNavigationBarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 md:px-6">
        <Link href="/dashboard" className="flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight">{productName}</span>
          <span className="text-sm text-gray-500">{roleLabel}</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navigationLinks.map((navigationLink) => (
                <li key={navigationLink.href}>
                  <Link
                    href={navigationLink.href}
                    className="rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    {navigationLink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {user && signOutHref ? <UserMenu user={user} signOutHref={signOutHref} /> : null}
        </div>
      </div>
    </header>
  );
}

type UserMenuProps = {
  user: AuthenticatedUser;
  signOutHref: string;
};

function UserMenu({ user, signOutHref }: UserMenuProps) {
  return (
    <div className="flex items-center gap-3 border-l border-gray-200 pl-4">
      <span className="hidden text-sm text-gray-700 md:inline">Hi, {user.name}</span>
      <a
        href={signOutHref}
        className="rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
      >
        Sign out
      </a>
    </div>
  );
}
