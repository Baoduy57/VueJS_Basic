<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->

    <!-- Cach 1: dung useRouter de chuyen trang -->
    <button
      @click="router.push({ name: 'user' })"
      type="button"
      class="btn btn-danger"
    >
      button
    </button>

    <!-- Cach 2: dung RouterLink de chuyen trang -->

    <RouterLink to="/about/user">About User</RouterLink>
    <router-view></router-view>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
