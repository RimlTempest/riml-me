import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

/** @type {import('./index.d.ts').createVitestConfig} */
export const createVitestConfig = (options) => {
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
      postcss: false,
    },
  });
};

export default createVitestConfig(); 