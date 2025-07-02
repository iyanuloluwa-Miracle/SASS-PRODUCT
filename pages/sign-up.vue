<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 via-yellow-50 to-white">
    <div class="flex flex-col items-center w-full max-w-md p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-amber-100 hover:shadow-amber-200 transition-shadow duration-300">
      <!-- Logo and Heading -->
      <div class="flex flex-col items-center mb-6">
        <img src="/logo.svg" alt="BrieflyAI" class="h-14 w-14 mb-2 drop-shadow-md" />
        <h2 class="text-3xl font-extrabold text-gray-800 font-sans mb-1 tracking-tight">Join Briefly</h2>
        <p class="text-amber-600 text-base font-medium">Create your account to unlock document insights</p>
      </div>
      <!-- Clerk SignUp Form -->
      <SignUp
        :appearance="{
          variables: {
            colorPrimary: '#ffa600',
            colorText: '#222',
            colorBackground: 'rgba(255,255,255,0.8)',
            colorInputBackground: '#f9fafb',
            colorInputText: '#222',
            colorInputBorder: '#ffd380',
            colorAlphaShade: '#ffd380',
            fontFamily: 'Darker Grotesque, sans-serif',
            borderRadius: '1.5rem',
            colorDanger: '#e53e3e',
            colorSuccess: '#38a169',
            colorButtonText: '#fff',
            colorButtonBackground: 'linear-gradient(90deg, #ffd380 0%, #ffa600 100%)',
            colorButtonHoverBackground: 'linear-gradient(90deg, #ffa600 0%, #ffd380 100%)',
          },
          elements: {
            card: 'rounded-3xl shadow-lg border border-amber-100 bg-white/90',
            headerTitle: 'text-gray-800 font-extrabold text-2xl',
            headerSubtitle: 'text-amber-600 text-base font-medium',
            formButtonPrimary: 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white font-bold rounded-full px-6 py-2.5 shadow-md hover:from-amber-500 hover:to-amber-700 transition-all',
            formFieldInput: 'rounded-lg border border-amber-200 focus:border-amber-400 focus:ring-amber-400',
            footerAction: 'text-amber-500 hover:text-amber-600 font-semibold',
            socialButtonsBlockButton: 'rounded-full bg-white border border-amber-200 text-gray-800 font-semibold hover:bg-amber-50',
            dividerRow: 'my-4 flex items-center',
            dividerText: 'text-gray-400 text-xs font-semibold px-2',
          }
        }"
        afterSignUpUrl="/profile"
        afterSignInUrl="/profile"
      />
      <!-- Divider and Footer -->
      <div class="w-full flex items-center my-6">
        <div class="flex-grow border-t border-amber-100"></div>
        <span class="mx-3 text-gray-400 text-xs font-semibold">or</span>
        <div class="flex-grow border-t border-amber-100"></div>
      </div>
      <div class="w-full text-center mt-2">
        <span class="text-gray-500 text-sm">Already have an account?
          <NuxtLink to="/sign-in" class="text-amber-600 font-semibold hover:underline ml-1">Sign in</NuxtLink>
        </span>
      </div>
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