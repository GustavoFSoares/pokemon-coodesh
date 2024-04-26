<template>
  <div class="pokemon-card">
    <div class="pokemon-card__image-container">
      <img class="pokemon-card__image" :src="image" :alt="`${id} - ${name}`" />
    </div>

    <h1 class="pokemon-card__name">{{ name }}</h1>

    <div class="pokemon-card__types">
      <p
        :class="`pokemon-card__type pokemon-card__type--${pokemonType}`"
        v-for="pokemonType in types"
        :key="pokemonType"
      >
        {{ pokemonType }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  id: number;
  name: string;
  types: string[];
  image: string;
}>();
</script>

<style lang="scss" scoped>
.pokemon-card {
  @apply bg-white flex flex-col items-center;

  &__image {
    &-container {
      @apply size-[190px];
    }

    @apply h-full;
  }

  &__name {
    @apply capitalize mt-[7px] font-bold text-sm leading-4;
  }

  &__types {
    @apply mt-[29px] flex gap-1 justify-center flex-wrap w-full;
  }

  &__type {
    @apply bg-pokemon-type-default uppercase text-[9px] leading-[10px] font-semibold text-white rounded-lg w-16 h-4 flex justify-center items-center;

    &--bug {
      @apply bg-pokemon-type-bug;
    }
    &--dark {
      @apply bg-pokemon-type-dark;
    }
    &--dragon {
      @apply bg-pokemon-type-dragon;
    }
    &--electric {
      @apply bg-pokemon-type-electric;
    }
    &--fairy {
      @apply bg-pokemon-type-fairy;
    }
    &--fighting {
      @apply bg-pokemon-type-fighting;
    }
    &--fire {
      @apply bg-pokemon-type-fire;
    }
    &--flying {
      @apply bg-pokemon-type-flying;
    }
    &--ghost {
      @apply bg-pokemon-type-ghost;
    }
    &--grass {
      @apply bg-pokemon-type-grass;
    }
    &--ground {
      @apply bg-pokemon-type-ground;
    }
    &--ice {
      @apply bg-pokemon-type-ice;
    }
    &--normal {
      @apply bg-pokemon-type-normal;
    }
    &--poison {
      @apply bg-pokemon-type-poison;
    }
    &--psychic {
      @apply bg-pokemon-type-psychic;
    }
    &--rock {
      @apply bg-pokemon-type-rock;
    }
    &--steel {
      @apply bg-pokemon-type-steel;
    }
    &--water {
      @apply bg-pokemon-type-water;
    }
  }
}
</style>
