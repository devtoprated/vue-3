<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Ingredients</h1>
        <input
          type="text"
          v-model="keyword"
          class="form-control shadow"
          placeholder="Search for Ingredients"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div v-for="ingredient of computedIngredients" :key="ingredient.idIngredient" class="shadow bg-light p-4 my-3 rounded">
          <router-link :to="{name: 'byIngredient', params: {ingredient: ingredient.strIngredient}}"><strong>{{ ingredient.strIngredient }}</strong></router-link>
          <p class="text-justify">{{ ingredient.strDescription }}</p>
        </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import axiosClient from '../axios';
import { onMounted, ref } from 'vue';

const keyword = ref('');
const ingredients = ref([]);

const computedIngredients = computed(() => {
  if( !computedIngredients) return ingredients;
  return ingredients.value.filter((i) => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()));
})
onMounted(() => {
  axiosClient.get("list.php?i=list").then(({data})  => {
    ingredients.value = data.meals;
  })
})

</script>

<style lang="scss" scoped>

</style>