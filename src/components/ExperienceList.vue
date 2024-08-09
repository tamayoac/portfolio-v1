<template>
  <div class="experiences">
    <h2>Experiences</h2>
    <ul>
      <li v-for="(experience, index) in experiences" :key="index">
        <h3>{{ experience.role }} at {{ experience.company }}</h3>
        <p>{{ experience.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Reactive state
const experiences = ref([
  {
    role: "Frontend Developer",
    company: "TechCorp",
    description:
      "Developed and maintained web applications with a focus on performance and user experience.",
  },
  {
    role: "Backend Developer",
    company: "DevSolutions",
    description:
      "Designed and implemented RESTful APIs for various business processes.",
  },
]);
</script>

<style scoped>
.experiences {
  padding: 20px;
}
h2 {
  font-size: 1.8em;
  margin-bottom: 10px;
}
h3 {
  font-size: 1.2em;
  margin: 5px 0;
}
p {
  font-size: 1em;
  color: #555;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 15px;
}
</style>
