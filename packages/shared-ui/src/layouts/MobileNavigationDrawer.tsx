'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import type { NavigationLink } from './types';

type MobileNavigationDrawerProps = {
  productName: string;
  roleLabel: string;
  navigationLinks: NavigationLink[];
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNavigationDrawer({
  productName,
  roleLabel,
  navigationLinks,
  isOpen,
  onClose,
}: MobileNavigationDrawerProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onEscapeKey);
    return () => document.removeEventListener('keydown', onEscapeKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${roleLabel} navigation`}
      className="fixed inset-0 z-50 md:hidden"
    >
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />
      <nav className="absolute inset-y-0 left-0 w-72 bg-white p-4 shadow-xl">
        <div className="mb-4 border-b border-gray-200 pb-3">
          <p className="text-lg font-semibold">{productName}</p>
          <p className="text-sm text-gray-500">{roleLabel}</p>
        </div>
        <ul className="space-y-1">
          {navigationLinks.map((navigationLink) => (
            <li key={navigationLink.href}>
              <Link
                href={navigationLink.href}
                onClick={onClose}
                className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {navigationLink.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
