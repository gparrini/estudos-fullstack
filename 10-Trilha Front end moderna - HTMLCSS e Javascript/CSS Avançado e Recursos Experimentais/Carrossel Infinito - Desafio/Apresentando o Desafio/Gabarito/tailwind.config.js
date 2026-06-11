/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["Gabarito/*.html", "Gabarito/js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["Avenir", "sans-serif"],
        avenir_heavy: ["Avenir Heavy", "sans-serif"],
      },
      // animation: {
      //   deslocar: "deslocar 1ms both linear view(50% 10%)",
      // },
      // keyframes: {
      //   deslocar: {
      //     "0%": { transform: "translateY(-20px)" },
      //     "100%": { transform: "translateY(100px)" },
      //   },
      // },
    },
  },
  plugins: [],
};
