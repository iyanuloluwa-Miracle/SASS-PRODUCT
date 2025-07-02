<template>
    <nav class="fixed top-0 left-0 right-0 z-50 py-2 px-4 md:px-6">
      <div class="max-w-7xl mx-auto flex items-center justify-between bg-white py-3 px-6 md:px-8 rounded-2xl shadow-md">
        <!-- Logo Section -->
        <div class="flex items-center">
          <div class="h-8 w-8 mr-2">
            <!-- Document/Notes Icon -->
           <img src="../../public/logo.svg" alt="BrieflyAI" />
          </div>
          <span class="text-gray-800 font-bold text-xl">BrieflyAI</span>
        </div>
  
        <!-- Middle Section -->
        <div class="flex items-center space-x-4 md:space-x-8">
          <a href="#" class="text-gray-800 font-semibold hover:text-[#ffd380] transition-colors">Pricing</a>
        </div>
  
        <!-- Right Section -->
        <NuxtLink to="/sign-in" class="bg-[#ffa600] text-white font-medium px-4 py-2 rounded-lg hover:bg-[#ffd380] transition-colors">
          Sign In
        </NuxtLink>
      </div>
    </nav>
  </template>
  

<script>
export default {
  name: "Navbar",
};
</script>