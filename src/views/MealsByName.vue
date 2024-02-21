<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <input
          type="text"
          v-model="keyword"
          class="form-control"
          placeholder="Search for Meals"
          @change="searchMeals"
        />
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 col-md-4 col-lg-4 col-xl-3 mb-5" v-if="meals.length ===0">
        <p>Please search meal's name (Salmon)</p>
      </div>
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
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
 keyword.value = route.params.name;
 if(keyword.value){
  searchMeals();
 }
})
</script>

<style lang="scss" scoped>
p{
  color: rgba(0,0,0,.5);
}
</style>
