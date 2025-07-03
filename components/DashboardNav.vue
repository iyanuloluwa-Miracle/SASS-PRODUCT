<script setup>
import { ref } from 'vue'

// useAuth and useUser are auto-imported by Clerk Nuxt module
const { isSignedIn } = useAuth()
const { user } = useUser()

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Mobile menu functions
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
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
      <div class="flex items-center justify-center flex-1 mx-4">
        <div class="flex space-x-6">
          <NuxtLink 
            to="/" 
            class="text-gray-600 hover:text-amber-500 transition-colors"
            :class="{ 'text-amber-500': $route.path === '/' }"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/Summaries" 
            class="text-gray-600 hover:text-amber-500 transition-colors"
            :class="{ 'text-amber-500': $route.path === '/Summaries' }"
          >
            My Summaries
          </NuxtLink>
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
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden fixed inset-0 z-50 bg-white/95 flex flex-col items-center justify-center font-sans"
    >
      <div class="w-full max-w-xs space-y-6 text-center">
        <NuxtLink
          to="/"
          class="block text-lg font-semibold py-3 rounded-lg text-gray-700 hover:text-amber-500 transition-colors"
          :class="{ 'text-amber-500': $route.path === '/' }"
          @click="closeMobileMenu"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/Profile"
          class="block text-lg font-semibold py-3 rounded-lg text-gray-700 hover:text-amber-500 transition-colors"
          :class="{ 'text-amber-500': $route.path === '/Profile' }"
          @click="closeMobileMenu"
        >
          Upload
        </NuxtLink>
        <NuxtLink
          to="/Summaries"
          class="block text-lg font-semibold py-3 rounded-lg text-gray-700 hover:text-amber-500 transition-colors"
          :class="{ 'text-amber-500': $route.path === '/Summaries' }"
          @click="closeMobileMenu"
        >
          My Summaries
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

