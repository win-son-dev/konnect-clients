'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import { SidebarNavigation } from './SidebarNavigation';
import { MobileNavigationDrawer } from './MobileNavigationDrawer';
import type { NavigationLink } from './types';

type ResponsiveAppShellProps = {
  productName?: string;
  roleLabel: string;
  navigationLinks: NavigationLink[];
  children: ReactNode;
};

export function ResponsiveAppShell({
  productName = 'Konnect',
  roleLabel,
  navigationLinks,
  children,
}: ResponsiveAppShellProps) {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 md:hidden">
        <p className="font-semibold">
          {productName} · <span className="text-gray-500">{roleLabel}</span>
        </p>
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isMobileDrawerOpen}
          onClick={() => setIsMobileDrawerOpen(true)}
          className="rounded p-2 hover:bg-gray-100"
        >
          <HamburgerIcon />
        </button>
      </header>

      <SidebarNavigation
        productName={productName}
        roleLabel={roleLabel}
        navigationLinks={navigationLinks}
      />

      <MobileNavigationDrawer
        productName={productName}
        roleLabel={roleLabel}
        navigationLinks={navigationLinks}
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
      />

      <main className="flex-1 p-4 md:p-8">{children}</main>
    </div>
  );
}

function HamburgerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}
