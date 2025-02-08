<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <img
      src="@/assets/logo.svg"
      alt="logo"
      width="50"
      height="50"
      class="logo"
    />
    <nav>
      <RouterLink style="text-decoration: none; color: white" to="/">
        <div class="btn-main">Home Todo</div>
      </RouterLink>

      <RouterLink style="text-decoration: none; color: white" to="/create">
        <div class="btn-action">Create Todo</div>
      </RouterLink>
    </nav>
  </header>

  <router-view />
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 2rem;
  align-items: center;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
}

nav {
  display: flex;
  column-gap: 1rem;
}
</style>
