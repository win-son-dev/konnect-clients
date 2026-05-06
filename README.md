# Konnect Clients

Frontend monorepo for the [Konnect platform](https://github.com/win-son-dev/konnect-server). Two separate Next.js apps — one for recruiters, one for seekers — share a small UI package.

## Layout

```
konnect-clients/
├── apps/
│   ├── recruiters/        # Next.js app — post jobs, review applicants
│   └── seekers/           # Next.js app — find roles, apply
└── packages/
    └── shared-ui/         # cross-app components (responsive shell, primitives)
```

Each app deploys independently. Shared design system code lives in `packages/shared-ui` and is consumed via `@konnect/shared-ui`.

## Getting started

```bash
npm install               # at the repo root — installs all workspaces
npm run dev:recruiters    # http://localhost:3000
npm run dev:seekers       # http://localhost:3001 (run in a second terminal)
```

## Quality gates

```bash
npm run typecheck   # all workspaces
npm run lint        # all workspaces
npm run test        # all workspaces
```
