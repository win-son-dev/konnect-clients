import Link from 'next/link';
import type { NavigationLink } from './types';

type TopNavigationBarProps = {
  productName: string;
  roleLabel: string;
  navigationLinks: NavigationLink[];
};

export function TopNavigationBar({
  productName,
  roleLabel,
  navigationLinks,
}: TopNavigationBarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 md:px-6">
        <Link href="/dashboard" className="flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight">{productName}</span>
          <span className="text-sm text-gray-500">{roleLabel}</span>
        </Link>
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
      </div>
    </header>
  );
}
