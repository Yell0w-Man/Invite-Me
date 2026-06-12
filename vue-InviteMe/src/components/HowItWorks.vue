<template>
  <section
    id="sendInvite"
    class="max-w-7xl mx-auto px-6 md:px-16 py-24 mt-20"
  >
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-5xl font-bold text-on-surface">
        Send your invite in 3 steps
      </h2>

      <p class="text-on-surface-variant max-w-lg mx-auto mt-4">
        Simple, powerful, and designed for modern hosts.
      </p>
    </div>

    <div class="relative grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Connector line -->
      <div
        class="hidden md:block absolute top-6 left-1/4 w-1/2 h-px bg-outline-variant -z-10"
      ></div>

      <!-- Step 1 -->
      <div class="flex flex-col items-center text-center">
        <div
          class="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-lg font-bold mb-6 shadow-lg"
        >
          1
        </div>

        <h3 class="text-xl font-semibold mb-2">
          Pick a Design
        </h3>

        <p class="text-on-surface-variant">
          Choose from hundreds of premium templates or start from scratch.
        </p>
      </div>

      <!-- Step 2 -->
      <div class="flex flex-col items-center text-center">
        <div
          class="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-lg font-bold mb-6 shadow-lg"
        >
          2
        </div>

        <h3 class="text-xl font-semibold mb-2">
          Add Guest Details
        </h3>

        <p class="text-on-surface-variant">
          Import your contacts and customize the personal message for each.
        </p>
      </div>

      <!-- Step 3 -->
      <div class="flex flex-col items-center text-center">
        <div
          class="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-lg font-bold mb-6 shadow-lg"
        >
          3
        </div>

        <h3 class="text-xl font-semibold mb-2">
          Send &amp; Track
        </h3>

        <p class="text-on-surface-variant">
          Click send via WhatsApp and watch the RSVPs roll in live.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HowItWorks",
};
</script>