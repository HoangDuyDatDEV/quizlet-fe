<template>
  <modal
    name="add-folder"
    :scrollable="true"
    :draggable="false"
    :click-to-close="false"
    :min-width="580"
    :width="600"
    :height="'auto'"
    class="text-white"
    @opened="handleOpen"
  >
    <div
      class="px-3 py-3 text-base font-bold text-title flex items-center justify-between"
    >
      <div>Tạo thư mục mới</div>
      <div
        class="w-5 h-5 flex items-center justify-center hover:text-danger cursor-pointer"
        @click="closeModal"
      >
        <svg-icon class="w-5 h-5" name="close" />
      </div>
    </div>
    <div class="modal-content py-5 px-5 space-y-5 text-xs">
      <input
        ref="fullname"
        v-model.trim="params.fullname"
        class="flex-1 bg-subMain rounded px-4 text-title outline-none w-full"
        tabindex="1"
        placeholder="Nhập tên thư mục"
      />
      <input
        v-model.trim="params.description"
        class="flex-1 bg-subMain rounded px-4 text-title outline-none w-full"
        tabindex="1"
        placeholder="Nhập mô tả (tùy chọn)"
      />
      <div class="flex items-center justify-end space-x-5 text-xs">
        <div
          v-if="isActiveCreateButton"
          class="h-10 px-5 flex items-center font-medium text-title cursor-pointer rounded bg-blue-600"
          tabindex="3"
          @click="onSubmit"
        >
          Tạo thư mục
        </div>
        <div
          v-else
          class="h-10 px-5 flex items-center font-medium text-title cursor-pointer rounded"
          style="background: #586380"
          tabindex="3"
        >
          Tạo thư mục
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'AddFolder',
  data() {
    return {
      params: {
        fullname: '',
        description: '',
      },
    }
  },
  computed: {
    isActiveCreateButton() {
      return this.params.fullname && this.params.description
    },
  },
  methods: {
    closeModal() {
      this.$modal.hide('add-folder')
    },
    custom() {
      if (this.params.fullname.length) {
        return {
          on: ['input'],
        }
      }
      return { on: ['change'] }
    },
    handleOpen() {
      this.$refs.fullname.focus()
    },
    onSubmit() {
      alert('Tạo lơp thành công')
      this.closeModal()
    },
  },
}
</script>
