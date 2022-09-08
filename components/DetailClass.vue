<template>
  <div class="w-full">
    <div class="w-2/3 my-0 mx-auto py-10 space-y-5">
      <div class="flex items-center w-full justify-between">
        <div class="font-bold text-3xl flex space-x-2 items-center">
          <svg-icon class="w-10 h-10" name="double-user" />
          <div>Python</div>
        </div>
        <TheListActionsInDetailPage />
      </div>
      <MyLibrary/>
    </div>
  </div>
</template>

<script>
export default {
    name: "DetailClass",
}
</script>
