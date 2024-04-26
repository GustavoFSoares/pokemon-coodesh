// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-typed-router"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  alias: {
    "@interfaces": "./interfaces",
    "@stores": "./stores",
  },
});