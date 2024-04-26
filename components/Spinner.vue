<template>
  <div class="spinner">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width="40"
      height="40"
      style="background: transparent"
    >
      <g data-idx="1">
        <g data-idx="2">
          <path
            d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843"
            fill="none"
            stroke="#000000"
            stroke-width="12"
            data-idx="3"
          ></path>
          <path d="M49 3L49 27L61 15L49 3" fill="#000000" data-idx="4"></path>
        </g>
        <g data-idx="6"></g>
      </g>
    </svg>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.spinner {
  @apply size-16 flex justify-center items-center;

  svg {
    @apply animate-spin;
  }
}
</style>
