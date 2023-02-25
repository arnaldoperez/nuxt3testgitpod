// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass'
      , '@mdi/font/css/materialdesignicons.min.css'
    ],
    build: {
      transpile: ['vuetify'],
    },
    modules: [
      // ...
      '@pinia/nuxt'
    ],
    vite: {
      define: {
        'process.env.DEBUG': false,
      },
    },
    imports: {
      dirs: ['./stores'],
    },
  
    pinia: {
      autoImports: ['defineStore', 'acceptHMRUpdate'],
    },
    server: {
      hmr: {
        protocol: 'wss',
        clientPort: 443,
      },
      proxy: {
        '/_nuxt': 'http://localhost:24678/_nuxt',
      }
    },
  })
  