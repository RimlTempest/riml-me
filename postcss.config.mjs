export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    '@tailwindcss/postcss': {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
  },
}; 