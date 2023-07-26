import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        accent: "var(--accent)",
        background: "var(--background)",
      },
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
