import { storybookConfig } from '@riml-me/tailwind-config';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./.storybook/**/*.{js,ts,jsx,tsx}'],
  ...storybookConfig,
};

export default config;
