<script setup>
  
</script>

<template>
  <div class="card card-body">
    <h2>About</h2>
    <nav>
      <!-- 이름으로 link -->
      <RouterLink :to="{name : 'class'}">학급 소개</RouterLink>
      <RouterLink to="/about/goal">목표</RouterLink>
    </nav>

    <hr>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>