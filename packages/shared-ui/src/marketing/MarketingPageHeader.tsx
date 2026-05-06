import Link from 'next/link';

type MarketingPageHeaderProps = {
  productName?: string;
  audienceLabel?: string;
  signInHref?: string;
  signUpHref?: string;
};

export function MarketingPageHeader({
  productName = 'Konnect',
  audienceLabel,
  signInHref = '/sign-in',
  signUpHref = '/sign-up',
}: MarketingPageHeaderProps) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-xl font-semibold tracking-tight">{productName}</span>
          {audienceLabel ? (
            <span className="text-sm text-gray-500">{audienceLabel}</span>
          ) : null}
        </Link>
        <nav aria-label="Account" className="flex items-center gap-2">
          <Link
            href={signInHref}
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Sign in
          </Link>
          <Link
            href={signUpHref}
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Get started
          </Link>
        </nav>
      </div>
    </header>
  );
}
