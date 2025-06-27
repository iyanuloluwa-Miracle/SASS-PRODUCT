<script setup lang="ts">
// Clerk components are auto-imported
</script>

<template>
  <header>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </header>
  <main>
    <NuxtPage />
  </main>
</template>
