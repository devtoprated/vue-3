<template>
  <div class="container">
    <div class="mt-3">
      <div class="row">
        <router-link :to="{name: 'byLetter', params: {letter}}" class="col-2 col-md-1 my-1 text-center" v-for="letter of letters">{{ letter }}</router-link>
      </div>
    </div>
    <div class="row mt-5">
    <div class="col-12 col-md-4 col-lg-4 col-xl-3 mb-5" v-if="meals.length === 0">
       <p>Please Click on any Letter</p>
      </div>
      <div class="col-12 col-md-4 col-lg-4 col-xl-3 mb-5" v-for="meal of meals" :key="meal.idMeal">
       <MealsItem :meal="meal"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { watch, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealsItem from "../components/MealsItem.vue";

const route = useRoute();

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
})
const meals = computed(() => store.state.mealsByLetter);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
})
</script>

<style lang="scss" scoped>
a{
  color: rgba(0,0,0,.5);
  text-decoration: none;
}
p{
  color: rgba(0,0,0,.5);
}
.router-link-active {
  color: #eb6418;
    font-size: 20px;
    font-weight: 500;
    box-shadow: 0 0 10px 0 #eb6418;
    border-radius: 20px;
}
</style>