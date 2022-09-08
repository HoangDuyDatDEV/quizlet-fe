<template>
  <modal
    id="delete-member"
    name="delete-member"
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
      <div>Xóa thành viên?</div>
      <div
        class="px-2 py-2 flex items-center justify-center cursor-pointer rounded-full bg-white text-danger"
        @click="closeModal"
      >
        <svg-icon class="w-5 h-5" name="close" />
      </div>
    </div>
    <div class="px-5 py-5 space-y-7">
      <div class="font-semibold">Danh sách thành viên</div>
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
          Xóa
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'DeleteMember',
  methods: {
    closeModal() {
      this.$modal.hide('delete-member')
    },
    beforeOpen(event) {},
  },
}
</script>
