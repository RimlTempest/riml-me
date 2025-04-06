interface PostCSSConfig {
  plugins: {
    'postcss-import'?: Record<string, never>;
    'postcss-nesting'?: Record<string, never>;
    'postcss-preset-env'?: {
      features?: {
        'nesting-rules'?: boolean;
      };
    };
    tailwindcss: Record<string, never>;
    autoprefixer: Record<string, never>;
  };
}

export const baseConfig: PostCSSConfig = {
  plugins: {
    'postcss-import': {},
    'postcss-nesting': {},
    'postcss-preset-env': {
      features: {
        'nesting-rules': true,
      },
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default baseConfig;
