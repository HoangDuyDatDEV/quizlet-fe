<template>
  <v-popover :placement="'bottom-start'">
    <div
      class="px-3 py-3 flex space-x-1 items-center cursor-pointer bg-content rounded-full transition font-medium"
    >
      <div class="mr-auto">NA</div>
    </div>
    <div
      slot="popover"
      class="bg-white shadow-main leading-tight rounded-lg mt-1"
    >
      <div
        v-close-popover
        class="text-subtitle cursor-pointer hover:bg-hover rounded-lg flex items-center px-5 py-3 w-52 space-x-3"
        @click="logout"
      >
        <svg-icon class="w-6 h-6" name="logout" />
        <span class="text-title">Đăng xuất</span>
      </div>
    </div>
  </v-popover>
</template>

<script>
export default {
  name: 'TheInformation',
  methods: {
    logout() {
      this.$router.push('/login')
    },
  },
}
</script>
