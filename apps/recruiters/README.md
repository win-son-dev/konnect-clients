# @konnect/recruiters

The recruiter-facing Next.js app. Companies post roles, review applicants, and manage the hiring pipeline here.

## Layout

```
apps/recruiters/
├── src/
│   ├── app/                            # Next.js App Router (routing only — keep thin)
│   │   ├── layout.tsx                  # root html/body, no shell
│   │   ├── globals.css
│   │   ├── (marketing)/                # public pages — wrapped in MarketingPageHeader
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx                # / — landing
│   │   │   ├── sign-in/page.tsx        # /sign-in (placeholder until Phase 1b)
│   │   │   └── sign-up/page.tsx        # /sign-up (placeholder until Phase 1b)
│   │   └── dashboard/                  # authenticated app — wrapped in ResponsiveAppShell
│   │       ├── layout.tsx
│   │       ├── page.tsx                          # /dashboard
│   │       ├── job-postings/page.tsx             # /dashboard/job-postings
│   │       ├── applications/page.tsx             # /dashboard/applications
│   │       └── company-profile/page.tsx          # /dashboard/company-profile
│   └── features/                       # feature folders (one per recruiter capability)
└── ...
```

`app/` files stay thin — they wire routes to feature components. Real logic lives in `src/features/<feature-name>/`.

## Run

```bash
npm run dev --workspace apps/recruiters   # http://localhost:3000
```
