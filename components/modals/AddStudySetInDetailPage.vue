<template>
  <modal
    name="study-set"
    :scrollable="true"
    :draggable="false"
    :click-to-close="false"
    :min-width="580"
    :width="600"
    :height="'auto'"
    class="text-white"
  >
    <div
      class="px-3 py-3 text-base font-bold text-title flex items-center justify-between"
    >
      <div>Thêm học phần</div>
      <div
        class="px-2 py-2 flex items-center justify-center hover:text-danger cursor-pointer rounded-full bg-black"
        @click="closeModal"
      >
        <svg-icon class="w-5 h-5" name="close" />
      </div>
    </div>
    <div class="px-5 py-5 space-y-5">
      <div class="w-full py-6 bg-black flex justify-center">
        <button
          class="flex items-center justify-center py-2 hover:text-warning transition space-x-1"
        >
          <svg-icon class="w-6 h-6" name="plus-small" />
          <span class="font-semibold">TẠO HỌC PHẦN MỚI</span>
        </button>
      </div>
      <v-popover :placement="'bottom-end'">
        <div
          class="px-3 py-2 flex space-x-1 items-center cursor-pointer transition font-medium"
        >
          <div class="mr-auto">Học phần của bạn</div>
          <svg-icon class="w-5 h-5" name="down-arrow" />
        </div>
        <div
          slot="popover"
          class="bg-white shadow-main leading-tight rounded-lg mt-1"
        >
          <div
            v-close-popover
            class="text-subtitle cursor-pointer hover:bg-hover rounded-lg flex items-center px-5 py-3 w-52 space-x-3"
          >
            <span class="text-title">a</span>
          </div>
        </div>
      </v-popover>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'AddStudySetInDetailPage',
  methods: {
    closeModal() {
      this.$modal.hide('study-set')
    },
  },
}
</script>
