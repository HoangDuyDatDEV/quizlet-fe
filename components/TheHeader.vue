<template>
  <div class="flex px-7 border-subtitle border-b justify-between items-center">
    <div class="flex justify-between items-center space-x-8">
      <div class="cursor-pointer" @click="$router.push('/')">
        <svg-icon class="w-28 h-8" name="logo" />
      </div>
      <nuxt-link
        v-for="link in routerLink"
        :key="link.key"
        :to="link.url"
        class="font-medium relative py-5 hover-card-item"
      >
        {{ link.name }}
      </nuxt-link>
      <CreateListAction />
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
