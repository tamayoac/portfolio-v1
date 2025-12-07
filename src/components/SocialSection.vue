<template>
  <nav v-if="hasSocials" class="mt-8" aria-label="Social links">
    <ul class="flex flex-row items-center gap-4">
      <li v-for="social in socialList" :key="social._id">
        <a
          :href="social.link"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center w-10 h-10 rounded-full text-stone-500 dark:text-stone-500 hover:text-brand-700 dark:hover:text-brand-200 hover:bg-brand-50 dark:hover:bg-brand-900/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/70 dark:focus-visible:ring-brand-500/70 transition-all duration-200"
          :aria-label="social.name || 'Social link'"
        >
          <font-awesome-icon
            :icon="[
              getIconPrefix(social.icon.provider),
              getIconName(social.icon.name),
            ]"
            class="w-5 h-5"
          />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Social } from "@/types/socialType";

const props = defineProps<{
  socials?: Social[];
}>();

const socialList = computed(() => {
  return props.socials || [];
});

const hasSocials = computed(() => socialList.value.length > 0);

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
