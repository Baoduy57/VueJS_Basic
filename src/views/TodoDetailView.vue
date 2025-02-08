<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const router = useRoute();
const user = ref(null);

onMounted(() => {
  fetch(`https://jsonplaceholder.typicode.com/users/${router.params.id}`)
    .then((response) => response.json())
    .then((json) => (user.value = json));
});
</script>

<template>
  <main style="color: #000; padding: 2rem">
    <div class="card border-warning">
      <div class="card-body text-bg-success">
        <h4 class="card-title">{{ user?.name }}</h4>
        <p class="card-text">{{ user?.username }}</p>
        <p class="card-text">{{ user?.email }}</p>
        <p class="card-text">{{ user?.phone }}</p>
        <p class="card-text">{{ user?.website }}</p>
        <p class="card-text">{{ user?.address?.zipcode }}</p>
      </div>
    </div>
  </main>
</template>
