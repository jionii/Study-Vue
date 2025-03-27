<script setup>
import Child from './Child.vue';
import GrandChild from './GrandChild.vue';
</script>


<template>
    <div style="border: 2px solid red;">
        <h1>나는 부모</h1>
        <Child></Child>
        <GrandChild></GrandChild>
    </div>
</template>


<style lang="scss" scoped>

</style>