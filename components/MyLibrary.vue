<template>
  <div>
    <div class="text-2xl font-semibold mb-7">Thư viện của bạn</div>
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="Các học phần">
        <CardItem />
      </a-tab-pane>
      <a-tab-pane key="2" tab="Thành viên">
        <CardItem />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  name: 'MyLibrary',
  data() {
    return {}
  },
  methods: {},
}
</script>
