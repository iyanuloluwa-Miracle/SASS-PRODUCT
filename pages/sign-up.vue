<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="flex flex-col items-center w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl">
      <!-- Custom Briefly Header -->
      <div class="flex flex-col items-center mb-6">
        <img src="/logo.svg" alt="BrieflyAI" class="h-12 w-12 mb-2" />
        <h2 class="text-2xl font-bold text-gray-800 font-sans">Join Briefly</h2>
        <p class="text-gray-500 text-sm mt-1">Create your account to unlock document insights</p>
      </div>
      <SignUp
        :appearance="{
          variables: {
            colorPrimary: '#ffa600',
            colorText: '#222',
            colorBackground: '#fff',
            colorInputBackground: '#f9fafb',
            colorInputText: '#222',
            colorInputBorder: '#ffd380',
            colorAlphaShade: '#ffd380',
            fontFamily: 'Darker Grotesque, sans-serif',
            borderRadius: '1rem',
            colorDanger: '#e53e3e',
            colorSuccess: '#38a169',
            colorButtonText: '#fff',
            colorButtonBackground: 'linear-gradient(90deg, #ffd380 0%, #ffa600 100%)',
            colorButtonHoverBackground: 'linear-gradient(90deg, #ffa600 0%, #ffd380 100%)',
          },
          elements: {
            card: 'rounded-2xl shadow-lg border border-amber-100',
            headerTitle: 'text-gray-800 font-bold text-xl',
            headerSubtitle: 'text-gray-500 text-base',
            formButtonPrimary: 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white font-bold rounded-full px-6 py-2.5 shadow-md hover:from-amber-500 hover:to-amber-700 transition-all',
            formFieldInput: 'rounded-lg border border-amber-200 focus:border-amber-400 focus:ring-amber-400',
            footerAction: 'text-amber-500 hover:text-amber-600 font-semibold',
            socialButtonsBlockButton: 'rounded-full bg-white border border-amber-200 text-gray-800 font-semibold hover:bg-amber-50',
          }
        }"
        afterSignUpUrl="/Profile"
        afterSignInUrl="/Profile"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// Clerk SignUp component is auto-imported by @clerk/nuxt
import { useHead } from '#imports'

useHead({
  title: '' // Set to empty to remove 'Sign up' from the tab and default heading
})
</script> 