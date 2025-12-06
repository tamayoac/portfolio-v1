<template>
  <div class="space-y-10">
    <!-- Dark Mode Toggle -->
    <div class="flex justify-end -mt-4 -mr-2">
      <dark-mode-toggle />
    </div>
    <section class="space-y-4 animate-fade-in animate-delay-100">
      <div class="flex items-center justify-between">
        <h2 class="section-title mb-0">{{ currentTitle }}</h2>
        <div
          class="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-300"
        >
          <span
            v-for="(_, i) in slides.length"
            :key="i"
            class="h-1 w-1 rounded-full transition-colors"
            :class="
              i === currentSlide
                ? 'bg-stone-800 dark:bg-stone-100'
                : 'bg-stone-400/50 dark:bg-stone-600/60'
            "
          ></span>
        </div>
      </div>

      <div
        class="space-y-3 touch-pan-y"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
        @pointerdown="onPointerDown"
        @pointerup="onPointerUp"
        @wheel="onWheel"
      >
        <transition name="carousel-slide" mode="out-in">
          <div :key="currentSlideKey" class="space-y-3">
            <template v-if="currentSlideKey === 'about'">
              <about-section :about="portfolio?.about" />
            </template>

            <template v-else-if="currentSlideKey === 'experience'">
              <div class="space-y-2">
                <experience-list
                  v-for="experience in sortedExperiences"
                  :key="experience._id"
                  :experience="experience"
                  :useIcon="portfolio?.isSvg"
                />
              </div>
            </template>

            <template v-else-if="currentSlideKey === 'projects'">
              <div class="space-y-2">
                <project-list
                  v-for="project in portfolio?.projects"
                  :key="project._id"
                  :project="project"
                />
              </div>
            </template>

            <template v-else-if="currentSlideKey === 'resume'">
              <div class="space-y-2" v-if="resumeLink">
                <p class="text-sm text-stone-700 dark:text-stone-300">
                  Download my latest CV to view experience, skills, and
                  projects.
                </p>
                <a
                  :href="resumeLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-sm font-semibold text-stone-800 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-200 transition-colors"
                >
                  <span>Download Resume</span>
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                    />
                  </svg>
                </a>
              </div>
              <div v-else class="text-sm text-stone-500 dark:text-stone-500">
                Resume not available.
              </div>
            </template>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import DarkModeToggle from "@/components/common/DarkModeToggle.vue";
import AboutSection from "@/components/AboutSection.vue";
import ExperienceList from "@/components/ExperienceList.vue";
import ProjectList from "@/components/ProjectList.vue";
import { usePortfolioStore } from "@/store/portfolioStore";
import { storeToRefs } from "pinia";
import { onMounted, computed, ref } from "vue";
import { Experience } from "../types/experienceType";

const portfolioStore = usePortfolioStore();

const { portfolio } = storeToRefs(portfolioStore);

const { loadPortfolio } = portfolioStore;

const sortedExperiences = computed<Experience[]>(() => {
  const experiences = portfolio.value?.experiences || [];

  return [...experiences].sort((a, b) => {
    const dateA = new Date(a.to || a.from).getTime();
    const dateB = new Date(b.to || b.from).getTime();
    return dateB - dateA;
  });
});

const resumeLink = computed(() => {
  return portfolio.value?.resumeUrl || "/resume.pdf";
});

const slides = ref(["about", "experience", "projects", "resume"]);
const currentSlide = ref(0);
const touchStartX = ref(0);
const pointerStartX = ref(0);

const currentSlideKey = computed(() => slides.value[currentSlide.value]);
const currentTitle = computed(() => {
  if (currentSlideKey.value === "about") return "About";
  if (currentSlideKey.value === "experience") return "Experience";
  if (currentSlideKey.value === "projects") return "Projects";
  return "Resume";
});

const hasPrev = computed(() => currentSlide.value > 0);
const hasNext = computed(() => currentSlide.value < slides.value.length - 1);

const prev = () => {
  if (hasPrev.value) currentSlide.value -= 1;
};

const next = () => {
  if (hasNext.value) currentSlide.value += 1;
};

const onTouchStart = (event: TouchEvent) => {
  touchStartX.value = event.touches[0]?.clientX ?? 0;
};

const onTouchEnd = (event: TouchEvent) => {
  const endX = event.changedTouches[0]?.clientX ?? 0;
  const delta = endX - touchStartX.value;
  const threshold = 40;
  if (delta > threshold) prev();
  if (delta < -threshold) next();
};

const onPointerDown = (event: PointerEvent) => {
  pointerStartX.value = event.clientX;
};

const onPointerUp = (event: PointerEvent) => {
  const delta = event.clientX - pointerStartX.value;
  const threshold = 40;
  if (delta > threshold) prev();
  if (delta < -threshold) next();
};

const onWheel = (event: WheelEvent) => {
  if (
    Math.abs(event.deltaX) > Math.abs(event.deltaY) &&
    Math.abs(event.deltaX) > 20
  ) {
    event.preventDefault();
    if (event.deltaX > 0) next();
    else prev();
  }
};

onMounted(async () => {
  await loadPortfolio();
});
</script>
