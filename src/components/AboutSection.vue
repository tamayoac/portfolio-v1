<template>
  <div class="text-md text-gray-400 px-14 py-6">
    <portable-text :value="about" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  about: string;
}>();
</script>

<style scoped>
h2 {
  font-size: 1.8em;
  margin-bottom: 10px;
}
</style>
