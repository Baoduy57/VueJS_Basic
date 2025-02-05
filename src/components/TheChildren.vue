<script setup>
const prop = defineProps(["countView"]);
const emit = defineEmits(["handle-increase"]);
import { ref, computed, onMounted } from "vue";

const onIncrease = () => {
  emit("handle-increase", { label: "duy", value: 11 });
};

const products = ref([
  { id: 1, name: "pepsi", category: "drink", price: 100 },
  { id: 2, name: "pizza", category: "food", price: 200 },
  { id: 3, name: "coca", category: "drink", price: 300 },
  { id: 4, name: "hamburger", category: "food", price: 300 },
]);

const categoryProduct = ref("food");
const handleCategoryProduct = (value) => {
  categoryProduct.value = value;
};

const productFilter = computed(() => {
  return products.value.filter(
    (item) => item.category === categoryProduct.value
  );
});

const todos = ref([]);

// sau khi chay tu tren xuong duoi thi onMounted se chay cuoi cung
onMounted(() => {
  console.log("Render Component");
  fetch("https://jsonplaceholder.org/users")
    .then((response) => response.json())
    .then((json) => (todos.value = json));
});
</script>

<template>
  {{ console.log("template component") }}
  <h1>hello: {{ prop.countView }}</h1>

  <button @click="onIncrease" type="button" class="btn btn-warning">
    Increase
  </button>

  <hr />
  <button
    @click="handleCategoryProduct('food')"
    type="button"
    class="btn btn-danger"
  >
    Hien thi Food
  </button>
  <button
    @click="handleCategoryProduct('drink')"
    type="button"
    class="btn btn-primary"
  >
    Hien thi Drink
  </button>

  <div v-if="categoryProduct === 'food'">Danh sach Food</div>
  <div v-else>Danh sach Drink</div>

  <table class="table table-hover">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="pro in productFilter">
        <td>{{ pro.id }}</td>
        <td>{{ pro.name }}</td>
        <td>{{ pro.price }}</td>
      </tr>
    </tbody>
  </table>

  <hr />
  <h1>Danh sach User</h1>
  <table class="table table-bordered table-hover">
    <thead>
      <tr>
        <th>ID</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
        <th>BirthDate</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="todo in todos">
        <td>{{ todo.id }}</td>
        <td>{{ todo.firstname }}</td>
        <td>{{ todo.lastname }}</td>
        <td>{{ todo.email }}</td>
        <td>{{ todo.birthDate }}</td>
        <td>{{ todo.phone }}</td>
      </tr>
    </tbody>
  </table>
</template>
