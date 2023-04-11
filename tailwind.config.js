/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx,css,scss}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik Distressed', ...defaultTheme.fontFamily.sans],
        syne: ['Syne Mono', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
