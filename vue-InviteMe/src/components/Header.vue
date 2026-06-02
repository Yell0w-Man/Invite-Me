
<template>
   <nav class="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/30">
    <div
      class="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto">
      <div class="flex items-center gap-2">
        <img alt="Invite Me Logo" class="h-12" src="assets/images/InviteMe.png">
        <span class="text-headline-md font-headline-lg font-bold text-on-background"><br></span>
      </div>
      <div class="hidden md:flex gap-stack-lg items-center">
        <a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="">
          About
        </a>
        <a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors nav-link"
          href="#features">Feature</a>
        <a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors nav-link"
          href="#sendInvite">How
          it works</a>

      </div>
      <div class="flex gap-4 items-center">
        <a target="_blank" href="login.html">
  <button
    class="hidden md:block px-6 py-2 border-2 border-primary-container text-primary-container font-label-md text-label-md rounded-xl hover:bg-primary/5 transition-all active:scale-95">
    Login
  </button>
</a>                        

<a target="_blank" href="signup.html">
  <button
    class="px-6 py-2 bg-primary-container text-white font-label-md text-label-md rounded-xl shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
    Sign Up
  </button>
</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>

