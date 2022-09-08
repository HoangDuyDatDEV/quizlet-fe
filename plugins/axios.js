export default function ({ $axios, redirect, $config, app }, inject) {
  $axios.onRequest(() => {
    if (app.$auth.loggedIn) {
      const token = app.$auth.strategy.token.get()
      $axios.setToken(token)
    }
  })

  const ccvcApi = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      },
    },
  })
  ccvcApi.setBaseURL($config.domainIOC)

  const commonApi = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      },
    },
  })
  commonApi.setBaseURL($config.domainCommon)
  commonApi.onResponse((response) => response.data)
  commonApi.onRequest(() => {
    if (app.$auth.loggedIn) {
      const token = app.$auth.strategy.token.get()
      commonApi.setToken(token)
    }
  })

  const baseApi = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      },
    },
  })
  baseApi.setBaseURL($config.baseURL)
  baseApi.onResponse((response) => response.data)
  baseApi.onRequest(() => {
    if (app.$auth.loggedIn) {
      const token = app.$auth.strategy.token.get()
      baseApi.setToken(token)
    }
  })
  const apiNotification = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      },
    },
  })
  apiNotification.setBaseURL($config.domainNotification)
  apiNotification.onResponse((response) => response.data)
  apiNotification.onRequest(() => {
    if (app.$auth.loggedIn) {
      const token = app.$auth.strategy.token.get()
      apiNotification.setToken(token)
    }
  })

  const cmsApi = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      },
    },
  })
  cmsApi.setBaseURL($config.domainNotice)
  cmsApi.onResponse((response) => response.data)
  // noticeApi.onRequest(() => {
  //   if (app.$auth.loggedIn) {
  //     const token = app.$auth.strategy.token.get()
  //     noticeApi.setToken(token)
  //   }
  // })
  inject('BASEAPI', baseApi)
  inject('CCVC', ccvcApi)
  inject('COMMON', commonApi)
  inject('APINOTIFICATION', apiNotification)
  inject('CMSAPI', cmsApi)
}
