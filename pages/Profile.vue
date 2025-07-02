<template>
  <div v-if="!isLoaded">
    <!-- Loading spinner or message -->
    <div class="flex items-center justify-center min-h-screen">
      <span class="text-gray-500 text-lg">Checking authentication...</span>
    </div>
  </div>
  <div v-else-if="isSignedIn && user">
    <DashboardNav/>
    
    <!-- Adjust margin-top for main content -->
    <div class="min-h-screen bg-[#fbf2c4] pt-24">
      <div class="max-w-4xl mx-auto px-4 py-8">
        <!-- Header Section -->
        <div class="text-center mb-8">
          <h1 class="text-2xl font-bold text-gray-900 mb-2">
            Watch how BrieflyAI transforms your documents
          </h1>
          <p class="text-gray-600">into an easy-to-read summary!</p>
        </div>
  
  
        <!-- Main Card -->
        <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
          <!-- Document Upload Section -->
          <div class="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center mb-6"
            @dragover.prevent
            @drop.prevent="handleFileDrop"
            :class="{ 'border-amber-500': isDragging }">
            <div v-if="!selectedFile && !processing">
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p class="text-gray-600 mb-2">Drag and drop your PDF here, or</p>
              <label class="inline-block">
                <input type="file" class="hidden" accept=".pdf" @change="handleFileSelect">
                <span
                  class="bg-amber-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-amber-600 transition-colors">
                  Browse Files
                </span>
              </label>
            </div>
  
            <div v-if="selectedFile && !processing" class="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span class="text-gray-700">{{ selectedFile.name }}</span>
              </div>
              <button @click="clearFile" class="text-red-500 hover:text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
  
          <!-- Quick Overview Section -->
          <div v-if="processing || summary" class="space-y-6">
            <h2 class="text-xl font-semibold text-gray-900">Quick Overview</h2>
            
            <!-- Loading State -->
            <div v-if="processing" class="space-y-4">
              <div class="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div class="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
              <div class="h-4 bg-gray-200 rounded animate-pulse w-4/6"></div>
            </div>
  
            <!-- Summary Content -->
            <div v-if="summary" class="space-y-4">
              <!-- Course Card -->
              <div class="bg-white rounded-xl shadow-md overflow-hidden">
                <!-- Course Header -->
                <div class="p-6 border-b border-gray-100">
                  <div class="flex items-center space-x-3">
                    <div class="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-lg font-semibold text-gray-900">Mastering Next.js: Web Development Simplified</h3>
                      <p class="text-sm text-gray-500">Step up your web development game with our comprehensive Next.js course!</p>
                    </div>
                  </div>
                </div>

                <!-- Course Content -->
                <div class="p-6 space-y-4">
                  <div v-for="(point, index) in summary.points" :key="index" 
                    class="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                    <div class="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span class="text-gray-700 text-sm">{{ point }}</span>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Download Section -->
            <div v-if="summary" class="mt-8 border-t pt-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Download Files</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Original Document -->
                <button @click="downloadOriginal"
                  class="flex items-center justify-center space-x-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span class="text-gray-700">Download Original</span>
                </button>
  
                <!-- Summarized Version -->
                <button @click="downloadSummary"
                  class="flex items-center justify-center space-x-2 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span class="text-amber-700">Download Summary</span>
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Progress Dots -->
        <div class="flex justify-center space-x-2">
          <div v-for="n in 8" :key="n" 
            class="w-2 h-2 rounded-full"
            :class="[currentStep === n ? 'bg-amber-500' : 'bg-gray-300']">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, watchEffect } from 'vue'

// useAuth and useUser are auto-imported by Nuxt 3 Clerk module
const { isLoaded, isSignedIn } = useAuth()
const { user } = useUser()
const router = useRouter()

watchEffect(() => {
  if (isLoaded && !isSignedIn) {
    router.replace('/sign-in')
  }
})

const selectedFile = ref(null)
const processing = ref(false)
const isDragging = ref(false)
const currentStep = ref(1)
const summary = ref(null)

const handleFileSelect = (event) => {
  const file = event.target.files[0]
  if (file) {
    selectedFile.value = file
    processFile(file)
  }
}

const handleFileDrop = (event) => {
  const file = event.dataTransfer.files[0]
  if (file && file.type === 'application/pdf') {
    selectedFile.value = file
    processFile(file)
  }
  isDragging.value = false
}

const processFile = async (file) => {
  processing.value = true
  currentStep.value = 1

  try {
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    summary.value = {
      points: [
        'Master Next.js fundamentals including routing, data fetching, and server-side rendering',
        'Build modern, performant web applications with practical real-world examples',
        'Learn advanced deployment strategies and optimization techniques',
        'Understand state management and API integration in Next.js applications',
        'Implement responsive designs and modern UI patterns'
      ]
    }

    currentStep.value = 8
  } catch (error) {
    console.error('Error processing file:', error)
  } finally {
    processing.value = false
  }
}

const downloadOriginal = () => {
  if (selectedFile.value) {
    const url = URL.createObjectURL(selectedFile.value)
    const a = document.createElement('a')
    a.href = url
    a.download = selectedFile.value.name
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
}

const downloadSummary = () => {
  if (summary.value) {
    const content = summary.value.points.join('\n\n')
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `summary-${selectedFile.value.name.replace('.pdf', '.txt')}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
}

const clearFile = () => {
  selectedFile.value = null
  summary.value = null
  currentStep.value = 1
}
</script>

<style scoped>
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
</style> 