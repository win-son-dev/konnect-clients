import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ResponsiveAppShell } from '@konnect/shared-ui';
import './globals.css';

export const metadata: Metadata = {
  title: 'Konnect for Recruiters',
  description: 'Post roles, review applicants, and hire on Konnect.',
};

const recruiterNavigationLinks = [
  { href: '/', label: 'Dashboard' },
  { href: '/job-postings', label: 'Job postings' },
  { href: '/applications', label: 'Applications' },
  { href: '/company-profile', label: 'Company profile' },
];

export default function RecruitersRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <ResponsiveAppShell roleLabel="Recruiters" navigationLinks={recruiterNavigationLinks}>
          {children}
        </ResponsiveAppShell>
      </body>
    </html>
  );
}
