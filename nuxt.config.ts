// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, 
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Aventurine888 | สล็อตพนันครบจบที่เดียว",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Aventurine888 | สล็อตพนันครบจบที่เดียว by magiclab",
        },
        { name: "keywords", content: "Aventurine, honkai, honkai star rail, honkai" },
        { name: "author", content: "MagicLab" },
        { name: "robots", content: "index, follow" },
        { name: "language", content: "Thailand" },
        { name: "theme-color", content: "#00000" },
        { name: "og:title", content: "Aventurine888 | สล็อตพนันครบจบที่เดียว" },
        { name: "og:description", content: "Aventurine สล็อตเว็บตรง แจกเครดิตฟรีทุกวัน" },
        { name: "og:image", content: "https://aventurine888.com/bg.jpg" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/icon.jpg",
        },
        {
          rel: "stylesheet",
          href: "https://<you fontawesome domain>/fa-pro-6.5.1/css/all.css"
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        }
      ],
      script: [
      ],
    },
  },
  css: [
    "~/assets/main.css"
  ],
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss"]
})