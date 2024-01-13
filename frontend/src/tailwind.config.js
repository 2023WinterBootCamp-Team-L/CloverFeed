/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#50DA8C",
        dark: "#1E2C49",
        pink: "#F9C7C7",
        yellow: "#F6EED4",
        light_green: "#D5FBE5",
        blue: "#E2E9FF",
        purple: "#EDD0F5",
        grey: "#EEEFF0",
      },
    },
  },
  plugins: [],
};
