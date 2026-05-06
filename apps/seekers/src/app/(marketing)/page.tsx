import Link from 'next/link';

export default function SeekersLandingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <section className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Find your next role.
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Build a profile from your resume, browse jobs that match your actual skills, and apply
          in a click.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/sign-up"
            className="rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
          >
            Get started
          </Link>
          <Link
            href="/sign-in"
            className="rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-800 hover:bg-gray-100"
          >
            Sign in
          </Link>
        </div>
      </section>

      <section className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="Skills-first matching"
          description="Jobs that line up with what you can actually do — not just keyword spam in your resume."
        />
        <FeatureCard
          title="One profile, many applications"
          description="Build your profile once. Apply to roles in a click without re-pasting the same details."
        />
        <FeatureCard
          title="Resume parsing"
          description="Drop in your resume and we extract the structure for you. Edit what you want, ignore the rest."
        />
      </section>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </article>
  );
}
