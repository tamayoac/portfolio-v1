<template>
  <div class="introduction">
    <h2>Introduction</h2>
    <p>{{ introductionText }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Reactive state
const introductionText = ref(
  "I am a passionate software developer with a knack for problem-solving and building efficient, scalable applications. I love exploring new technologies and applying them in real-world projects."
);
</script>

<style scoped>
.introduction {
  padding: 20px;
}
h2 {
  font-size: 1.8em;
  margin-bottom: 10px;
}
p {
  font-size: 1em;
  color: #444;
}
</style>
