<template>
  <div id="create-set" class="w-3/4 mx-auto my-0 py-14 space-y-5">
    <div class="flex w-full items-center justify-between mb-20">
      <div class="text-xl font-semibold">Tạo học phần mới</div>
      <div
        class="px-3 py-2 bg-blue-600 cursor-pointer hover:bg-blue-700 transition rounded"
      >
        Tạo
      </div>
    </div>
    <div class="w-1/2 space-y-5">
      <input
        type="text"
        class="w-full input-create-set"
        placeholder="Nhập tiêu đề, ví dụ 'Sinh học - Chương 22:Tiến hóa'"
      />
      <input
        type="text"
        class="w-full input-create-set"
        placeholder="Thêm mô tả..."
      />
    </div>
    <div class="font-semibold flex items-center justify-end space-x-5">
      <div class="text-right">
        <div>Hiển thị với mọi người</div>
        <div class="text-indigo-600 hover:text-brand transition cursor-pointer">
          Thay đổi
        </div>
      </div>
      <div class="text-right">
        <div>Chỉ tôi có quyền chỉnh sửa</div>
        <div class="text-indigo-600 hover:text-brand transition cursor-pointer">
          Thay đổi
        </div>
      </div>
    </div>
    <div class="space-y-5">
      <TranslateCard
        v-for="(item, index) in listCardStudySetAdd"
        :key="`study-set-${index}`"
        :item="index + 1"
      />
      <div
        class="w-full bg-content rounded font-semibold py-10 cursor-pointer hover:text-warning transition flex justify-center"
        @click="addCard"
      >
        <button class="flex items-center justify-center py-2">
          <svg-icon class="w-6 h-6" name="plus-small" />
          <span class="font-semibold">Thêm thẻ</span>
        </button>
      </div>
    </div>
    <div class="w-full text-right">
      <button
        class="bg-blue-600 hover:bg-blue-700 transition rounded py-5 px-7"
      >
        Tạo
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CreateSet',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      listCardStudySetAdd: 'card/listCardStudySetAdd',
    }),
  },
  methods: {
    addCard() {
      const rs = this.listCardStudySetAdd + 1
      this.$store.commit('card/setListCardStudySetAdd', rs)
    },
  },
}
</script>
<style lang="scss">
.input-create-set {
  background: none;
  padding: 12px 0;
  border-bottom: 3px solid #ffffff;
}
.input-create-set::placeholder {
  font-weight: 500;
}
.input-create-set:focus {
  border-bottom: 3px solid #ffcd1f;
  animation: changeBorderColor 0.75s;
}
@keyframes changeBorderColor {
  from {
    border-bottom: 3px solid #ffffff;
  }
  to {
    border-bottom: 3px solid #ffcd1f;
  }
}
</style>
