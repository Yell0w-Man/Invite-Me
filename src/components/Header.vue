<script setup>
import logoImg from "../assets/images/InviteMe.png";
</script>

<template>
  <nav
    class="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-background/80 backdrop-blur-md"
  >
    <div
      class="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-5 md:px-16"
    >
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img
          :src="logoImg"
          alt="Invite Me Logo"
          class="h-12 w-auto"
        />
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden items-center gap-8 md:flex">
        <a
          href="#about"
          class="text-[14px] font-semibold text-on-surface-variant transition-colors hover:text-primary"
        >
          About
        </a>

        <a
          href="#features"
          class="text-[14px] font-semibold text-on-surface-variant transition-colors hover:text-primary"
        >
          Features
        </a>

        <a
          href="#sendInvite"
          class="text-[14px] font-semibold text-on-surface-variant transition-colors hover:text-primary"
        >
          How it works
        </a>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-4">
        <RouterLink
          to="/login"
          class="hidden rounded-xl border-2 border-primary-container px-6 py-2 text-[14px] font-semibold text-primary-container transition-all hover:bg-primary/5 active:scale-95 md:block"
        >
          Login
        </RouterLink>

        <RouterLink
          to="/register"
          class="rounded-xl bg-primary-container px-6 py-2 text-[14px] font-semibold text-white shadow-lg transition-all hover:shadow-primary/20 active:scale-95"
        >
          Sign Up
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  font-family: "Hanken Grotesk", sans-serif;
}
</style>
