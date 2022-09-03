<template>
  <div
    class="flex px-7 py-5 border-subtitle border-b justify-between items-center"
  >
    <div class="flex justify-between items-center space-x-8">
      <div class="cursor-pointer" @click="$router.push('/')">
        <svg-icon class="w-28 h-8" name="logo" />
      </div>
      <nuxt-link
        v-for="link in routerLink"
        :key="link.key"
        :to="link.url"
        class="font-medium"
      >
        {{ link.name }}
      </nuxt-link>
      <div
        class="px-3 py-2 flex space-x-1 items-center cursor-pointer bg-blue-600 rounded hover:bg-blue-700 transition font-medium"
      >
        <span>Tạo</span>
        <svg-icon class="w-5 h-5" name="down-arrow" />
      </div>
    </div>
    <div class="flex space-x-3 items-center">
      <TheSearch />
      <TheInformation />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TheHeader',
  computed: {
    ...mapGetters({
      routerLink: 'settings/routerLink',
    }),
  },
}
</script>
