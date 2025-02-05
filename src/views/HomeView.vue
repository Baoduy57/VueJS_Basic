<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import TheChildren from "../components/TheChildren.vue";
import HelloWorld from "../components/HelloWorld.vue";
import { ref, watch } from "vue";

const count = ref(10);

const handleIncrease = (data) => {
  console.log("Emit data", data);
  count.value = count.value + data.value;
};

const showHelloWorld = ref(true);
watch(showHelloWorld, () => {
  console.log("Show Hello World", showHelloWorld.value);
});
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->

    <div v-if="showHelloWorld">
      <HelloWorld msg="Hello JeJu" />
    </div>

    <hr />

    <TheChildren :countView="count" @handle-increase="handleIncrease" />
  </main>
</template>
