/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkest: "#070F2B",
        middest: "#1B1A55",
        lighter: "#535C91",
        lightest: "#9290C3",
      },
      fontFamily:{
        rubik: ["Rubik", "sans-serif"]
      }
    },
  },
  plugins: [],
};
