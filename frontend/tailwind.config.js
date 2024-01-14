/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-green": "#50DA8C",
        "c-indigo": "#1E2C49",
        "c-pink": "#F9C7C7",
        "c-yellow": "#F6EED4",
        "c-emerald": "#D5FBE5",
        "c-blue": "#E2E9FF",
        "c-purple": "#EDD0F5",
        "c-gray": "#EEEFF0",
      },
    },
  },
  plugins: [],
};
