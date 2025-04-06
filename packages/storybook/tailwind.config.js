const { storybookConfig } = require('@riml-me/tailwind-config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...storybookConfig,
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
}; 