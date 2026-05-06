import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ResponsiveAppShell } from '@konnect/shared-ui';
import './globals.css';

export const metadata: Metadata = {
  title: 'Konnect for Seekers',
  description: 'Build your profile, find roles, and apply on Konnect.',
};

const seekerNavigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/job-search', label: 'Job search' },
  { href: '/applications', label: 'My applications' },
  { href: '/resume', label: 'Resume' },
];

export default function SeekersRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <ResponsiveAppShell roleLabel="Seekers" navigationLinks={seekerNavigationLinks}>
          {children}
        </ResponsiveAppShell>
      </body>
    </html>
  );
}
