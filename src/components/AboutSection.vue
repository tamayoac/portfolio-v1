<template>
  <div class="text-sm text-gray-400 px-10 py-6">
    <portable-text :value="about" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  about: Array<any>;
}>();
</script>

<style scoped>
h2 {
  font-size: 1.8em;
  margin-bottom: 10px;
}
</style>
