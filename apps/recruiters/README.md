# @konnect/recruiters

The recruiter-facing Next.js app. Companies post roles, review applicants, and manage the hiring pipeline here.

## Layout

```
apps/recruiters/
├── src/
│   ├── lib/auth0.ts                    # Auth0 client (Universal Login)
│   ├── middleware.ts                   # Auth0 routes + /dashboard guard
│   ├── app/                            # Next.js App Router (routing only — keep thin)
│   │   ├── layout.tsx                  # root html/body, no shell
│   │   ├── globals.css
│   │   ├── (marketing)/                # public pages — wrapped in MarketingPageHeader
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx                # / — landing
│   │   │   ├── sign-in/page.tsx        # /sign-in → /auth/login
│   │   │   └── sign-up/page.tsx        # /sign-up → /auth/login?screen_hint=signup
│   │   └── dashboard/                  # authenticated app — wrapped in ResponsiveAppShell
│   │       ├── layout.tsx              # fetches session, passes user to shell
│   │       ├── page.tsx                          # /dashboard
│   │       ├── job-postings/page.tsx             # /dashboard/job-postings
│   │       ├── applications/page.tsx             # /dashboard/applications
│   │       └── company-profile/page.tsx          # /dashboard/company-profile
│   └── features/                       # feature folders (one per recruiter capability)
└── ...
```

`app/` files stay thin — they wire routes to feature components. Real logic lives in `src/features/<feature-name>/`.

## Setup (one-time)

This app uses **Auth0 Universal Login** for sign-in / sign-up. Before running it locally:

1. In the Auth0 dashboard, create a **Regular Web Application** (call it e.g. `Konnect Recruiters — local`).
2. Under its **Settings**, copy `Domain`, `Client ID`, `Client Secret` into a new `.env.local` file (use `.env.example` as the template).
3. Add `http://localhost:3000/auth/callback` to **Allowed Callback URLs** and `http://localhost:3000` to **Allowed Logout URLs**.
4. Generate `AUTH0_SECRET` — `openssl rand -hex 32`.
5. Set `AUTH0_AUDIENCE` to the Konnect API audience identifier (matches the API registered in Auth0 for konnect-server). Leave blank during early dev if you only need session cookies and not access tokens for the backend.

`.env.local` is gitignored.

## Run

```bash
npm run dev --workspace apps/recruiters   # http://localhost:3000
```

Without `.env.local`, the dev server boots but auth-needing routes will fail at request time.
