// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-typed-router",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Mulish: [400, 600, 700],
        },
      },
    ],
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  alias: {
    "@interfaces": "./interfaces",
    "@stores": "./stores",
  },
});
