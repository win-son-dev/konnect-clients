# @konnect/seekers

The seeker-facing Next.js app. Job seekers build their profile, search roles, apply, and track applications here.

## Layout

```
apps/seekers/
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
│   │       ├── page.tsx                # /dashboard
│   │       ├── job-search/page.tsx     # /dashboard/job-search
│   │       ├── applications/page.tsx   # /dashboard/applications
│   │       └── resume/page.tsx         # /dashboard/resume
│   └── features/                       # feature folders (one per seeker capability)
└── ...
```

`app/` files stay thin — they wire routes to feature components. Real logic lives in `src/features/<feature-name>/`.

## Run

```bash
npm run dev --workspace apps/seekers   # http://localhost:3001
```
