// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // $production: {
  //   routeRules: {
  //     '/**': { isr: true }
  //   }
  // },
  // $development: {
  //   //
  // }
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    superSecretThing: '123456',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
      users: '/api/users',
    }
  },
  vue: {
    propsDestructure: true,
  },
})
