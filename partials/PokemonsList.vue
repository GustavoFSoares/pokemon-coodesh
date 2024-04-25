<template>
  <section>
    <h1>Pokémons</h1>

    <ul>
      <li v-for="pokemon in pokemonsList" :key="pokemon.id">
        {{ pokemon.id }} - {{ pokemon.name }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { usePokemonStore } from "@/stores/pokemon";
const pokemonStore = usePokemonStore();

const pokemonsList = computed(() => {
  return pokemonStore.pokemons;
});
</script>
