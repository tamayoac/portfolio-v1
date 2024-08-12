<template>
  <div class="socials-container">
    <ul class="flex flex-row">
      <li v-for="social in socials" :key="social._id" class="px-2">
        <a
          :href="social.link"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center space-x-2 transition-colors duration-200"
        >
          <font-awesome-icon
            :icon="[
              getIconPrefix(social.icon.provider),
              getIconName(social.icon.name),
            ]"
            class="w-6 h-6"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Social } from "@/types/socialType";

// Define the props
const props = defineProps<{
  socials: Social[];
}>();

const ICON_PREFIXES: { [key: string]: string } = {
  fa: "fab",
  fas: "fas",
  si: "si",
};

function getIconPrefix(provider: string): string {
  return ICON_PREFIXES[provider] || "fas";
}

function getIconName(name: string): string {
  return name.replace("fa-", "");
}
</script>
<style scoped>
.socials-container {
  padding: 20px;
}
</style>
