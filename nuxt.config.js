export default defineNuxtConfig({
  css: ["@/assets/css/roboto.css"],

  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_TOKEN,
        apiOptions: {
          region: "", // Set 'US" if your space is created in US region (EU default)
        },
      },
    ],
    "@nuxtjs/tailwindcss",
  ],

  compatibilityDate: "2025-04-16",
});
