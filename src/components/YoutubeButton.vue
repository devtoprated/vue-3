<template>
  <div>
    <a :href="href" target="_blank" class="btn text-danger"><i class="fa fa-youtube-play" style="font-size:48px;"></i></a>
  </div>
</template>

<script setup>
  const props = defineProps({
    href: String
  })
</script>

<style lang="scss" scoped>

</style>