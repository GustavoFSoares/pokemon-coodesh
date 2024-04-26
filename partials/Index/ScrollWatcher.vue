<template></template>

<script setup>
const $emit = defineEmits("end-page");

onMounted(() => {
  let isWaiting = false;

  document
    .querySelector("#pokemon-list-target-scroll")
    .addEventListener("scroll", (ev) => {
      if (isWaiting) {
        return;
      }

      if (
        ev.target.scrollTop + document.body.offsetHeight >=
        ev.target.scrollHeight
      ) {
        isWaiting = true;

        $emit("end-page");

        setTimeout(() => {
          isWaiting = false;
        }, 2000);
      }
    });
});
</script>
