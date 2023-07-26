export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "nuxt-icon",
  ],

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Georgi Georgiev",
    },
    pageTransition: false,
    layoutTransition: false,
  },

  googleFonts: {
    families: {
      Rubik: true,
    },
  },

  css: ["@/assets/css/tailwind.css", "@/assets/css/main.css"],
})
