/** @type {import('tailwindcss').Config} */
import colors, { white } from "tailwindcss/colors";

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 17px 17px rgba(0, 0, 0, 0.62)",
      },

      backgroundImage: {
        "whitePattern-80": "url('/src/assets/white-paint-80.png')",
        "whitePattern-90": "url('/src/assets/white-paint-90.png')",
        bluePattern: "url('/src/assets/blue-paint.png')",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "blue-400": "#267dd6",
      "blue-500": "#044B93",
      "blue-600": "#044B93",
      "button-blue": "#043d78",
      white: colors.white,
      gray: "#d0e3f5",
      black: colors.black,
      red: colors.red,
    },
    container: {
      center: true,
    },
    fontFamily: {
      Montserat: ["Montserrat", "sans serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
