<template>
  <modal
    id="study-set"
    name="study-set"
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
      class="px-3 py-3 text-base font-bold text-title flex items-center justify-between"
    >
      <div>{{ type === 'study-set' ? 'Thêm học phần' : 'Thêm thư mục' }}</div>
      <div
        class="px-2 py-2 flex items-center justify-center hover:text-danger cursor-pointer rounded-full bg-black"
        @click="closeModal"
      >
        <svg-icon class="w-5 h-5" name="close" />
      </div>
    </div>
    <div class="px-5 py-5 space-y-7">
      <div class="w-full py-6 bg-black flex justify-center">
        <button
          v-if="type === 'study-set'"
          class="flex items-center justify-center py-2 hover:text-warning transition space-x-1"
          @click="toCreateSetPage"
        >
          <svg-icon class="w-6 h-6" name="plus-small" />
          <span class="font-semibold">TẠO HỌC PHẦN MỚI</span>
        </button>
        <button
          v-else
          class="flex items-center justify-center py-2 hover:text-warning transition space-x-1"
          @click="toCreateFolder"
        >
          <svg-icon class="w-6 h-6" name="plus-small" />
          <span class="font-semibold">TẠO THƯ MỤC MỚI</span>
        </button>
      </div>
      <v-popover v-if="type === 'study-set'" :placement="'bottom-end'">
        <div
          class="px-3 py-2 flex space-x-1 items-center justify-between cursor-pointer font-medium bg-black text-success text-sm hover:text-warning transition w-60"
        >
          <div class="mr-5">{{ studySetStateOption.label }}</div>
          <svg-icon class="w-3 h-3" name="down-arrow" />
        </div>
        <div slot="popover" class="bg-white rounded-lg">
          <div
            v-for="item in listStudySetOption"
            :key="item.value"
            v-close-popover
            class="text-xs text-white font-semibold hover:text-black hover:bg-white transition cursor-pointer flex items-center px-5 py-2 bg-black w-60"
            @click="showStudySetOption(item)"
          >
            <div class="text-title">{{ item.label }}</div>
          </div>
        </div>
      </v-popover>
      <div v-if="type === 'study-set'">
        <div
          v-if="studySetStateOption.value === 'your_study_set'"
          class="space-y-3"
        >
          <SubCardItem
            v-for="item in myStudySet.childClass"
            :key="item.id"
            :item="item"
          />
        </div>
        <div v-if="studySetStateOption.value === 'study_set_in_folder'">
          <div
            v-for="item in listStudySetInClass"
            :key="item.folderId"
            class="space-y-2"
          >
            <div class="font-semibold mt-3">{{ item.name }}</div>
            <SubCardItem
              v-for="el in item.childClass"
              :key="el.id"
              :item="el"
            />
          </div>
        </div>
        <div
          v-if="studySetStateOption.value === 'pass_study_set'"
          class="space-y-3"
        >
          <div
            v-for="item in listStudySetInClass"
            :key="item.folderId"
            class="space-y-3"
          >
            <SubCardItem
              v-for="el in item.childClass"
              :key="el.id"
              :item="el"
            />
          </div>
        </div>
      </div>
      <div v-if="type === 'folder'" class="space-y-3">
        <SubCardItem
          v-for="el in listFolderInClass"
          :key="el.folderId"
          :item="el"
        />
      </div>
    </div>
  </modal>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AddStudySetInDetailPage',
  data() {
    return {
      type: '',
      listStudySetOption: [
        {
          label: 'Học phần của bạn',
          value: 'your_study_set',
        },
        {
          label: 'Học phần trong thư mục',
          value: 'study_set_in_folder',
        },
        {
          label: 'Học phần đã học',
          value: 'pass_study_set',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      studySetStateOption: 'class/studySetStateOption',
      listStudySetInClass: 'class/listStudySetInClass',
      listFolderInClass: 'folder/listFolderInClass',
    }),
    myStudySet() {
      return (
        this.listStudySetInClass.find((item) =>
          item.childClass.filter((el) => el.isOwner === true)
        ) || []
      )
    },
  },
  methods: {
    closeModal() {
      this.$modal.hide('study-set')
      this.resetParam()
    },
    resetParam() {
      this.type = ''
    },
    showStudySetOption(label) {
      this.$store.commit('class/setStudySetStateOption', label)
    },
    toCreateSetPage() {
      this.$router.push('/create-set')
      this.closeModal()
    },
    toCreateFolder() {
      this.$modal.show('add-folder')
      this.$modal.hide('study-set')
    },
    beforeOpen(event) {
      if (event?.params?.type) {
        this.type = event.params.type
      }
    },
  },
}
</script>
<style lang="scss">
.tooltip {
  &.popover {
    &.open {
      z-index: 999 !important;
    }
  }
}
</style>
