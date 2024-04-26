<template>
  <section class="pokemon-detail">{{ pokemonId }} - {{ pokemonData }}</section>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const $route = useRoute();

const pokemonId = computed(() => {
  let { pokemonid } = $route.params;
  if (Array.isArray(pokemonid)) {
    pokemonid = pokemonid[0];
  }

  const receivedId = /\d*$/gm.exec(pokemonid);
  if (!receivedId) {
    throw new Error("Received pokemon isn`t valid");
  }

  return receivedId[0];
});

const { data: pokemonData } = await useFetch("/api/pokemon/:id", {
  key: "pokemons",
  method: "GET",
  params: {
    id: pokemonId,
  },
});
</script>

<style lang="scss" scoped>
.pokemon-detail {
  @apply max-w-[541px] mt-8 mx-auto;
}
</style>
