/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "425px" },
        sm: { max: "765px" },
        md: { min: "766px", max: "890px" },
        lg: { min: "891px" },
      },
      colors: {
        "pokemon-type": {
          grass: "#08FEC3",
          poison: "#AF08FE",
          water: "#00A3FF",
          fire: "#FE0808",
          eletric: "#FFB800",
          ground: "#85826E",
          fairy: "#FBA1EC",
          normal: "#C4C4C4",
          flying: "#5317FC",
          default: "#0E0E0E",
        },
      },
    },
  },
  plugins: [],
};
