import { createVitestConfig } from '@riml-me/vitest-config';
import type { VitestConfigOptions } from '@riml-me/vitest-config';

const config: VitestConfigOptions = {
  setupFiles: ['./setup.ts'],
  include: ['**/*.test.{ts,tsx}'],
  exclude: ['**/node_modules/**', '**/.next/**'],
};

export default createVitestConfig(config);
