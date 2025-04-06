import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  stories: [
    '../../../apps/app/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
    '@storybook/addon-measure',
    '@storybook/addon-themes',
    '@storybook/addon-toolbars',
  ],
  docs: {
    autodocs: 'tag',
  },
  staticDirs: [path.resolve(__dirname, '../../../apps/app/public')],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../../../apps/app/src"),
      };
    }
    return config;
  },
};

export default config; 