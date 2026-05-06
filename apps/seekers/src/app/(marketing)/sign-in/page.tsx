import { redirect } from 'next/navigation';

export default function SeekersSignInRedirectPage() {
  redirect('/auth/login?returnTo=/dashboard');
}
