const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      background: "#080818",
      foreground: "#DADFE1",
      primary: "#F4D03F",
    },
    fontFamily: {
      sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
      mono: ['"Space Mono"', ...defaultTheme.fontFamily.mono],
    },
    keyframes: {
      pulsate: {
        from: {
          transform: "scale(1)",
        },
        "50%": {
          transform: "scale(1.4)",
        },
        to: {
          transform: "scale(1.2)",
        },
      },
    },
    animation: {
      pulsate: "pulsate 1s ease forwards",
    },
  },
};
