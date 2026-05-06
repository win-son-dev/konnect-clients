import type { ReactNode } from 'react';
import { TopNavigationBar } from './TopNavigationBar';
import { BottomNavigationBar } from './BottomNavigationBar';
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
  return (
    <div className="flex min-h-screen flex-col">
      <TopNavigationBar
        productName={productName}
        roleLabel={roleLabel}
        navigationLinks={navigationLinks}
      />
      <main className="flex-1 px-4 py-6 pb-24 md:px-8 md:py-8 md:pb-8">{children}</main>
      <BottomNavigationBar navigationLinks={navigationLinks} />
    </div>
  );
}
