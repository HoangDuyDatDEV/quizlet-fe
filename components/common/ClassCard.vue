<template>
  <div class="bg-content space-y-3 rounded py-3 px-3 cursor-pointer">
    <div class="font-bold">{{ item.className }}</div>
    <div class="flex items-center space-x-2">
      <svg-icon class="w-5 h-5" name="home" />
      <span class="font-medium">{{ item.schoolName }}</span>
    </div>
    <div class="flex items-center space-x-2">
      <svg-icon class="w-5 h-5" name="document-text" />
      <span>{{ item.numberOfCourses }} học phần</span>
    </div>
    <div class="flex items-center space-x-2">
      <svg-icon class="w-5 h-5" name="user" />
      <span>{{ item.numberOfMembers }} thành viên</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassCard',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
