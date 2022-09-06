<template>
  <div class="w-full">
    <div class="w-2/3 my-0 mx-auto py-10 space-y-5">
      <div class="flex items-center w-full justify-between">
        <div class="font-bold text-3xl flex space-x-2 items-center">
          <svg-icon class="w-10 h-10" name="double-user" />
          <div>Python</div>
        </div>
        <div class="flex items-center space-x-3">
          <div
            class="px-2 py-2 rounded-full border-gray-700 border-2 bg-black cursor-pointer hover:border-gray-800 hover:text-gray-500 transition"
            @click="addStudySet"
          >
            <svg-icon class="w-5 h-5" name="plus" />
          </div>
          <div
            class="px-2 py-2 rounded-full border-gray-700 border-2 bg-black cursor-pointer hover:border-gray-800 hover:text-gray-500 transition"
          >
            <svg-icon class="w-5 h-5" name="user-plus" />
          </div>
          <div
            class="px-2 py-2 rounded-full border-gray-700 border-2 bg-black cursor-pointer hover:border-gray-800 hover:text-gray-500 transition"
          >
            <svg-icon class="w-5 h-5" name="folder" />
          </div>
          <div
            class="px-2 py-2 rounded-full border-gray-700 border-2 bg-black cursor-pointer hover:border-gray-800 hover:text-gray-500 hover:bg-warning transition"
          >
            <svg-icon class="w-5 h-5" name="horizontal-threedot" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailClass',
  methods: {
    addStudySet() {
      this.$modal.show('study-set')
    },
  },
}
</script>
