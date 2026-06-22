<script setup>
import heroImage from "@/assets/images/bento-card-image.png";
</script>

<template>
  <section class="mx-auto max-w-[1200px] px-5 pt-32 md:px-16">
    <div class="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
      
      <div class="md:col-span-12">
        <span
          class="inline-block rounded-full bg-primary/10 px-4 py-1 text-[12px] font-medium uppercase tracking-wide text-primary-container"
        >
          New Experience
        </span>

        <h1
          class="mt-6 font-['Hanken_Grotesk'] text-[48px] font-bold leading-[56px] tracking-[-0.02em] md:text-[64px] md:leading-[72px]"
        >
          Send Invitations via Whatsapp.
        </h1>

        <p
          class="mt-8 max-w-xl text-[18px] leading-[28px] text-on-surface-variant"
        >
          Create stunning, mobile-first invitations sent directly via WhatsApp. Manage guests, track RSVPs, and share the excitement in seconds.
        
        </p>

        <!-- <button
          class="mt-10 flex items-center gap-2 rounded-xl bg-primary-container px-8 py-4 text-[24px] font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Create Now
        </button> -->
      </div>

      <!-- Right Image -->
      <!-- <div class="mt-10 flex justify-center md:col-span-6 md:mt-0 md:justify-end">
        <img
          :src="heroImage"
          alt="Woman using phone"
          class="w-full max-w-[500px] object-contain md:max-w-[600px]"
        /> -->
      <!-- </div> -->
    </div>
  </section>
</template>

