<template>
  <div class="w-full py-16 md:py-24">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12" ref="howItWorksHeading">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          How It Works
        </h2>
        <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Discover how BrieflyAI transforms your documents into concise
          summaries with cutting-edge AI technology.
        </p>
      </div>

      <!-- Steps Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        ref="stepsGrid"
      >
        <!-- Step 1: Upload -->
        <div class="bg-white rounded-xl shadow-lg p-6 text-center">
          <div class="bg-amber-50 rounded-full p-3 inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-amber-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mt-4">
            Upload Your Document
          </h3>
          <p class="text-gray-600 mt-2">
            Simply upload a PDF, Word file, or any text document. Our system
            supports a wide range of formats.
          </p>
        </div>

        <!-- Step 2: Process -->
        <div class="bg-white rounded-xl shadow-lg p-6 text-center">
          <div class="bg-amber-50 rounded-full p-3 inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-amber-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mt-4">
            AI Processes Your File
          </h3>
          <p class="text-gray-600 mt-2">
            Our AI engine analyzes the content, identifies key themes, and
            extracts the most important information.
          </p>
        </div>

        <!-- Step 3: Summarize -->
        <div class="bg-white rounded-xl shadow-lg p-6 text-center">
          <div class="bg-amber-50 rounded-full p-3 inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-amber-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mt-4">
            Generate a Summary
          </h3>
          <p class="text-gray-600 mt-2">
            Within seconds, you’ll receive a beautifully formatted summary that
            highlights the key points.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Animation for heading
    gsap.from(this.$refs.howItWorksHeading, {
      scrollTrigger: {
        trigger: this.$refs.howItWorksHeading,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
    });

    // Animation for steps grid
    gsap.from(this.$refs.stepsGrid.children, {
      scrollTrigger: {
        trigger: this.$refs.stepsGrid,
        start: "top bottom-=50",
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
    });
  },
};
</script>

<style scoped>
/* Custom styles for hover effects */
.bg-white:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}
</style>