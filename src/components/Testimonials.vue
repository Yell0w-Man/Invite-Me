<script setup>
import sarahImg from "../assets/images/Sarah Opeyemi.jpg";
import babangidaImg from "../assets/images/babangida suliaman.jpg";
import profileImg from "../assets/images/profile-image.png";
import daniellaImg from "../assets/images/Daniella Thompson.jpg";
</script>

<template>
  <section
    class="mx-auto mt-20 max-w-[1200px] px-5 py-24 text-center md:px-16"
  >
    <span
      class="mb-8 inline-block rounded-full bg-surface-container px-6 py-2 text-[14px] font-semibold shadow-sm"
    >
      Testimonials
    </span>

    <!-- Heading -->
    <h2
      class="mb-16 font-['Hanken_Grotesk'] text-[48px] font-bold leading-[56px] tracking-[-0.02em]"
    >
      People just like you are already using Invite Me
    </h2>

    <!-- Bento Grid -->
    <div class="grid grid-cols-1 gap-6 text-left md:grid-cols-3">

      <!-- Large Card -->
      <div
        class="bento-card flex flex-col justify-between rounded-xl border border-outline-variant/30 bg-white p-8 shadow-sm md:row-span-2"
      >
        <p class="text-[18px] italic leading-[28px] text-on-surface">
          "This platform was particularly helpful for handing out invitations
          for my wedding some months earlier. I couldn't have imagined doing all
          those work manually. It is really one to use."
        </p>

        <div class="mt-8 flex items-center gap-4">
          <div
            class="h-12 w-12 overflow-hidden rounded-full bg-primary-fixed"
          >
            <img
              :src="sarahImg"
              alt="Sarah Opeyemi"
              class="h-full w-full object-cover"
            />
          </div>

          <p class="text-[14px] font-semibold">
            Sarah Opeyemi
          </p>
        </div>
      </div>

      <!-- Small Card -->
      <div
        class="bento-card rounded-xl border border-outline-variant/30 bg-white p-8 shadow-sm"
      >
        <p class="mb-6 italic text-on-surface">
          "For a fact, I can say that my daughter's birthday party was a blast.
          All the people on the invite list showed up because of how smoothly
          this application handles invitations."
        </p>

        <div class="flex items-center gap-4">
          <div
            class="h-10 w-10 overflow-hidden rounded-full bg-secondary-fixed"
          >
            <img
              :src="babangidaImg"
              alt="Babangida Suliaman"
              class="h-full w-full object-cover"
            />
          </div>

          <p class="text-sm font-semibold">
            Babangida Suliaman
          </p>
        </div>
      </div>

      <!-- Image Card -->
      <div
        class="bento-card group relative cursor-pointer overflow-hidden rounded-xl border border-outline-variant/30 shadow-sm md:row-span-2"
      >
        <img
          :src="profileImg"
          alt="Customer"
          class="h-full w-full object-cover"
        />

        <div
          class="absolute inset-0 bg-black/20"
        ></div>
      </div>

      <!-- Small Card -->
      <div
        class="bento-card rounded-xl border border-outline-variant/30 bg-white p-8 shadow-sm"
      >
        <p class="mb-6 italic text-on-surface">
          "So easy and things are done very fast and with ease."
        </p>

        <div class="flex items-center gap-4">
          <div
            class="h-10 w-10 overflow-hidden rounded-full bg-tertiary-fixed"
          >
            <img
              :src="daniellaImg"
              alt="Daniela Thomson"
              class="h-full w-full object-cover"
            />
          </div>

          <p class="text-sm font-semibold">
            Daniela Thomson
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

