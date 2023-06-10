/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "navy-blue": "#27374D",
        "light-blue": "#526D82",
        "dark-gray": "#9DB2BF",
        "light-gray": "#DDE6ED",
        "lighter-gray": "#F0F4F8",
      },
      ringColor: {
        DEFAULT: true,
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
