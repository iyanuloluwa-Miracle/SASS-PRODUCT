<script setup>
// useAuth and useUser are auto-imported by Clerk Nuxt module
const { isSignedIn } = useAuth()
const { user } = useUser()
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-6 bg-[#fbf2c4]">
    <div class="max-w-7xl mx-auto flex items-center justify-between bg-white py-3 px-6 md:px-8 rounded-2xl shadow-md">
      <!-- Logo Section -->
      <div class="flex items-center">
        <div class="h-8 w-8 mr-2">
          <img src="../public/logo.svg" alt="BrieflyAI" />
        </div>
        <span class="text-gray-800 font-bold text-xl">BrieflyAI</span>
      </div>
      
      <!-- Navigation Links (Centered) -->
      <div class="hidden md:flex items-center justify-center flex-1 mx-4">
        <div class="flex space-x-6">
          <router-link 
            to="/" 
            class="text-gray-600 hover:text-amber-500 transition-colors"
            :class="{ 'text-amber-500': $route.path === '/' }"
          >
            Home
          </router-link>
          <router-link 
            to="/summaries" 
            class="text-gray-600 hover:text-amber-500 transition-colors"
            :class="{ 'text-amber-500': $route.path === '/summaries' }"
          >
            My Summaries
          </router-link>
        </div>
      </div>

      <!-- Right Section -->
      <div class="flex items-center space-x-4">
        <!-- Mobile Menu Button -->
        <button class="md:hidden focus:outline-none" @click="toggleMobileMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <SignedIn>
          <span class="text-gray-700">{{ user?.fullName }}</span>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <img 
            src="../../public/creator.svg" 
            alt="Profile" 
            class="h-full w-full object-cover"
          />
        </SignedOut>
      </div>
    </div>

    <!-- Mobile Menu (Hidden by default) -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-white mt-2 py-4 px-6 rounded-xl shadow-md">
      <div class="flex flex-col space-y-4">
        <router-link 
          to="/" 
          class="text-gray-600 hover:text-amber-500 transition-colors"
          :class="{ 'text-amber-500': $route.path === '/' }"
          @click="closeMobileMenu"
        >
          Home
        </router-link>
        <router-link 
          to="/summaries" 
          class="text-gray-600 hover:text-amber-500 transition-colors"
          :class="{ 'text-amber-500': $route.path === '/summaries' }"
          @click="closeMobileMenu"
        >
          My Summaries
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    }
  }
}
</script>