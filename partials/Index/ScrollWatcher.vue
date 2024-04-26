<template></template>

<script setup>
onMounted(() => {
  document
    .querySelector(".pokemon-list-page")
    .addEventListener("scroll", () => {
      console.log(
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      );
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log("FIM");
      }
    });
});
</script>
