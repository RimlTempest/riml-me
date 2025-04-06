import { createVitestConfig } from '@riml-me/vitest-config';

export default createVitestConfig({
  setupFiles: ['./setup.ts'],
  include: ['**/*.test.{ts,tsx}'],
  exclude: ['**/node_modules/**', '**/.next/**'],
}); 