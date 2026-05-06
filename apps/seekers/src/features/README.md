# Seeker features

Each subfolder is one feature — self-contained. A typical feature folder:

```
features/<feature-name>/
├── components/    # React components
├── hooks/         # React hooks
├── api/           # data fetching for this feature
├── types.ts       # local types
└── index.ts       # public surface (what app/ pages import)
```

Routes in `../app/` stay thin — they import the feature's public surface and render it. Cross-feature logic moves up to `@konnect/shared-ui` (UI) or a future `@konnect/api-client` package (data).
