// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-icon'
  ],
  app: {
    head: {
      title: 'Georgi Georgiev',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      htmlAttrs: {
        lang: 'en'
      },
      bodyAttrs: {
        class: 'font-sans text-foreground h-full antialiased'
      }
    }
  },
  googleFonts: {
    families: {
      'Nunito Sans': true,
      'Space Mono': true
    }
  },
  css: ['@/assets/css/tailwind.css']
})
