<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-12 col-md-4 col-lg-4 col-xl-3 mb-5" v-for="meal of meals" :key="meal.idMeal">
       <MealsItem :meal="meal"/>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealsItem from "../components/MealsItem.vue";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>

<style lang="scss" scoped></style>
