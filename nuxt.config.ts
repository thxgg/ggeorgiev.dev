// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  meta: {
    title: "Georgi Georgiev",
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      bodyAttrs: {
        class: "font-sans text-foreground h-full antialiased",
      },
    },
  },
  buildModules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "Nunito Sans": true,
      "Space Mono": true,
    },
  },
  css: ["@/assets/css/tailwind.css"],
});
