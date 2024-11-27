/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './**/*.html',
    './js/**/*.js',  // Make sure JS files are properly included for Tailwind purging
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
