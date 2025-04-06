import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { type UserConfig, defineConfig } from 'vitest/config';

export interface VitestConfigOptions {
  setupFiles?: string[];
  include?: string[];
  exclude?: string[];
}

export const createVitestConfig = (options?: VitestConfigOptions): UserConfig => {
  return defineConfig({
    plugins: [tsconfigPaths(), react()],
    test: {
      environment: 'jsdom',
      include: options?.include ?? ['**/*.test.{ts,tsx}'],
      exclude: options?.exclude ?? ['**/node_modules/**', '**/.next/**'],
      globals: true,
      setupFiles: options?.setupFiles ?? ['./setup.ts'],
    },
    css: {
      postcss: {
        plugins: [],
      },
    },
  });
};

export default createVitestConfig();
