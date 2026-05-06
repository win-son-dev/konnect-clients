import Link from 'next/link';

export default function RecruitersLandingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <section className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Find the right people, faster.
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Post roles, source candidates with skills-based matching, and run your hiring pipeline
          end to end on Konnect.
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
          title="Skills-based matching"
          description="Surfaces candidates whose actual skills line up with the role, not just keywords."
        />
        <FeatureCard
          title="One pipeline, end to end"
          description="Postings, applicants, interviews, and offers in one place — no spreadsheet juggling."
        />
        <FeatureCard
          title="Resume parsing"
          description="Pulls structured data out of resumes so you can scan a stack in minutes, not hours."
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
