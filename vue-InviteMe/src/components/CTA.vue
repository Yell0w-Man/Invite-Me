<template>
    <section class="mt-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-24">
      <div class="bg-primary-container rounded-3xl p-12 md:p-24 text-center text-white relative overflow-hidden">
        <!-- Abstract decorative element -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <h1 class="font-display-lg text-display-lg mb-6 relative z-10" id="about">Start sending your invites today</h1>
        <p class="font-body-lg text-body-lg mb-10 opacity-90 relative z-10 max-w-xl mx-auto">Join over 10,000 users
          creating unforgettable experiences with every message sent.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <button
            class="px-10 py-5 bg-white/10 border border-white/20 backdrop-blur-sm text-white font-headline-md text-headline-md rounded-xl hover:bg-white/20 transition-all">Contact
            Sales</button>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "CTA"
}
</script>