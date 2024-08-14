<template>
  <div class="text-md text-black dark:text-gray-400 px-6 py-6">
    <portable-text :value="aboutContent" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

const props = defineProps<{
  about: string;
}>();

const aboutContent = computed(() => {
  return props.about;
});
</script>

<style scoped>
h2 {
  font-size: 1.8em;
  margin-bottom: 10px;
}
</style>
