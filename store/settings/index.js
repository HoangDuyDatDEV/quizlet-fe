export const state = () => ({
  routerLink: [
    {
      key: 'homePage',
      name: 'Trang chủ',
      url: '/',
      child: [],
    },
    {
      key: 'myLib',
      name: 'Thư viện của bạn',
      url: '/my-library',
      child: [],
    },
  ],
})

export const mutations = {}

export const actions = {}

export const getters = {
  routerLink(state) {
    return state.routerLink
  },
}
