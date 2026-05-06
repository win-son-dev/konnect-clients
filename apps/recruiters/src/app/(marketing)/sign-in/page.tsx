import { redirect } from 'next/navigation';

export default function RecruitersSignInRedirectPage() {
  redirect('/auth/login?returnTo=/dashboard');
}
