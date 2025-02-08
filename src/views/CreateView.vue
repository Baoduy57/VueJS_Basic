<script setup>
import { reactive } from "vue";

const todoData = reactive({
  name: "",
  email: "",
  phone: "",
  website: "",
});

const handleCreateDataNew = async () => {
  console.log(todoData);
};
</script>

<template>
  <div style="padding: 2rem">
    <form @submit.prevent="handleCreateDataNew">
      <legend>Create User</legend>

      <div class="form-group" style="margin-top: 1rem">
        <label for="">Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="Input Name"
          v-model="todoData.name"
        />
      </div>
      <div class="form-group" style="margin-top: 1rem">
        <label for="">Email</label>
        <input
          type="email"
          class="form-control"
          placeholder="Input Email"
          v-model="todoData.email"
        />
      </div>
      <div class="form-group" style="margin-top: 1rem">
        <label for="">Phone</label>
        <input
          type="number"
          class="form-control"
          placeholder="Input Phone"
          v-model="todoData.phone"
        />
      </div>
      <div class="form-group" style="margin-top: 1rem">
        <label for="">Website</label>
        <input
          type="text"
          class="form-control"
          placeholder="Input Website"
          v-model="todoData.website"
        />
      </div>
      <button class="btn btn-primary" style="margin-top: 1rem">
        Create new
      </button>
    </form>
  </div>
</template>
