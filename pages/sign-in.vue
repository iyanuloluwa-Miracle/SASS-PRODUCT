<template>
  <div class="min-h-screen flex items-center justify-center">
    <SignIn
      :localization="{ signIn: { start: { title: '', subtitle: '' } } }"
      :appearance="{ variables: { colorBackground: 'transparent' } }"
    />
  </div>
</template>

<script setup lang="ts">
// Clerk SignIn component is auto-imported by @clerk/nuxt
import { useHead } from '#imports'

useHead({
  title: '' // Set to empty to remove 'Sign in' from the tab and default heading
})
</script>
