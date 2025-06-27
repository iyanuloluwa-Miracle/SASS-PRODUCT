<template>

  <DashboardNav/>
  <div class="min-h-screen bg-[#fbf2c4] pt-24">
    <div class="max-w-6xl mx-auto px-4 py-8">
      <!-- Header with Back Button -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <button 
            @click="$router.push('/profile')" 
            class="flex items-center text-gray-600 hover:text-amber-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
        </div>
        <h1 class="text-3xl font-bold text-gray-900">My Summaries</h1>
        <p class="text-gray-600 mt-2">All your document summaries in one place</p>
      </div>

      <!-- Summary Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(summary, index) in summaries" :key="index" 
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <!-- Summary Header -->
          <div class="p-6 border-b border-gray-100">
            <div class="flex items-start justify-between">
              <div class="flex items-start space-x-3">
                <div class="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">{{ summary.title }}</h3>
                  <p class="text-sm text-gray-500">{{ summary.date }}</p>
                </div>
              </div>
              <!-- Delete Button -->
              <button 
                @click="deleteSummary(index)"
                class="text-gray-400 hover:text-red-500 transition-colors"
                title="Delete summary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Summary Preview -->
          <div class="p-6">
            <div class="space-y-2">
              <div v-for="(point, pIndex) in summary.points.slice(0, 2)" :key="pIndex" 
                class="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-sm text-gray-600">{{ point }}</span>
              </div>
            </div>

            <!-- More points indicator -->
            <div v-if="summary.points.length > 2" class="mt-4 text-center">
              <span class="text-sm text-amber-500">+ {{ summary.points.length - 2 }} more points</span>
            </div>
          </div>

          <!-- Actions -->
          <div class="px-6 py-4 bg-gray-50 flex justify-between items-center">
            <span class="text-sm text-gray-500">{{ summary.fileType }}</span>
            <button class="text-amber-500 hover:text-amber-600 text-sm font-medium">
              View Full Summary
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardNav from '../DashboardNav/DashboardNav.vue'
import { ref } from 'vue'

export default {
  components:{
    DashboardNav

  },
  setup() {
    const summaries = ref([
      {
        title: "Next.js Development Guide",
        date: "March 15, 2024",
        fileType: "PDF Document",
        points: [
          "Master Next.js fundamentals including routing and SSR",
          "Build modern, performant web applications",
          "Learn advanced deployment strategies",
          "Implement responsive designs"
        ]
      },
      {
        title: "Vue.js Best Practices",
        date: "March 14, 2024",
        fileType: "PDF Document",
        points: [
          "Component composition patterns",
          "State management with Composition API",
          "Performance optimization techniques",
          "Testing strategies"
        ]
      },
      {
        title: "React Design Patterns",
        date: "March 13, 2024",
        fileType: "PDF Document",
        points: [
          "Common React patterns and anti-patterns",
          "State management solutions",
          "Component lifecycle best practices",
          "Advanced hooks usage"
        ]
      }
    ])

    const deleteSummary = (index) => {
      if (confirm('Are you sure you want to delete this summary?')) {
        summaries.value.splice(index, 1)
      }
    }

    return {
      summaries,
      deleteSummary
    }
  }
}
</script> 