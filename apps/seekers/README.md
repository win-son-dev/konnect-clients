# @konnect/seekers

The seeker-facing Next.js app. Job seekers build their profile, search roles, apply, and track applications here.

## Layout

```
apps/seekers/
├── src/
│   ├── app/                # Next.js App Router (routing only — keep thin)
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── page.tsx                # /
│   │   ├── job-search/page.tsx     # /job-search
│   │   ├── applications/page.tsx   # /applications
│   │   └── resume/page.tsx         # /resume
│   └── features/           # feature folders (one per seeker capability)
└── ...
```

`app/` files stay thin — they wire routes to feature components. Real logic lives in `src/features/<feature-name>/` (components, hooks, API calls, types).

## Run

```bash
npm run dev --workspace apps/seekers   # http://localhost:3001
```
