import { defineStore } from "pinia";

import type { PokemonsList } from "@interfaces/PokemonsInterface";

export const usePokemonStore = defineStore({
  id: "pokemons",
  state: () => ({
    pokemons: [] as PokemonsList,
    search: null as string | null,
  }),
  getters: {
    offset(state): number {
      return state.pokemons.length;
    },
    filteredPokemons(state) {
      if (!state.search) {
        return state.pokemons;
      }

      return state.pokemons.filter((pokemon) => {
        return (
          pokemon.id === state.search ||
          pokemon.name.includes(state.search || "")
        );
      });
    },
  },
  actions: {
    sotrePokemons(pokemons: PokemonsList) {
      this.pokemons = [...this.pokemons, ...pokemons];
    },
    setSearch(input: string | null) {
      this.search = input;
    },
  },
});
