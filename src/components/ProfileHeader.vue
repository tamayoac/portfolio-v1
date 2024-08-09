<template>
  <div class="name-title-details">
    <h1>{{ name }}</h1>
    <h2>{{ title }}</h2>
    <p>{{ details }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Reactive state
const name = ref("Alfred Christopher Tamayo III");
const title = ref("Software Developer");
const details = ref(
  "Experienced in building web applications using modern technologies."
);
</script>

<style scoped>
.name-title-details {
  text-align: center;
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
