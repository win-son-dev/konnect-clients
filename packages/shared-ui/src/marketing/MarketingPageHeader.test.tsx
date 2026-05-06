import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MarketingPageHeader } from './MarketingPageHeader';

vi.mock('next/link', () => ({
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

describe('MarketingPageHeader', () => {
  it('renders the default product name and points the brand link home', () => {
    render(<MarketingPageHeader />);

    const brandLink = screen.getByRole('link', { name: 'Konnect' });
    expect(brandLink).toHaveAttribute('href', '/');
  });

  it('renders the audience label alongside the product name when provided', () => {
    render(<MarketingPageHeader audienceLabel="for Recruiters" />);

    expect(screen.getByText('for Recruiters')).toBeInTheDocument();
  });

  it('renders Sign in and Get started links pointing at the default auth routes', () => {
    render(<MarketingPageHeader />);

    expect(screen.getByRole('link', { name: 'Sign in' })).toHaveAttribute('href', '/sign-in');
    expect(screen.getByRole('link', { name: 'Get started' })).toHaveAttribute('href', '/sign-up');
  });

  it('honors custom signInHref and signUpHref props', () => {
    render(<MarketingPageHeader signInHref="/api/auth/login" signUpHref="/api/auth/signup" />);

    expect(screen.getByRole('link', { name: 'Sign in' })).toHaveAttribute(
      'href',
      '/api/auth/login',
    );
    expect(screen.getByRole('link', { name: 'Get started' })).toHaveAttribute(
      'href',
      '/api/auth/signup',
    );
  });
});
