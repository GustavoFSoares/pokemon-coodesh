<template>
  <ul class="pokemons-list">
    <PokemonItem
      v-for="pokemon in pokemonsList"
      :key="pokemon.id"
      v-bind="pokemon"
    />
  </ul>
</template>

<script lang="ts" setup>
import { usePokemonStore } from "@/stores/pokemon";

import PokemonItem from "./PokemonItem.vue";
const pokemonStore = usePokemonStore();

const pokemonsList = computed(() => pokemonStore.filteredPokemons);
</script>

<style lang="scss" scoped>
.pokemons-list {
  @apply grid gap-x-6 gap-y-4 pb-3;

  @apply grid-cols-2;
  @apply md:grid-cols-4;
  @apply lg:grid-cols-5;
}
</style>
