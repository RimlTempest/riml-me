import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import baseConfig from '@riml-me/eslint-config';
import type { Linter } from 'eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config: Linter.FlatConfig[] = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...baseConfig.map((conf) => {
    // next/core-web-vitalsの中でも@typescript-eslintをpluginに設定していて、二重定義でエラーになるためplugins以外を設定する
    const { plugins: _, ...rest } = conf;
    return { ...rest };
  }),
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    settings: {
      react: {
        version: '19.0.0',
      },
    },
    rules: {
      'import/order': ['error', { alphabetize: { order: 'asc' } }],
      'import/newline-after-import': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@next/next/no-img-element': 'error',
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-sync-scripts': 'error',
    },
  },
];

export default config;
