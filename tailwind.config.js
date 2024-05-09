/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.md", "./.vitepress/theme/**/*.{vue,js,jsx,md}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
