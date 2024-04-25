import { defineStore } from "pinia";

import type { PokemonsList } from "@interfaces/PokemonsInterface";

export const usePokemonStore = defineStore({
  id: "pokemons",
  state: () => ({
    pokemons: [] as PokemonsList,
  }),
  getters: {
    offset(state): number {
      return state.pokemons.length;
    },
  },
  actions: {
    sotrePokemons(pokemons: PokemonsList) {
      this.pokemons = pokemons;
    },
  },
});
