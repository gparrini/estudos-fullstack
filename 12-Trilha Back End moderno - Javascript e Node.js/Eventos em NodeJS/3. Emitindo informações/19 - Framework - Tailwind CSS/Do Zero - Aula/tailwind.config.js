/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["desafio.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "3-auto": "repeat(3, auto)",
      },
      gridTemplateRows: {
        "3-auto": "repeat(3, auto)",
      },
    },
  },
  plugins: [],
};
