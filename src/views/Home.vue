<template>
  <div class="container">
    
    <div class="row mt-5">
      <div class="col-12 col-md-4 col-lg-4 col-xl-3 mb-5" v-for="meal of ingredients" :key="meal.idMeal">
       <MealsItem :meal="meal"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axios'
import MealsItem from "../components/MealsItem.vue";


const ingredients = ref([])
  
  onMounted(() => {
    for (let i = 0; i < 10; i++) {
      axiosClient.get("random.php").then(({data})  => ingredients.value.push(data.meals[0]))
    }
  })

</script>

<style lang="scss" scoped>

</style>