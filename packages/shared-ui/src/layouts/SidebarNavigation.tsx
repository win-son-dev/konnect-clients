import Link from 'next/link';
import type { NavigationLink } from './types';

type SidebarNavigationProps = {
  productName: string;
  roleLabel: string;
  navigationLinks: NavigationLink[];
};

export function SidebarNavigation({
  productName,
  roleLabel,
  navigationLinks,
}: SidebarNavigationProps) {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-gray-200 bg-white md:block">
      <div className="border-b border-gray-200 px-6 py-5">
        <p className="text-lg font-semibold tracking-tight">{productName}</p>
        <p className="text-sm text-gray-500">{roleLabel}</p>
      </div>
      <nav aria-label={`${roleLabel} navigation`} className="p-4">
        <ul className="space-y-1">
          {navigationLinks.map((navigationLink) => (
            <li key={navigationLink.href}>
              <Link
                href={navigationLink.href}
                className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {navigationLink.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
