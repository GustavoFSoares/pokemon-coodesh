<template>
  <section class="pokemon-profile" v-if="pokemonData">
    <Card class="pokemon-profile__data">
      <PokemonCard
        :id="pokemonData.id"
        :image="pokemonData.image"
        :name="pokemonData.name"
        :types="pokemonData.types"
      />

      <PokemonStats
        class="pokemon-profile__data-stats"
        :main-pokemon-type="maisPokemonType"
        :stats="pokemonData.stats"
      />
    </Card>

    <Card>
      <PokemonAbilities :abilities="pokemonData.effectEntries" />
    </Card>

    <NuxtLink to="/" class="pokemon-profile__go-back">Voltar</NuxtLink>
  </section>
</template>

<script lang="ts" setup>
import PokemonCard from "@/partials/Pokemon/PokemonCard.vue";
import PokemonStats from "@/partials/Pokemon/PokemonStats.vue";
import PokemonAbilities from "@/partials/Pokemon/PokemonAbilities.vue";

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

const maisPokemonType = computed(() => {
  return pokemonData.value?.types[0] || "default";
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
.pokemon-profile {
  @apply max-w-[541px] mt-8 mx-auto flex flex-col gap-6;

  &__data {
    @apply w-full flex flex-col gap-10;

    @apply md:flex-row md:items-center;
    @apply lg:flex-row lg:items-center;

    &-stats {
      @apply grow;
    }
  }

  &__go-back {
    @apply mt-6 font-bold text-sm text-center text-[#00A3FF];
  }
}
</style>
