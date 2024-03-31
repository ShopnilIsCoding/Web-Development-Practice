/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './Components/**/*.{html,js,jsx}',
    './Layout/**/*.{html,js,jsx}',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}