<script setup>
import { reactive, ref } from "vue";
const hello = "hello world";
console.log(hello);

//ref() su dung 1 doi tuong va 1 thuoc tinh
//truy cap thuoc tinh ref bang cach .value
const count2 = ref(1);
console.log("count2", count2);

const increase = () => {
  count2.value++;
};

//reactive() cho phep su dung 1 object ben trong co nhieu doi tuong
//truy cap thuoc tinh reactive ko can .value, chung ta co the su dung truc tiep thuoc tinh co san
const count = reactive({
  name: "tbd",
  age: 20,
});

const textInput = ref("");
</script>

<template>
  <h1 class="color">{{ hello }}</h1>
  <h1 class="color">{{ count.age }}</h1>

  <button v-on:click="increase">Incease</button>
  <h1>Count2: {{ count2 }}</h1>

  <input v-model.trim="textInput" type="text" />
  <div>Text: {{ textInput }}</div>
</template>

<style>
.color {
  color: aqua;
}
</style>
