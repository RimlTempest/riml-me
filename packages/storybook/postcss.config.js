module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nesting': {},
    '@tailwindcss/postcss7-compat': {},
    autoprefixer: {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
  },
}; 