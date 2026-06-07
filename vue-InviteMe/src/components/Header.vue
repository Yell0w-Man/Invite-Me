<script setup>
import logoImg from "../assets/images/InviteMe.png";
</script>

<template>
  <nav
    class="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/30"
  >
    <div
      class="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto"
    >
      <div class="flex items-center gap-2">
        <img alt="Invite Me Logo" class="h-12" :src="logoImg" />
        <span
          class="text-headline-md font-headline-lg font-bold text-on-background"
          ><br
        /></span>
      </div>
      <div class="hidden md:flex gap-stack-lg items-center">
        <a
          class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
          href=""
        >
          About
        </a>
        <a
          class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors nav-link"
          href="#features"
          >Feature</a
        >
        <a
          class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors nav-link"
          href="#sendInvite"
          >How it works</a
        >
      </div>
      <div class="flex gap-4 items-center">
     <a
  href="/login"
  target="_blank"
  rel="noopener noreferrer"
  class="hidden md:block px-6 py-2 bg-primary-container text-white border border-primary-container rounded-xl hover:opacity-90 transition-all"
>
  Login
</a>

<a
  href="/register"
  target="_blank"
  rel="noopener noreferrer"
  class="px-6 py-2 bg-primary-container text-white border border-primary-container rounded-xl shadow-md hover:opacity-90 transition-all"
>
  Sign Up
</a>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
