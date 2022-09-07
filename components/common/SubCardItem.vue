<template>
  <div class="w-full bg-black px-7 py-7 flex justify-between items-center">
    <div>
      <div class="font-semibold text-xl">{{ item.name }}</div>
      <div v-if="item.isInMyClass && item.type === 1">
        <div
          v-if="!item.isCanEdit"
          class="text-sm text-success hover:text-warning transition cursor-pointer font-semibold"
        >
          Cho phép lớp chỉnh sửa
        </div>
        <div v-else class="text-sm font-semibold text-subtitle">
          Lớp có thể chỉnh sửa
        </div>
      </div>
    </div>
    <div
      v-if="item.isInMyClass"
      class="text-black cursor-pointer px-3 py-2 border-gray-700 border-2 rounded bg-warning"
    >
      <svg-icon class="w-5 h-5" name="minus" />
    </div>
    <div
      v-else
      class="text-success cursor-pointer px-3 py-2 border-gray-700 border-2 rounded hover:text-warning"
    >
      <svg-icon class="w-5 h-5" name="plus" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubCardItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
