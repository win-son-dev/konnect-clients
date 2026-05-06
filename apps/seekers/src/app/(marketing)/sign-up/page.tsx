import { redirect } from 'next/navigation';

export default function SeekersSignUpRedirectPage() {
  redirect('/auth/login?screen_hint=signup&returnTo=/dashboard');
}
