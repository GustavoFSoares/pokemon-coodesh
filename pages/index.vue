<template>
  <h1>index page</h1>

  <PokemonsList />
</template>

<script lang="ts" setup>
import { usePokemonStore } from "@/stores/pokemon";

import PokemonsList from "@/partials/Index/PokemonsList.vue";

const pokemonStore = usePokemonStore();

const { data } = await useFetch("/api/pokemon", {
  key: "pokemons",
  method: "GET",
  query: {
    offset: pokemonStore.offset,
  },
});

onMounted(() => {
  if (!data.value) {
    return;
  }

  pokemonStore.sotrePokemons(data.value);
});
</script>
