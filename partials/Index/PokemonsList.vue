<template>
  <section>
    <h1>Pokémons</h1>

    <ul class="pokemons__list">
      <PokemonItem
        v-for="pokemon in pokemonsList"
        :key="pokemon.id"
        v-bind="pokemon"
      />
    </ul>
  </section>
</template>

<script setup lang="ts">
import { usePokemonStore } from "@/stores/pokemon";
import PokemonItem from "./PokemonItem.vue";
const pokemonStore = usePokemonStore();

const pokemonsList = computed(() => {
  return pokemonStore.pokemons;
});
</script>

<style lang="scss" scoped>
.pokemons {
  &__list {
    @apply grid grid-cols-5 gap-x-6 gap-y-4;
  }
}
</style>
