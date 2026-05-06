import { describe, expect, it, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { ResponsiveAppShell } from './ResponsiveAppShell';
import type { NavigationLink } from './types';

vi.mock('next/link', () => ({
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

const navigationLinks: NavigationLink[] = [
  { href: '/dashboard', label: 'Dashboard', icon: <svg data-testid="icon-dashboard" /> },
  { href: '/dashboard/job-postings', label: 'Job postings', icon: <svg data-testid="icon-jobs" /> },
];

function renderShell(extraProps: Partial<Parameters<typeof ResponsiveAppShell>[0]> = {}) {
  return render(
    <ResponsiveAppShell roleLabel="Recruiters" navigationLinks={navigationLinks} {...extraProps}>
      <p>Page body</p>
    </ResponsiveAppShell>,
  );
}

describe('ResponsiveAppShell', () => {
  it('renders the product name, role label, and child content', () => {
    renderShell();

    expect(screen.getByText('Konnect')).toBeInTheDocument();
    expect(screen.getByText('Recruiters')).toBeInTheDocument();
    expect(screen.getByText('Page body')).toBeInTheDocument();
  });

  it('renders the navigation links in the desktop top nav', () => {
    renderShell();

    const topNav = screen.getByRole('navigation', { name: 'Primary navigation' });
    expect(within(topNav).getByRole('link', { name: 'Dashboard' })).toHaveAttribute(
      'href',
      '/dashboard',
    );
    expect(within(topNav).getByRole('link', { name: 'Job postings' })).toHaveAttribute(
      'href',
      '/dashboard/job-postings',
    );
  });

  it('renders the navigation links in the mobile bottom nav with their icons', () => {
    renderShell();

    const bottomNav = screen.getByRole('navigation', { name: 'Mobile navigation' });
    expect(within(bottomNav).getByRole('link', { name: /Dashboard/ })).toHaveAttribute(
      'href',
      '/dashboard',
    );
    expect(within(bottomNav).getByTestId('icon-dashboard')).toBeInTheDocument();
    expect(within(bottomNav).getByTestId('icon-jobs')).toBeInTheDocument();
  });

  it('points the brand link at /dashboard', () => {
    renderShell();

    const brandLink = screen.getByRole('link', { name: /Konnect/ });
    expect(brandLink).toHaveAttribute('href', '/dashboard');
  });

  it('omits the user menu when no authenticated user is provided', () => {
    renderShell();

    expect(screen.queryByRole('link', { name: 'Sign out' })).toBeNull();
    expect(screen.queryByText(/Hi, /)).toBeNull();
  });

  it('renders the user greeting and sign-out link when authenticated', () => {
    renderShell({
      user: { name: 'Ada Lovelace', email: 'ada@example.com' },
      signOutHref: '/auth/logout',
    });

    expect(screen.getByText('Hi, Ada Lovelace')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Sign out' })).toHaveAttribute(
      'href',
      '/auth/logout',
    );
  });

  it('omits the user menu when user is provided but signOutHref is missing', () => {
    renderShell({ user: { name: 'Ada Lovelace' } });

    expect(screen.queryByRole('link', { name: 'Sign out' })).toBeNull();
  });
});
