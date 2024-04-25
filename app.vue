<template>
  <div class="app">
    <h1>pokedash</h1>
    <div v-if="data">
      <p v-for="(d, index) in data" :key="index">
        <span>{{ d.id }} - {{ d.name }} - {{ d.types }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AsyncData } from "./node_modules/nuxt/app";

interface IPokemon {
  types: string[];
  id: string;
  name: string;
  image: string;
}

const page = ref(1);
const { data } = await useFetch("/api/pokemon", {
  key: "pokemons",
  method: "GET",
});
</script>

<style lang="postcss" scoped>
.app {
  @apply bg-pokemon-type-fire;
}
</style>
