// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: 'https://keyruu.de',
  },
  imports: {
    dirs: [
      'composables/generated/*.ts'
    ]
  },
  css: [
    '~/assets/css/main.css',
  ],
  build: {
    transpile: ["gsap"],
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/image',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots',
    '@nuxtjs/apollo',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@pinia/nuxt',
  ],
  ui: {
    icons: ["mdi", "simple-icons"]
  },
  i18n: {
    locales: [
      {
        code: 'de',
        iso: 'de-DE',
        name: 'German',
        file: 'de.js'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.js',
      }
    ],
    defaultLocale: 'en',
    langDir: 'lang/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
      alwaysRedirect: true
    }
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.GRAPHQL_URL!,
        wsEndpoint: process.env.GRAPHQL_WS_URL!,
      }
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('swiper-') || tag.startsWith('atropos-')
    }
  },
  runtimeConfig: {
    public: {
      nocodbUrl: process.env.NOCODB_URL!,
    }
  }
})
