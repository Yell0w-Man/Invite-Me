<template>
  <section id="sendInvite" class="mx-auto mt-20 max-w-[1200px] px-5 py-24 md:px-16">
    <!-- Section Header -->
    <div class="mb-16 text-center">
      <h2 class="font-['Hanken_Grotesk'] text-[48px] font-bold leading-[56px] tracking-[-0.02em] text-on-surface">
        Send your invite in 3 steps
      </h2>

      <p class="mx-auto mt-4 max-w-lg text-[18px] leading-[28px] text-on-surface-variant">
        Simple, powerful, and designed for modern hosts.
      </p>
    </div>

    <!-- Steps -->
    <div class="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
      <!-- Connector -->
      <div class="absolute left-1/4 top-6 hidden h-px w-1/2 bg-outline-variant md:block"></div>

      <!-- Step 1 -->
      <div class="flex flex-col items-center text-center">
        <div
          class="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container text-lg font-bold text-white shadow-lg">
          1
        </div>

        <h3 class="mb-3 text-[24px] font-semibold leading-[32px] text-on-surface">
          Pick a Design
        </h3>

        <p class="max-w-xs text-[16px] leading-[24px] text-on-surface-variant">
          Choose from hundreds of premium templates or start from scratch.
        </p>
      </div>

      <!-- Step 2 -->
      <div class="flex flex-col items-center text-center">
        <div
          class="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container text-lg font-bold text-white shadow-lg">
          2
        </div>

        <h3 class="mb-3 text-[24px] font-semibold leading-[32px] text-on-surface">
          Add Guest Details
        </h3>

        <p class="max-w-xs text-[16px] leading-[24px] text-on-surface-variant">
          Import your contacts and personalize each invitation in seconds.
        </p>
      </div>

      <!-- Step 3 -->
      <div class="flex flex-col items-center text-center">
        <div
          class="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container text-lg font-bold text-white shadow-lg">
          3
        </div>

        <h3 class="mb-3 text-[24px] font-semibold leading-[32px] text-on-surface">
          Send & Track
        </h3>

        <p class="max-w-xs text-[16px] leading-[24px] text-on-surface-variant">
          Send through WhatsApp and monitor RSVPs as responses come in.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>
