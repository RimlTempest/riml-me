import baseConfig from '@riml-me/tailwind-config';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  ...baseConfig,
};

export default config;
