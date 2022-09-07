<template>
  <modal
    id="study-set"
    name="add-member"
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
      <div>Thêm thành viên</div>
      <div
        class="px-2 py-2 flex items-center justify-center hover:text-danger cursor-pointer rounded-full bg-black"
        @click="closeModal"
      >
        <svg-icon class="w-5 h-5" name="close" />
      </div>
    </div>
    <div class="px-5 py-5 space-y-7">
      <input
        ref="username"
        v-model.trim="params.username"
        class="flex-1 bg-subMain rounded px-4 text-title outline-none w-full"
        tabindex="1"
        placeholder="Nhập tên học viên"
      />
      <div class="text-center">
        <button class="bg-blue-600 font-semibold px-5 py-2 rounded">
          Thêm
        </button>
      </div>
      <div class="font-medium text-center">Danh sách thành viên lớp</div>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'AddMember',
  data() {
    return {
      params: {
        username: '',
      },
    }
  },
  methods: {
    closeModal() {
      this.$modal.hide('add-member')
    },
  },
}
</script>
