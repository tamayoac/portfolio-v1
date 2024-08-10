<template>
  <div class="socials-container">
    <ul class="space-y-2">
      <li v-for="social in socials" :key="social._id">
        <a
          :href="social.link"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center space-x-2 text-blue-500 hover:text-blue-700 transition-colors duration-200"
        >
          <span>{{ social.name }}</span>
          <!-- Optional icon can be added here -->
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Social } from "@/types/socialType";
import { defineProps } from "vue";
// Define the props for the Socials component
const props = defineProps<{
  socials: Social[];
}>();
</script>

<style scoped>
/* No additional styles needed, using Tailwind CSS */
</style>
