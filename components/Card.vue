<template>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style>
.card {
  @apply bg-white rounded-lg pt-5 pb-3 px-2;
}
</style>
