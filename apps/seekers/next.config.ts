import type { NextConfig } from 'next';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const monorepoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@konnect/shared-ui'],
  serverExternalPackages: ['@auth0/nextjs-auth0'],
  outputFileTracingRoot: monorepoRoot,
};

export default nextConfig;
