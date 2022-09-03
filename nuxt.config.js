export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  server: {
    port: 8080,
  },

  publicRuntimeConfig: {
    appName: process.env.APP_NAME || 'Hệ thống nhận dạng HAS',
  },
  privateRuntimeConfig: {},

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.APP_NAME,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      class: 'font-body text-base text-white',
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['ant-design-vue/dist/antd.css', '@/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/ant-design-vue.js', '~/plugins/vue-tooltip.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/svg-sprite',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  googleFonts: {
    download: true,
    families: {
      Poppins: [400, 500, 700],
    },
  },
}
