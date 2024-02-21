<template>
  <div class="container-fluid p-0">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
</script>

<style scoped></style>
