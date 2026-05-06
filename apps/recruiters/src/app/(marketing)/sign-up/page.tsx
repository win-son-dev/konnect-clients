import { redirect } from 'next/navigation';

export default function RecruitersSignUpRedirectPage() {
  redirect('/auth/login?screen_hint=signup&returnTo=/dashboard');
}
