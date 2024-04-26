<template>
  <section class="pokemon-list-page">
    <div class="pokemon-list-page__container">
      <div class="pokemon-list-page__content">
        <h1>index page</h1>

        <ClientOnly>
          <ScrollLoader />
        </ClientOnly>

        <PokemonsList :data="data" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { usePokemonStore } from "@/stores/pokemon";

import PokemonsList from "@/partials/Index/PokemonsList.vue";
import ScrollLoader from "@/partials/Index/ScrollWatcher.vue";

const pokemonStore = usePokemonStore();

const { data } = await useFetch("/api/pokemon", {
  key: "pokemons",
  method: "GET",
  query: {
    offset: pokemonStore.offset,
  },
});

onServerPrefetch(async () => {
  if (!data.value) {
    return;
  }

  await pokemonStore.sotrePokemons(data.value);
});

// onMounted(() => {
//   if (!data.value) {
//     return;
//   }

//   pokemonStore.sotrePokemons(data.value);
// });
</script>

<style lang="scss" scoped>
.pokemon-list-page {
  @apply pr-9 pt-[18px] h-[100vh];

  &__container {
    @apply overflow-x-auto h-full;

    &::-webkit-scrollbar {
      @apply w-[13px] p-12;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      @apply bg-[#C4C4C44F] rounded-[10px] overflow-hidden;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      @apply bg-[#C4C4C4] rounded-[10px] px-1 w-[10px];
    }
  }

  &__content {
    @apply max-w-[824px] mx-auto;
  }
}
</style>
