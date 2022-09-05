<template>
  <div class="w-full">
    <div class="w-4/5 my-0 mx-auto py-5 space-y-5">
      <div class="font-medium text-xl">Lớp học của bạn:</div>
      <div class="flex space-x-3 items-center">
        <svg-icon class="w-6 h-6" name="user" />
        <span>02 lớp học được tạo</span>
      </div>
      <div class="w-full flex flex-wrap relative">
        <ClassCard
          v-for="(card, index) in dataCard"
          :key="`class-${index}`"
          class="relative hover-card-item mr-3 my-2"
          :item="card"
          style="width: 24%"
        />
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
          numberOfMembers: 4,
        },
        {
          className: 'Java',
          schoolName: 'Đại học Công nghiệp Hà Nội',
          numberOfCourses: 2,
          numberOfMembers: 4,
        },
        {
          className: 'Java',
          schoolName: 'Đại học Công nghệ, ĐHQGHN',
          numberOfCourses: 2,
          numberOfMembers: 4,
        },
        {
          className: 'JavaScript',
          schoolName: 'Đại học Bách Khoa Hà Nội',
          numberOfCourses: 2,
          numberOfMembers: 4,
        },
        {
          className: 'JavaScript',
          schoolName: 'Đại học Bách Khoa Hà Nội',
          numberOfCourses: 2,
          numberOfMembers: 4,
        },
      ],
    }
  },
}
</script>
<style lang="scss"></style>
