<template>
  <div class="mt-6 space-y-3" v-if="imageList.length">
    <div
      class="relative aspect-video overflow-hidden rounded-lg bg-stone-100 dark:bg-stone-800 cursor-pointer"
      @click="openModal(currentImage)"
    >
      <img
        :src="getImageUrl(currentImage)"
        :alt="`Project image ${currentIndex + 1}`"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
      ></div>

      <div
        class="absolute inset-x-0 bottom-3 flex items-center justify-between px-3 text-stone-200 text-xs"
      >
        <button
          class="hover:text-white transition-colors disabled:opacity-40"
          type="button"
          @click.stop="prev"
          :disabled="!hasPrev"
        >
          ‹ Prev
        </button>
        <div class="flex items-center gap-2">
          <span class="text-[11px] uppercase tracking-[0.18em]">Screens</span>
          <div class="flex items-center gap-1">
            <span
              v-for="(img, i) in imageList"
              :key="img._id || i"
              class="h-1.5 w-1.5 rounded-full transition-colors"
              :class="i === currentIndex ? 'bg-white' : 'bg-white/40'"
            />
          </div>
        </div>
        <button
          class="hover:text-white transition-colors disabled:opacity-40"
          type="button"
          @click.stop="next"
          :disabled="!hasNext"
        >
          Next ›
        </button>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="selectedImage"
          class="fixed inset-0 z-50 flex items-center justify-center p-4"
          @click="closeModal"
        >
          <div class="absolute inset-0 bg-stone-950/90 backdrop-blur-sm"></div>
          <div class="relative z-10 max-w-5xl w-full">
            <button
              class="absolute -top-12 right-0 text-stone-400 hover:text-stone-200 transition-colors"
              @click="closeModal"
            >
              <svg
                class="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              :src="getImageUrl(selectedImage)"
              alt="Enlarged project image"
              class="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              @click.stop
            />
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { SanityImage } from "@/types/sanityImageType";
import { computed, ref } from "vue";
import { getImageUrl } from "@/sanityClient";

const props = defineProps<{
  images?: Array<SanityImage>;
}>();

const imageList = computed(() => props.images || []);
const currentIndex = ref(0);

const hasPrev = computed(() => currentIndex.value > 0);
const hasNext = computed(() => currentIndex.value < imageList.value.length - 1);

const currentImage = computed(() => imageList.value[currentIndex.value]);

const next = () => {
  if (hasNext.value) currentIndex.value += 1;
};

const prev = () => {
  if (hasPrev.value) currentIndex.value -= 1;
};

const selectedImage = ref<SanityImage | null>(null);

const openModal = (image?: SanityImage) => {
  if (!image) return;
  selectedImage.value = image;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  selectedImage.value = null;
  document.body.style.overflow = "";
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.95);
}
</style>
