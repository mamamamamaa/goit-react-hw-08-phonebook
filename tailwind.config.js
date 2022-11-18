/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik Distressed', ...defaultTheme.fontFamily.sans],
        syne: ['Syne Mono', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    // plugin(function ({ addVariant }) {
    //   addVariant('active', 'color: red');
    // }),
  ],
};
