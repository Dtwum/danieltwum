import 'dotenv/config'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Daniel Owusu Twum | Product Owner',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {  name: 'theme-color', content: '#6610f2'},
      {
        hid: 'description',
        name: 'description',
        content: `Product Owner and an inspirational mentor with over ${
          new Date().getFullYear() - 2013
        } years of experience in software development.`,
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Daniel Owusu Twum' },
      {
        name: 'keywords',
        content:
          'Daniel Owusu Twum, Twum, Owusu, Twum Daniel, Twum Daniel Owusu, Daniel Twum Owusu, Owusu Daniel, Owusu , Owusu Twum Daniel, Daniel, Product Owner, Enyata, Mikrotik, Agile, SDLC, Routering, Networking, Hotspot, Ghana, Enyata Ghana, Bridge technologies, Computer Science, Physics, Mathematics, Statistics, Software, Engineer, Business analyst, Dtwum, Uncledan, Chef Gautey, Career Coaching, Coaching, MC, Freelancing',
      },
      { property: 'og:url', content: 'https://isaacanane.com' },
      { name: 'og:type', content: 'website' },
      {
        name: 'og:title',
        content: 'Daniel Owusu Twum  — Product Owner  + Network Engineer',
      },
      {
        name: 'og:image',
        content: 'https://isaacanane.com/d.jpeg',
      },
      {
        name: 'og:descripition',
        content:
          "Hi, I'm Daniel Owusu Twum. I am a Product Owner and an IT professional with over 5 years of experience in software development.",
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:domain',
        content: 'https://isaacanane.com',
      },
      {
        name: 'twitter:url',
        content: 'https://isaacanane.com',
      },
      {
        name: 'twitter:title',
        content: 'Daniel Twum Product Owner / Network engineer — Agile + Mikrotik',
      },
      {
        name: 'twitter:image',
        content: 'https://isaacanane.com/___a.jpeg',
      },
      {
        name: 'twitter:descripition',
        content:
          "Hi, Daniel Owusu Twum. I am a Product owner and an IT professional with over 5 years of experience in software development.",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/daniel.ico' },
      {
        rel: 'apple-touch-icon',
        size: '180x180',
        href: 'https://isaacanane.com',
      },
      { rel: 'canonical', href: 'https://isaacanane.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'stylesheet',
        href: 'https://unicons.iconscout.com/release/v3.0.6/css/line.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap',
      },
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
        body: true,
        integrity:
          'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM',
        crossorigin: 'anonymous',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/static/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/google-analytics',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    EMAIL_KEY: process.env.EMAIL_KEY,
    EMAIL_SERVICE: process.env.EMAIL_SERVICE,
    EMAIL_TEMPLATE: process.env.EMAIL_TEMPLATE,
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
}
