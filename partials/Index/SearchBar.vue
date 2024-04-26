<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="input"
      placeholder="Pesquise por nome ou código"
    />

    <button @click="handleClear">x</button>
  </div>
</template>

<script setup lang="ts">
const $emit = defineEmits(["update:modelValue"]);

const input = ref<string | null>(null);

function handleClear() {
  input.value = null;
}

watchEffect(() => {
  $emit("update:modelValue", input.value);
});
</script>

<style lang="scss" scoped>
.search-bar {
  @apply h-12 bg-white w-full flex items-center pl-[37px] pr-[25px] rounded-full gap-4;

  input {
    @apply w-full flex-grow outline-none;
  }
}
</style>
