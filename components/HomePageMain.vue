<template>
  <div class="w-full">
    <div class="w-4/5 my-0 mx-auto py-5 space-y-5">
      <div class="font-medium text-xl">Lớp học của bạn:</div>
      <div class="flex space-x-3 items-center">
        <svg-icon class="w-6 h-6" name="user" />
        <span>02 lớp học được tạo</span>
      </div>
      <div class="w-full flex flex-wrap relative">
        <div v-for="(card, index) in dataCard" :key="`class-${index}`" class="relative hover-card-item mr-4 my-2"
          style="width: 24%">
          <div class="bg-content space-y-3 rounded py-3 px-3 cursor-pointer hover:bg-gray-500 transition">
            <div class="font-bold">{{ card.className }}</div>
            <div class="flex items-center space-x-2">
              <svg-icon class="w-5 h-5" name="home" />
              <span class="font-medium">{{ card.schoolName }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg-icon class="w-5 h-5" name="document-text" />
              <span>{{ card.numberOfCourses }} học phần</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg-icon class="w-5 h-5" name="user" />
              <span>{{ card.numberOfMembers }} thành viên</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePageMain',
  data() {
    return {
      dataCard: [
        {
          className: 'Python',
          schoolName: 'Đại học Công nghiệp Hà Nội',
          numberOfCourses: 2,
          numberOfMembers: 4
        },
        {
          className: 'Java',
          schoolName: 'Đại học Công nghiệp Hà Nội',
          numberOfCourses: 2,
          numberOfMembers: 4
        },
        {
          className: 'Java',
          schoolName: 'Đại học Công nghệ, ĐHQGHN',
          numberOfCourses: 2,
          numberOfMembers: 4
        },
        {
          className: 'JavaScript',
          schoolName: 'Đại học Bách Khoa Hà Nội',
          numberOfCourses: 2,
          numberOfMembers: 4
        },
        {
          className: 'JavaScript',
          schoolName: 'Đại học Bách Khoa Hà Nội',
          numberOfCourses: 2,
          numberOfMembers: 4
        },
      ]
    }
  }
}
</script>
<style lang="scss">
.hover-card-item::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 8px;
  background: #ffffff;
  bottom: 0;
  left: 0;
  z-index: 10;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
