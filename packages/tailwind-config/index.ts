import type { Config } from 'tailwindcss';

const baseConfig: Omit<Config, 'content'> = {
  theme: {
    extend: {},
  },
  plugins: [],
};

export default baseConfig;

// Storybookのプレフライト無効化設定
export const storybookConfig: Omit<Config, 'content'> = {
  ...baseConfig,
  corePlugins: {
    preflight: false,
  },
}; 