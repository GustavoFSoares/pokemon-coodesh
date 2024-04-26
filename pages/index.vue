<template>
  <section class="pokemon-list-page">
    <div class="pokemon-list-page__container" id="pokemon-list-target-scroll">
      <div class="pokemon-list-page__content">
        <SearchBar
          class="pokemon-list-page__content-search-bar"
          v-model="searchedInput"
        />

        <h1>Pokémons</h1>

        <ClientOnly>
          <ScrollLoader @end-page="handleEndPage" />
        </ClientOnly>

        <PokemonsList />
      </div>

      <ClientOnly>
        <div class="pokemon-list-page__loading">
          <Spinner v-if="isLoading" />
        </div>
      </ClientOnly>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { usePokemonStore } from "@/stores/pokemon";

import SearchBar from "@/partials/Index/SearchBar.vue";
import PokemonsList from "@/partials/Index/PokemonsList.vue";
import ScrollLoader from "@/partials/Index/ScrollWatcher.vue";

const pokemonStore = usePokemonStore();

const isLoading = ref(false);
const searchedInput = ref<string | null>(null);

watch(
  () => searchedInput.value,
  () => {
    pokemonStore.search = searchedInput.value;
  }
);

async function handleLoadData() {
  isLoading.value = true;

  try {
    const data = await $fetch("/api/pokemon", {
      key: "pokemons",
      method: "GET",
      query: {
        offset: pokemonStore.offset,
      },
    });

    await pokemonStore.sotrePokemons(data);
  } finally {
    isLoading.value = false;
  }
}

function handleEndPage() {
  if (searchedInput.value) {
    return;
  }

  handleLoadData();
}

onServerPrefetch(async () => {
  await handleLoadData();
});

onBeforeMount(async () => {
  await handleLoadData();
});
</script>

<style lang="scss" scoped>
.pokemon-list-page {
  @screen lg {
    @apply pr-9 pt-[18px];
    height: calc(100vh - 48px);
  }

  &__loading {
    @apply w-full flex justify-center;
  }

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
    @apply max-w-[824px] mx-auto pt-2;

    @apply px-4;
    @apply lg:px-0;

    &-search-bar {
      @apply mx-1 mb-8;
      @apply lg:mx-0 lg:mb-0;
    }

    h1 {
      @apply mt-12 mb-10 text-sm leading-4 font-bold;

      @apply sm:hidden;
    }
  }
}
</style>
