import Link from 'next/link';
import type { NavigationLink } from './types';

type BottomNavigationBarProps = {
  navigationLinks: NavigationLink[];
};

export function BottomNavigationBar({ navigationLinks }: BottomNavigationBarProps) {
  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-gray-200 bg-white md:hidden"
    >
      <ul
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${navigationLinks.length}, minmax(0, 1fr))`,
        }}
      >
        {navigationLinks.map((navigationLink) => (
          <li key={navigationLink.href}>
            <Link
              href={navigationLink.href}
              className="flex flex-col items-center gap-1 px-2 py-3 text-xs text-gray-700 hover:bg-gray-50"
            >
              {navigationLink.icon ? (
                <span className="block h-5 w-5" aria-hidden="true">
                  {navigationLink.icon}
                </span>
              ) : null}
              <span className="leading-none">{navigationLink.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
