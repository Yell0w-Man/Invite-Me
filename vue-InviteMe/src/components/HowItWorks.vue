<template>
  <section class="mt-section-gap py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      id="sendInvite">
      <div class="text-center mb-16">
        <h2 class="font-display-lg text-display-lg">Send your invite in 3 steps</h2>
        <p class="text-on-surface-variant max-w-lg mx-auto mt-4">Simple, powerful, and designed for modern hosts.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter relative">
        <!-- Connectors hidden on mobile -->
        <div class="hidden md:block absolute top-1/2 left-1/4 w-1/2 h-[1px] bg-outline-variant/50 -z-10"></div>
        <div class="flex flex-col items-center text-center">
          <div
            class="w-12 h-12 rounded-full bg-primary-container text-white flex items-center justify-center font-headline-md mb-6 shadow-lg shadow-primary/20">
            1</div>
          <h3 class="font-headline-md text-headline-md mb-2">Pick a Design</h3>
          <p class="text-on-surface-variant">Choose from hundreds of premium templates or start from scratch.</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <div
            class="w-12 h-12 rounded-full bg-primary-container text-white flex items-center justify-center font-headline-md mb-6 shadow-lg shadow-primary/20">
            2</div>
          <h3 class="font-headline-md text-headline-md mb-2">Add Guest Details</h3>
          <p class="text-on-surface-variant">Import your contacts and customize the personal message for each.</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <div
            class="w-12 h-12 rounded-full bg-primary-container text-white flex items-center justify-center font-headline-md mb-6 shadow-lg shadow-primary/20">
            3</div>
          <h3 class="font-headline-md text-headline-md mb-2">Send &amp; Track</h3>
          <p class="text-on-surface-variant">Click send via WhatsApp and watch the RSVPs roll in live.</p>
        </div>
      </div>
    </section>    
</template>

<script>
export default {
  name: "HowItWorks"
}
</script>