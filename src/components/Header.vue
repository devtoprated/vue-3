<template>
  <div>
    <header class="bg-light shadow mb-3">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="nav-link p-2" to="/"
                >Home</router-link
              >
        <button
          class="navbar-toggler ms-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link p-2" :to="{name: 'byName'}">Search Meals</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link p-2" :to="{name: 'byLetter'}">Meals By Letter</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link p-2" :to="{name: 'ingredients'}">Meals By Ingredients</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>