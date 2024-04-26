<template>
  <div class="pokemon-abilities">
    <h2>Habilidades</h2>

    <div class="pokemon-abilities__content">
      <p
        class="pokemon-abilities__item"
        v-for="(ability, index) in abilities"
        :key="index"
      >
        {{ ability }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  abilities: string[];
}>();
</script>

<style lang="scss" scoped>
.pokemon-abilities {
  @apply w-full;

  h2 {
    @apply capitalize font-bold text-sm leading-4 text-center mb-4;
  }

  &__item {
    @apply text-xs text-start text-[#616161] flex flex-col;

    &::before {
      @apply content-[''] w-full h-[1px] bg-[#F1F4F5] mb-4;
    }
  }
}
</style>
