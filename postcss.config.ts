interface PostCSSConfig {
  plugins: {
    tailwindcss: Record<string, never>;
    autoprefixer: Record<string, never>;
  };
}

const config: PostCSSConfig = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
