<template>
    <div>
        <h3>{{ counter.count }}</h3>
        <button @click="increase">+ 증가</button>
        <button @click="reset">0 초기화</button>
    </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';

// 값 자체를 가져올 때 반응형이 깨짐
// const {increase, reset, count} = useCounterStore();

const counter = useCounterStore();
const {increase, reset} = counter;
</script>