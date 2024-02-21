<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-1"></div>
        <div class="col-12 col-md-10">
        <h1 class="">{{ meal.strMeal }}</h1>
          <div class="row">
            <div class="col-12">
              <img
                :src="meal.strMealThumb"
                :alt="meal.strMeal"
                class="card-img-top img-fluid"
              />
              <div class="row py-2">
                <div class="col-12 col-md-4">
                  <p class="text-md-center">
                    <strong>Category : </strong> {{ meal.strCategory }}
                  </p>
                </div>
                <div class="col-12 col-md-4">
                  <p class="text-md-center">
                    <strong>Area : </strong> {{ meal.strArea }}
                  </p>
                </div>
                <div class="col-12 col-md-4">
                  <p class="text-md-center">
                    <strong>Tags : </strong> {{ meal.strTags }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12">
              <p class="mb-1"><strong>Description : </strong></p>
              <p class="text-justify">{{ meal.strInstructions }}</p>
            </div>
          </div>
          <div class="row mt-4">
            <p class="mb-1"><strong>Ingredients : </strong></p>
            <div class="col-6" v-for="(el, ind) of new Array(20)">
              <p v-if="meal[`strIngredient${ind + 1}`]">
                {{ meal[`strIngredient${ind + 1}`] }}
              </p>
            </div>
          </div>
          <div class="row mt-4">
            <p class="mb-1"><strong>Measures : </strong></p>
            <div class="col-6" v-for="(el, ind) of new Array(20)">
              <p v-if="meal[`strMeasure${ind + 1}`]">
                {{ meal[`strMeasure${ind + 1}`] }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-1"></div>
      </div>
      <div class="row">
        <div class="col-12 col-md-1"></div>
        <div class="col-12 col-md-10">
          <iframe
            width="100%"
            height="315"
            :src="
              'https://www.youtube.com/embed/' +
              youtubeUrl +
              '?autoplay=1'
            "
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col-12 col-md-1"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axiosClient from "../axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const meal = ref({});
const youtubeUrl = ref('');

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0];
    youtubeUrl.value = meal.value.strYoutube.match(/[?&]v=([^&]+)/)[1];
  });
});
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 992px) {
  .card-img-top{
    height: 500px;
    object-fit: cover;
  }
}
</style>
