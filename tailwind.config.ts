import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      background: {
        bright: '#0F0F2E',
        DEFAULT: '#080818'
      },
      foreground: {
        DEFAULT: '#DADFE1',
        dim: '#9AA7AC'
      },
      primary: {
        DEFAULT: '#F4D03F',
        dim: '#AE8D0A'
      }
    },
    fontFamily: {
      sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
      mono: ['"Space Mono"', ...defaultTheme.fontFamily.mono]
    },
    keyframes: {
      pulsate: {
        from: {
          transform: 'scale(1)'
        },
        '50%': {
          transform: 'scale(1.4)'
        },
        to: {
          transform: 'scale(1.2)'
        }
      }
    },
    animation: {
      pulsate: 'pulsate 1s ease forwards'
    }
  }
}
