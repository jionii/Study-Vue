<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark mt-2">
    <span class="navbar-brand"> 이날치(LeeNalChi)</span>
    <button class="navbar-toggler" type="button" @click="changeIsNavShow">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div :class="navClass">
      <ul class="navbar-nav">
        <li class="nav-item">
          <!-- 
            router-link
            - 싱글 페이지 어플리케이션에서 다른 페이지로 이동할 수 있게 해주는 컴포넌트

            to : 이동하고 싶은 경로
            -->
          <router-link class="nav-link" to="/"> 홈</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about"> 소개</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/members"> 멤버</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/videos"> 영상</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/students"> 학생</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
import { reactive, computed } from 'vue';

const state = reactive({ isNavShow: false });
const navClass = computed(() =>
  state.isNavShow ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'
);
const changeIsNavShow = () => {
  state.isNavShow = !state.isNavShow;
};
</script>