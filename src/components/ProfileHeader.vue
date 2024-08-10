<template>
  <div class="name-title-details">
    <h1>{{ name }}</h1>
    <h2>{{ title }}</h2>
    <p>{{ introduction }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  name: string;
  title: string;
  introduction: string;
}>();
</script>

<style scoped>
.name-title-details {
  text-align: left;
  padding: 20px;
}
h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}
h2 {
  font-size: 1.5em;
  color: #666;
  margin-bottom: 10px;
}
p {
  font-size: 1em;
  color: #888;
}
</style>
