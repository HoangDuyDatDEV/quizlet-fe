export default function ({ $axios, redirect, $config, app }, inject) {
  // $axios.onRequest(() => {
  //   if (app.$auth.loggedIn) {
  //     const token = app.$auth.strategy.token.get()
  //     $axios.setToken(token)
  //   }
  // })
  const baseApi = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      },
    },
  })
  baseApi.setBaseURL($config.baseURL)
  baseApi.onResponse((response) => response.data)
  // baseApi.onRequest(() => {
  //   if (app.$auth.loggedIn) {
  //     const token = app.$auth.strategy.token.get()
  //     baseApi.setToken(token)
  //   }
  // })
  inject('BASEAPI', baseApi)
}
