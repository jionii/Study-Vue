<script setup>
import {useCssModule} from 'vue';

const style = useCssModule();

</script>

<template>
  <div :class="style.child">
    <h2>Child3</h2>
  </div>
</template>

<style module>
.child {
    background-color: orangered;
    border: solid 1px black;
    margin: 1.5em;
    padding: 1em;
}
</style>