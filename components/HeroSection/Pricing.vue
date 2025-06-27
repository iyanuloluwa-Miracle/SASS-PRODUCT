<template>
  <div class="w-full bg-gray-50 py-16 md:py-24">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12" ref="pricingHeading">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the plan that fits your needs. No hidden fees, no surprises.
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8" ref="pricingCards">
        <!-- Free Plan -->
        <div class="bg-white rounded-xl shadow-lg p-8 text-center">
          <div class="bg-amber-50 rounded-full p-3 inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mt-4">Basic Plan</h3>
          <p class="text-gray-600 mt-2">Perfect for Ocassional Use.</p>
          <div class="my-6">
            <span class="text-4xl font-bold text-gray-800">$5</span>
            <span class="text-gray-600">/month</span>
          </div>
          <ul class="text-left text-gray-600 space-y-2">
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 mr-2" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span>5 free summaries per month</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 mr-2" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span>Standard pricing speed</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 mr-2" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span>Email Support</span>
            </li>
          </ul>

          <router-link to="/sign-in">
            <button
              class="mt-6 w-full px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white font-medium hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg">
              Get Started
            </button>
          </router-link>
        </div>

        <!-- Pro Plan -->
        <div class="bg-white rounded-xl shadow-lg p-8 text-center border-2 border-amber-500">
          <div class="bg-amber-50 rounded-full p-3 inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mt-4">Pro Plan</h3>
          <p class="text-gray-600 mt-2">
            Ideal for professionals and teams who need more power.
          </p>
          <div class="my-6">
            <span class="text-4xl font-bold text-gray-800">$15</span>
            <span class="text-gray-600">/month</span>
          </div>
          <ul class="text-left text-gray-600 space-y-2">
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 mr-2" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span>Unlimited PDF summaries</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 mr-2" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span>24/7 Priority Support</span>
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 mr-2" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span>Markdown Export</span>
            </li>


            
          </ul>
          <router-link to="/sign-in">
            <button
              class="mt-6 w-full px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white font-medium hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg">
              Get Started
            </button>
          </router-link>
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
    gsap.from(this.$refs.pricingHeading, {
      scrollTrigger: {
        trigger: this.$refs.pricingHeading,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
    });

    // Animation for pricing cards
    gsap.from(this.$refs.pricingCards.children, {
      scrollTrigger: {
        trigger: this.$refs.pricingCards,
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
/* Custom hover effect for pricing cards */
.bg-white:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}
</style>
