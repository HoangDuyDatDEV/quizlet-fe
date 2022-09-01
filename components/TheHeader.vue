<template>
  <div
    class="flex px-7 py-5 border-subtitle border-b justify-between items-center"
  >
    <div class="flex justify-between items-center">
      <div class="cursor-pointer" @click="$router.push('/')">
        <svg-icon class="w-28 h-8" name="logo" />
      </div>
    </div>
    <div>Bên kia</div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>
