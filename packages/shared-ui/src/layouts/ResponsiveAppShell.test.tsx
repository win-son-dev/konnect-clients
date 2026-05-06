import { describe, expect, it, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ResponsiveAppShell } from './ResponsiveAppShell';
import type { NavigationLink } from './types';

vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    onClick,
  }: {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
  }) => (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  ),
}));

const navigationLinks: NavigationLink[] = [
  { href: '/', label: 'Dashboard' },
  { href: '/job-postings', label: 'Job postings' },
];

function renderShell() {
  return render(
    <ResponsiveAppShell roleLabel="Recruiters" navigationLinks={navigationLinks}>
      <p>Page body</p>
    </ResponsiveAppShell>,
  );
}

describe('ResponsiveAppShell', () => {
  it('renders the role label, navigation links, and child content', () => {
    renderShell();

    expect(screen.getAllByText('Recruiters').length).toBeGreaterThan(0);
    expect(screen.getByText('Page body')).toBeInTheDocument();

    const sidebar = screen.getByRole('navigation', { name: 'Recruiters navigation' });
    expect(within(sidebar).getByRole('link', { name: 'Dashboard' })).toHaveAttribute('href', '/');
    expect(within(sidebar).getByRole('link', { name: 'Job postings' })).toHaveAttribute(
      'href',
      '/job-postings',
    );
  });

  it('opens the mobile drawer when the hamburger button is clicked', async () => {
    const user = userEvent.setup();
    renderShell();

    expect(screen.queryByRole('dialog')).toBeNull();

    await user.click(screen.getByRole('button', { name: 'Open navigation menu' }));

    const drawer = screen.getByRole('dialog', { name: 'Recruiters navigation' });
    expect(drawer).toBeInTheDocument();
    expect(within(drawer).getByRole('link', { name: 'Job postings' })).toBeInTheDocument();
  });

  it('closes the mobile drawer when the backdrop is clicked', async () => {
    const user = userEvent.setup();
    renderShell();

    await user.click(screen.getByRole('button', { name: 'Open navigation menu' }));
    await user.click(screen.getByRole('button', { name: 'Close navigation menu' }));

    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('closes the mobile drawer when Escape is pressed', async () => {
    const user = userEvent.setup();
    renderShell();

    await user.click(screen.getByRole('button', { name: 'Open navigation menu' }));
    await user.keyboard('{Escape}');

    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('closes the mobile drawer when a navigation link is clicked', async () => {
    const user = userEvent.setup();
    renderShell();

    await user.click(screen.getByRole('button', { name: 'Open navigation menu' }));
    const drawer = screen.getByRole('dialog');
    await user.click(within(drawer).getByRole('link', { name: 'Dashboard' }));

    expect(screen.queryByRole('dialog')).toBeNull();
  });
});
