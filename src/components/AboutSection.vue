<template>
  <div class="text-md px-6 py-6">
    <custom-text :value="aboutContent" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
import CustomText from "@/components/common/CustomText.vue";
const props = defineProps<{
  about?: string;
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
