<template></template>

<script lang="ts" setup>
const $emit = defineEmits("end-page");

const isWaiting = ref(false);

function checkScroll(pageHeight: number, scrollHeight: number) {
  if (isWaiting.value) {
    return;
  }

  if (pageHeight >= scrollHeight) {
    isWaiting.value = true;

    $emit("end-page");

    setTimeout(() => {
      isWaiting.value = false;
    }, 2000);
  }
}

onMounted(() => {
  document
    .querySelector("#pokemon-list-target-scroll")
    .addEventListener("scroll", (ev) => {
      checkScroll(
        ev.target.scrollTop + document.body.offsetHeight,
        ev.target.scrollHeight
      );
    });

  window.addEventListener("scroll", (ev) => {
    checkScroll(
      window.innerHeight + window.pageYOffset,
      document.body.offsetHeight
    );
  });
});
</script>
