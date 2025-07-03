import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: ['@clerk/nuxt', '@uploadthing/nuxt'],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  uploadthing: {
    routerPath: "~/server/uploadthing.ts",
  },
  app: {
    head: {
      title: 'Briefly Home Page',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300..900&display=swap'
        }
      ]
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});