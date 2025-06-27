<template>
  <footer
    class="w-full bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 py-12 md:py-16 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <pattern id="grid-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" stroke-width="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Logo Banner -->
      <div class="flex justify-center mb-12">
        <div class="bg-gray-900 px-6 py-3 rounded-full shadow-lg border border-gray-700 inline-flex items-center">
          <span class="text-2xl font-bold text-white">Briefly<span class="text-amber-500">AI</span></span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- About Section -->
        <div class="transform transition-all duration-300 hover:-translate-y-1">
          <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
            <span class="bg-amber-500 w-2 h-8 mr-3 rounded"></span>
            About BrieflyAI
          </h3>
          <p class="text-gray-400 leading-relaxed">
            BrieflyAI transforms lengthy documents into concise, actionable summaries.
            Powered by cutting-edge AI, we help you save time and focus on what matters most.
          </p>
          <button class="mt-4 text-amber-500 hover:text-amber-400 font-medium flex items-center group">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Quick Links -->
        <div class="transform transition-all duration-300 hover:-translate-y-1">
          <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
            <span class="bg-amber-500 w-2 h-8 mr-3 rounded"></span>
            Quick Links
          </h3>
          <ul class="space-y-3">
            <li v-for="(link, index) in quickLinks" :key="index">
              <a :href="link.url" class="group flex items-center">
                <span
                  class="w-0 h-0.5 bg-amber-500 mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                <span class="hover:text-amber-500 transition-colors duration-300">{{ link.name }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Subscribe Section (New) -->
        <div class="transform transition-all duration-300 hover:-translate-y-1">
          <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
            <span class="bg-amber-500 w-2 h-8 mr-3 rounded"></span>
            Stay Updated
          </h3>
          <p class="text-gray-400 mb-4">Get the latest AI news and product updates</p>
          <div class="flex flex-col sm:flex-row">
            <input type="email" placeholder="Enter your email" aria-label="Subscribe email input"
              class="bg-gray-800 text-white rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 border border-gray-700 flex-grow" />
            <button type="button"
              class="bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium px-4 py-2 transition-colors duration-300 rounded-r"
              aria-label="Subscribe button">
              Subscribe
            </button>
          </div>
        </div>

        <!-- Social Links -->
        <div class="transform transition-all duration-300 hover:-translate-y-1">
          <h3 class="text-xl font-semibold text-white mb-4 flex items-center">
            <span class="bg-amber-500 w-2 h-8 mr-3 rounded"></span>
            Follow Us
          </h3>
          <div class="flex flex-wrap gap-3">
            <a v-for="(social, index) in socialLinks" :key="index" :href="social.url"
              :aria-label="`Follow us on ${social.name}`" class="social-icon-wrapper">
              <component :is="social.icon" class="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <!-- Creator Bio -->
      <div class="mt-16 border-t border-gray-700 pt-8">
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6 lg:mb-0">
            <div class="relative group">
              <div class="absolute inset-0 bg-amber-500 rounded-full animate-pulse group-hover:animate-none opacity-30">
              </div>
              <img src="../public/creator.svg" alt="Dina Iyanuloluwa"
                class="w-20 h-20 rounded-full object-cover border-2 border-amber-500 relative z-10" />
            </div>
            <div class="text-center sm:text-left">
              <p class="text-white font-medium text-lg">Dina Iyanuloluwa</p>
              <p class="text-gray-400">Software Engineer & Creator of BrieflyAI</p>
              <div class="flex items-center justify-center sm:justify-start mt-2">
                <a href="#" class="text-amber-500 hover:text-amber-400 text-sm mr-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact
                </a>
                <a href="#" class="text-amber-500 hover:text-amber-400 text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Portfolio
                </a>
              </div>
            </div>
          </div>

          <div class="text-center lg:text-right">
            <p class="text-gray-400">&copy; {{ new Date().getFullYear() }} BrieflyAI. All rights reserved.</p>
            <div class="flex items-center justify-center lg:justify-end mt-2 text-sm text-gray-500 space-x-4">
              <a href="#" class="hover:text-gray-300 transition-colors duration-300">Privacy</a>
              <span class="w-1 h-1 bg-gray-600 rounded-full"></span>
              <a href="#" class="hover:text-gray-300 transition-colors duration-300">Terms</a>
              <span class="w-1 h-1 bg-gray-600 rounded-full"></span>
              <a href="#" class="hover:text-gray-300 transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll to top button -->
    <button @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-amber-500 hover:bg-amber-600 text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 opacity-80 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
      aria-label="Scroll to top">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      quickLinks: [
        { name: 'Home', url: '#' },
        { name: 'Features', url: '#' },
        { name: 'Pricing', url: '#' },
        { name: 'Blog', url: '#' },
        { name: 'Sign in', url: '#' }
      ],
      socialLinks: [
        {
          name: 'Twitter',
          url: '#',
          icon: 'mdi-twitter'
        },
        {
          name: 'Instagram',
          url: '#',
          icon: 'mdi-instagram'
        },
        {
          name: 'LinkedIn',
          url: '#',
          icon: 'mdi-linkedin'
        },
      ]
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style lang="postcss">
.social-icon-wrapper {
  @apply p-2 bg-gray-800 rounded-full shadow-md hover:bg-gray-700 transition;
}

.social-icon {
  @apply w-6 h-6 text-gray-300 hover:text-amber-500;
}
</style>