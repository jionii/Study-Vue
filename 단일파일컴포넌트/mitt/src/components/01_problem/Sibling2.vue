<script setup>
defineProps({
  message: String,
});
</script>

<template>
  <div>
    <h3>Sibling1</h3>
  </div>
  <p>받은 메세지 : {{ message }}</p>
</template>

<style scoped></style>