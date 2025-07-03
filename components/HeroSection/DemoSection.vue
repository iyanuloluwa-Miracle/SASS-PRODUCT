<template>
  <div class="w-full bg-gray-50 py-16 md:py-24">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12" ref="demoHeading">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          See BrieflyAI in Action
        </h2>
        <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Upload any PDF and watch as AI transforms it into an easy-to-digest
          summary in seconds
        </p>
      </div>

      <!-- Demo Showcase -->
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12" ref="demoContent">
        <!-- Left Side: Before -->
        <div class="w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-4 relative" ref="beforeDemo">
          <div class="bg-gray-100 rounded-lg p-2 mb-3 text-sm font-medium text-gray-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Original Document</span>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg h-64 sm:h-80 overflow-hidden">
            <div class="p-4 overflow-y-auto h-full">
              <div class="mb-3">
                <div class="h-6 bg-gray-200 rounded-md w-3/4"></div>
              </div>
              <div class="space-y-2">
                <div class="h-3 bg-gray-100 rounded-md w-full"></div>
                <div class="h-3 bg-gray-100 rounded-md w-full"></div>
                <div class="h-3 bg-gray-100 rounded-md w-5/6"></div>
                <div class="h-3 bg-gray-100 rounded-md w-full"></div>
                <div class="h-3 bg-gray-100 rounded-md w-4/5"></div>
              </div>
              <div class="mt-4 mb-3">
                <div class="h-5 bg-gray-200 rounded-md w-1/2"></div>
              </div>
              <div class="space-y-2">
                <div class="h-3 bg-gray-100 rounded-md w-full"></div>
                <div class="h-3 bg-gray-100 rounded-md w-full"></div>
                <div class="h-3 bg-gray-100 rounded-md w-5/6"></div>
                <div class="h-3 bg-gray-100 rounded-md w-full"></div>
                <div class="h-3 bg-gray-100 rounded-md w-3/4"></div>
              </div>
              <div class="mt-4 mb-3">
                <div class="h-5 bg-gray-200 rounded-md w-2/3"></div>
              </div>
              <div class="space-y-2">
                <div class="h-3 bg-gray-100 rounded-md w-full"></div>
                <div class="h-3 bg-gray-100 rounded-md w-full"></div>
                <div class="h-3 bg-gray-100 rounded-md w-5/6"></div>
              </div>
            </div>
          </div>
          <div class="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden lg:block">
            <div class="bg-amber-500 rounded-full p-2 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
          <div class="lg:hidden flex justify-center mt-4">
            <div class="bg-amber-500 rounded-full p-2 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Right Side: After -->
        <div class="w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-4" ref="afterDemo">
          <div class="bg-amber-50 rounded-lg p-2 mb-3 text-sm font-medium text-amber-700 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Briefly Summary</span>
          </div>
          <div class="bg-white border border-amber-200 rounded-lg h-64 sm:h-80 overflow-hidden">
            <div class="p-4 overflow-y-auto h-full">
              <div class="mb-4">
                <div class="h-6 bg-amber-100 rounded-md w-1/2"></div>
              </div>
              <div class="flex items-start mb-3">
                <div class="mr-2 mt-1">
                  <div class="h-4 w-4 rounded-full bg-amber-400"></div>
                </div>
                <div class="flex-1">
                  <div class="h-4 bg-gray-100 rounded-md w-11/12"></div>
                </div>
              </div>
              <div class="flex items-start mb-3">
                <div class="mr-2 mt-1">
                  <div class="h-4 w-4 rounded-full bg-amber-400"></div>
                </div>
                <div class="flex-1">
                  <div class="h-4 bg-gray-100 rounded-md w-full"></div>
                </div>
              </div>
              <div class="flex items-start mb-3">
                <div class="mr-2 mt-1">
                  <div class="h-4 w-4 rounded-full bg-amber-400"></div>
                </div>
                <div class="flex-1">
                  <div class="h-4 bg-gray-100 rounded-md w-10/12"></div>
                </div>
              </div>
              <div class="mb-4">
                <div class="h-6 bg-amber-100 rounded-md w-2/5"></div>
              </div>
              <div class="space-y-2">
                <div class="h-3 bg-gray-100 rounded-md w-full"></div>
                <div class="h-3 bg-gray-100 rounded-md w-4/5"></div>
              </div>
            </div>
          </div>
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
    gsap.from(this.$refs.demoHeading, {
      scrollTrigger: {
        trigger: this.$refs.demoHeading,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
    });

    // Animation for before demo
    gsap.from(this.$refs.beforeDemo, {
      scrollTrigger: {
        trigger: this.$refs.demoContent,
        start: "top bottom-=50",
        toggleActions: "play none none none",
      },
      x: -30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
    });

    // Animation for after demo
    gsap.from(this.$refs.afterDemo, {
      scrollTrigger: {
        trigger: this.$refs.demoContent,
        start: "top bottom-=50",
        toggleActions: "play none none none",
      },
      x: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
    });
  },
};
</script>