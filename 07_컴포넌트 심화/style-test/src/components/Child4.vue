<script setup>
import {useCssModule} from 'vue';

const style = useCssModule();

</script>

<template>
  <div :class="style.child">
    <h2>Child4</h2>
  </div>
</template>

<style module src="@/assets/child4-style.module.css"></style>