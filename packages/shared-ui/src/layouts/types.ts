import type { ReactNode } from 'react';

export type NavigationLink = {
  href: string;
  label: string;
  icon?: ReactNode;
};

export type AuthenticatedUser = {
  name: string;
  email?: string;
};
