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
        "c-l-blue": "#F3F6FF", // opacity: 40
        "c-purple": "#EDD0F5",
        "c-sl-purple": "#F5E7F9", // opacity: 50
        "c-l-purple": "#FAF1FC", // opacity: 70
        "c-gray": "#EEEFF0",
      },
      fontFamily: {
        pre: ["Pretendard"],
      },
    },
  },
  plugins: [],
};
