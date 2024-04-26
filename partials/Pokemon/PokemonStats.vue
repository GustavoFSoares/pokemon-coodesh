<template>
  <div class="pokemon-stats">
    <div
      v-for="(statValue, statKey) in stats"
      :key="`${statKey}-${statValue}`"
      class="pokemon-stats-item"
    >
      <h6 class="pokemon-stats-item__label">{{ getStatName(statKey) }}</h6>

      <div class="pokemon-stats-item__bar pokemon-stats-item-bar">
        <div
          class="pokemon-stats-item-bar__content"
          :class="`pokemon-stats-item-bar__content--${mainPokemonType}`"
          :style="{ width: `${getStatPercent(statValue)}%` }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type PokemonStats = {
  hp: number;
  attack: number;
  defense: number;
  "special-attack": number;
  "special-defense": number;
  speed: number;
};

defineProps<{ mainPokemonType: string; stats: PokemonStats }>();
const MAX_POWER = 160;

function getStatName(key: keyof PokemonStats) {
  const mapStats = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    speed: "SPD",
    "special-attack": "SpP",
    "special-defense": "SpD",
  };

  return mapStats[key] || key;
}

function getStatPercent(value: number) {
  return (100 * value) / MAX_POWER;
}
</script>

<style lang="scss" scoped>
.pokemon-stats {
  @apply flex flex-col gap-1;

  &-item {
    @apply flex flex-row gap-2;

    &__label {
      @apply w-10 font-bold text-sm text-left;
    }

    &__bar {
      @apply grow;
    }
  }

  &-item-bar {
    @apply h-5 bg-[#c4c4c4];

    &,
    &__content {
      @apply rounded-xl;
    }

    &__content {
      @apply h-full;

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
}
</style>
