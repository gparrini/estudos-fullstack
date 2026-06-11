/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["Aula/*.html", "Aula/js/*.js"],
  theme: {
    extend: {
      keyframes: {
        "subir-rg": {
          "0%": { transform: "translate(-50%,0%)" },
          "100%": { transform: "translate(-50%,-80%)" },
        },
        "subir-dinheiro": {
          "0%": { transform: "translate(-50%,0%)" },
          "100%": { transform: "translate(-50%,-50%)" },
        },
        "subir-texto": {
          "0%": { transform: "translate(0,-100%)" },
          "100%": { transform: "translate(0,-350%)" },
        },
        "subir-texto-sm": {
          "0%": { transform: "translate(0,-100%)" },
          "100%": { transform: "translate(0,-33vw)" },
        },
        "descer-carteira": {
          "0%": { transform: "translate(0,-25.33%)" },
          "100%": { transform: "translate(0,0)" },
        },
      },
    },
    fontFamily: {
      avenir: ["Avenir", "sans-serif"],
      avenir_heavy: ["Avenir Heavy", "sans-serif"],
    },
  },
  plugins: [],
};
