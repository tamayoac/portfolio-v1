<template>
  <div class="name-title-details">
    <custom-text :value="introductionContent" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, h, computed } from "vue";
import CustomText from "@/components/common/CustomText.vue";

const props = defineProps<{
  introduction?: string;
}>();

const introductionContent = computed(() => {
  return props.introduction;
});
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
