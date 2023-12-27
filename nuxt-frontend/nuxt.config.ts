// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: 'https://keyruu.de',
    name: 'Keyruu',
    indexable: true,
  },
  sitemap: {
    sources: [
      '/api/__sitemap__/urls'
    ],
  },
  schemaOrg: {
    identity: {
      name: 'Keyruu - Lucas',
      image: 'https://keyruu.de/keyruu_logo.png',
      type: 'Person',
      sameAs: [
          'https://www.linkedin.com/in/lucasrott/',
          'https://github/keyruu',
      ],
    }
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
    '@nuxt/image',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots',
    '@nuxtjs/apollo',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@pinia/nuxt',
    'nuxt-schema-org',
  ],
  ui: {
    icons: ["mdi", "simple-icons"]
  },
  colorMode: {
    preference: 'dark',
  },
  image: {
    domains: [
        'nocodb.keyruu.de',
    ]
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
      isCustomElement: tag => tag.startsWith('swiper-')
    }
  },
  runtimeConfig: {
    public: {
      nocodbUrl: process.env.NOCODB_URL!,
    }
  }
})
