<template>
  <NuxtLink
    :to="{
      name: 'pokemon-pokemonid',
      params: { pokemonid: `${normalizedName}--${id}` },
    }"
    class="pokemon-item"
  >
    <div class="pokemon-item__image-container">
      <img class="pokemon-item__image" :src="image" :alt="`${id} - ${name}`" />
    </div>

    <h3 class="pokemon-item__name">{{ name }}</h3>
    <h4 class="pokemon-item__code">Cód: {{ id }}</h4>

    <div class="pokemon-item__types">
      <p
        :class="`pokemon-item__type pokemon-item__type--${pokemonType}`"
        v-for="pokemonType in types"
        :key="pokemonType"
      >
        {{ pokemonType }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string;
  name: string;
  types: string[];
  image: string;
}>();

const normalizedName = computed(() =>
  props.name.replaceAll(" ", "-").toLocaleLowerCase()
);
</script>

<style lang="scss" scoped>
.pokemon-item {
  @apply bg-white px-[10px] pt-3 pb-[18px] flex flex-col items-center rounded-lg;

  &__image {
    &-container {
      @apply size-[60px];
    }

    @apply h-full;
  }

  &__name {
    @apply capitalize mt-[14px] font-bold text-sm leading-4;
  }

  &__code {
    @apply mt-[15px] font-bold text-[9px] leading-[9px];
  }

  &__types {
    @apply mt-[53px] flex gap-1 justify-center flex-wrap w-full;
  }

  &__type {
    @apply bg-pokemon-type-default uppercase text-[9px] leading-[10px] basis-[48%] font-semibold text-white rounded-lg w-16 h-4 flex justify-center items-center;

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
