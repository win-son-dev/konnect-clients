# @konnect/recruiters

The recruiter-facing Next.js app. Companies post roles, review applicants, and manage the hiring pipeline here.

## Layout

```
apps/recruiters/
├── src/
│   ├── app/                # Next.js App Router (routing only — keep thin)
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── page.tsx                  # /
│   │   ├── job-postings/page.tsx     # /job-postings
│   │   ├── applications/page.tsx     # /applications
│   │   └── company-profile/page.tsx  # /company-profile
│   └── features/           # feature folders (one per recruiter capability)
└── ...
```

`app/` files stay thin — they wire routes to feature components. Real logic lives in `src/features/<feature-name>/` (components, hooks, API calls, types) so each feature is self-contained.

## Run

```bash
npm run dev --workspace apps/recruiters   # http://localhost:3000
```
