<template>
  <div class="card border shadow rounded">
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ meal.strMeal }}</h5>
      <p class="card-text truncate-text">{{ meal.strInstructions }}</p>
      <div class="row align-items-center">
        <div class="col-6">
          <youtube-button :href="meal.strYoutube" />
        </div>
        <div class="col-6 text-end">
          <router-link
            :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
            class="btn btn-outline-secondary text-right"
            >View</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";
const { meal } = defineProps({
  meal: Object,
});
</script>

<style lang="scss" scoped>

</style>
