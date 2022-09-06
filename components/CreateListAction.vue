<template>
  <v-popover :placement="'bottom-end'">
    <div
      class="px-3 py-2 flex space-x-1 items-center cursor-pointer bg-blue-600 rounded hover:bg-blue-700 transition font-medium"
    >
      <div class="mr-auto">Tạo</div>
      <svg-icon class="w-5 h-5" name="down-arrow" />
    </div>
    <div
      slot="popover"
      class="bg-white shadow-main leading-tight rounded-lg mt-1"
    >
      <div
        v-for="action in listAction"
        :key="action.type"
        v-close-popover
        class="text-subtitle cursor-pointer hover:bg-hover rounded-lg flex items-center px-5 py-3 w-52 space-x-3"
        @click="action.action"
      >
        <svg-icon class="w-6 h-6" :name="action.icon" />
        <span class="text-title">{{ action.name }}</span>
      </div>
    </div>
  </v-popover>
</template>

<script>
export default {
  name: 'CreateListAction',
  data() {
    return {
      listAction: [
        {
          type: 'class',
          name: 'Lớp học',
          icon: 'double-user',
          action: () => {
            this.addClass()
          },
        },
        {
          type: 'studySet',
          name: 'Học phần',
          icon: 'copy',
          action: () => {
            this.createStudySet()
          },
        },
        {
          type: 'folder',
          name: 'Thư mục',
          icon: 'folder',
          action: () => {
            this.addFolder()
          },
        },
      ],
      typeAction: 'class',
    }
  },
  methods: {
    addClass() {
      this.$modal.show('add-class')
    },
    createStudySet() {
      this.$router.push('/create-set')
    },
    addFolder() {
      this.$modal.show('add-folder')
    },
  },
}
</script>
