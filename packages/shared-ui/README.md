# @konnect/shared-ui

Cross-app UI building blocks consumed by both `apps/recruiters` and `apps/seekers`.

## What lives here

- `layouts/` — page-level structure for the authenticated app. Currently: `ResponsiveAppShell` (mobile drawer + tablet/desktop sidebar).
- `marketing/` — page-level structure for public pages. Currently: `MarketingPageHeader` (top bar with brand + sign in / get started CTAs).
- Future: design-system primitives (Button, Input, Dialog…), typography helpers, theming.

## What does NOT live here

- Anything tied to a single role (recruiters or seekers). Role-specific features live inside their app's `src/features/`.
- API clients or data fetching. Those will land in a sibling `@konnect/api-client` package.

## Consuming it

Apps import directly from source:

```ts
import { ResponsiveAppShell, MarketingPageHeader } from '@konnect/shared-ui';
```

Each app's `next.config.ts` lists this package under `transpilePackages` so Next compiles the TS at build time. Each app's `globals.css` adds an `@source` line so Tailwind picks up class names from this package.
