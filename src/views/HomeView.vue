<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const textSearch = ref("");

const users = ref([]);

onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => (users.value = json));
});
//mà phương thức filter yêu cầu phải là một mảng.
const userFilter = computed(() => {
  return users.value.filter(
    (item) =>
      item.username.toUpperCase().indexOf(textSearch.value.toUpperCase()) !==
        -1 ||
      item.email.toUpperCase().indexOf(textSearch.value.toUpperCase()) !== -1
  );
});
</script>

<template>
  <main style="color: #000; padding: 2rem">
    <input type="text" placeholder="Enter Search Here!" v-model="textSearch" />

    <div class="group-card">
      <div class="card-item" v-for="user in userFilter" :key="user.id">
        <div @click="router.push({ path: `/todo/${user?.id}` })">
          <h2>{{ user?.username }}</h2>
          <i>{{ user?.email }}</i>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
