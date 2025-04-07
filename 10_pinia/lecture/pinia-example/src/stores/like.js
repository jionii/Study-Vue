import { defineStore } from "pinia";
import {computed, ref} from 'vue';

export const useLikeStore = defineStore('like', () => {

    const like = ref(0)

    // getter
    // 5배씩 보이는
    const fivetime = computed(() => like.value * 5);

    const increase = () => {
        like.value++;
    }

    return {like, increase, fivetime}
})