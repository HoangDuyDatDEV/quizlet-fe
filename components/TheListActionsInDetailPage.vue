<template>
  <div id="list-action" class="flex items-center space-x-3">
    <div
      class="px-2 py-2 rounded-full border-gray-700 border-2 bg-black cursor-pointer hover:border-gray-800 hover:text-gray-500 transition"
      @click="addStudySet"
    >
      <svg-icon class="w-5 h-5" name="plus" />
    </div>
    <div
      class="px-2 py-2 rounded-full border-gray-700 border-2 bg-black cursor-pointer hover:border-gray-800 hover:text-gray-500 transition"
      @click="addMember"
    >
      <svg-icon class="w-5 h-5" name="user-plus" />
    </div>
    <div
      class="px-2 py-2 rounded-full border-gray-700 border-2 bg-black cursor-pointer hover:border-gray-800 hover:text-gray-500 transition"
      @click="addFolder"
    >
      <svg-icon class="w-5 h-5" name="folder" />
    </div>
    <v-popover trigger="hover" :placement="'bottom-start'">
      <div
        class="px-2 py-2 rounded-full border-gray-700 border-2 bg-black cursor-pointer hover:border-gray-800 hover:text-gray-500 hover:bg-warning transition"
      >
        <svg-icon class="w-5 h-5" name="horizontal-threedot" />
      </div>
      <div slot="popover" class="shadow-main leading-tight mt-2 bg-black">
        <div
          v-for="(item, index) in listAction"
          :key="`key-list-action-detail-${index}`"
          v-close-popover
          class="cursor-pointer transition flex items-center px-2 py-2 w-52 space-x-3 font-semibold text-xs"
          :class="item.class"
          @click="item.action"
        >
          <svg-icon class="w-5 h-5" :name="item.icon" />
          <span class="text-title">{{ item.name }}</span>
        </div>
      </div>
    </v-popover>
  </div>
</template>

<script>
export default {
  name: 'TheListActionsInDetailPage',
  data() {
    return {
      listAction: [
        {
          name: 'Sửa',
          icon: 'edit',
          class: 'text-white hover:bg-warning hover:text-black',
          action: () => {
            this.editClass()
          },
        },
        {
          name: 'Xóa',
          icon: 'recycle',
          class: 'text-danger hover:bg-warning hover:text-black',
          action: () => {
            this.delete()
          },
        },
        {
          name: 'Xóa mọi thành viên',
          icon: 'recycle',
          class: 'text-danger hover:bg-warning hover:text-black',
          action: () => {
            this.deleteAll()
          },
        },
      ],
    }
  },
  methods: {
    addStudySet() {
      this.$modal.show('study-set', {
        type: 'study-set',
      })
    },
    addMember() {
      this.$modal.show('add-member')
    },
    addFolder() {
      this.$modal.show('study-set', {
        type: 'folder',
      })
    },
    editClass() {
      this.$modal.show('add-class', {
        type: 'edit',
      })
    },
    delete() {},
    deleteAll() {},
  },
}
</script>
