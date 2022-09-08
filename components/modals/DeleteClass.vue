<template>
  <modal
    id="delete-class"
    name="delete-class"
    :scrollable="true"
    :draggable="false"
    :click-to-close="false"
    :min-width="580"
    :width="600"
    :height="'auto'"
    class="text-white"
    @before-open="beforeOpen"
  >
    <div
      class="px-3 py-3 text-base font-bold text-title flex items-center justify-between bg-danger"
    >
      <div>Xóa lớp này?</div>
      <div
        class="px-2 py-2 flex items-center justify-center cursor-pointer rounded-full bg-white text-danger"
        @click="closeModal"
      >
        <svg-icon class="w-5 h-5" name="close" />
      </div>
    </div>
    <div class="px-5 py-5 space-y-7">
      <div class="text-3xl font-semibold">Python</div>
      <div>
        Bạn chuẩn bị xoá lớp này. Không ai có thể truy cập vào lớp này nữa.
      </div>
      <div class="font-semibold">
        Bạn có chắc chắn không? Bạn sẽ không được hoàn tác.
      </div>
      <div class="w-full flex items-center justify-evenly">
        <button
          class="px-10 py-5 bg-subtitle rounded font-semibold text-xl"
          @click="closeModal"
        >
          Hủy
        </button>
        <button class="px-10 py-5 bg-danger rounded font-semibold text-xl">
          Xóa lớp
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'DeleteClass',
  methods: {
    closeModal() {
      this.$modal.hide('delete-class')
    },
    beforeOpen(event) {},
  },
}
</script>
