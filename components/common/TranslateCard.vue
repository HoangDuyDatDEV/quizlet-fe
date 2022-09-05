<template>
  <div class="w-full bg-content rounded">
    <div class="w-full" style="border-bottom: 2px solid #0a092d">
      <div class="flex justify-between items-center px-3 py-3">
        <div class="font-semibold">{{ item }}</div>
        <div
          class="cursor-pointer hover:text-warning transition"
          @click="removeCard"
        >
          <svg-icon class="w-5 h-5" name="recycle" />
        </div>
      </div>
    </div>
    <div class="py-10 px-3 flex space-x-10">
      <div class="w-full space-y-1">
        <input type="text" class="input-create-set w-full" />
        <label class="font-semibold text-sm text-gray-500">THUẬT NGỮ</label>
      </div>
      <div class="w-full space-y-1">
        <input type="text" class="input-create-set w-full" />
        <label class="font-semibold text-sm text-gray-500">ĐỊNH NGHĨA</label>
      </div>
      <div
        class="border border-dashed px-10 py-3 hover:text-warning transition cursor-pointer"
      >
        <div>
          <svg-icon class="w-5 h-5" name="picture" />
        </div>
        <span>Hình ảnh</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TranslateCard',
  props: {
    item: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapGetters({
      listCardStudySetAdd: 'card/listCardStudySetAdd',
    }),
  },
  methods: {
    removeCard() {
      const rs = this.listCardStudySetAdd - 1
      this.$store.commit('card/setListCardStudySetAdd', rs)
    },
  },
}
</script>
