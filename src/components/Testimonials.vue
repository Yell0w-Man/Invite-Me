<script setup>
import sarahImg from "../assets/images/Sarah Opeyemi.jpg";
import babangidaImg from "../assets/images/babangida suliaman.jpg";
import profileImg from "../assets/images/profile-image.png";
import daniellaImg from "../assets/images/Daniella Thompson.jpg";
</script>
<template>
  <section
    class="mt-section-gap py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center"
  >
    <span
      class="bg-surface-container px-6 py-2 rounded-full font-label-md text-label-md mb-8 inline-block shadow-sm"
      >Testimonials</span
    >
    <h2 class="font-display-lg text-display-lg mb-16">
      People just like you are already using Invite Me
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
      <!-- Large card -->
      <div
        class="md:row-span-2 bg-white p-8 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between bento-card"
      >
        <p class="font-body-lg italic text-on-surface">
          "This platform was particularly helpful for handing out invitations
          for my wedding some months earlier. I couldn't have imagined doing all
          those work manually. It is really one to use"
        </p>
        <div class="flex items-center gap-4 mt-8">
          <div class="w-12 h-12 rounded-full bg-primary-fixed overflow-hidden">
            <img
              class="w-full h-full object-cover"
              data-alt="Head shot of a newly married light-skinned lady."
              :src="sarahImg"
            />
          </div>
          <div>
            <p class="font-label-md text-label-md">Sarah Opeyemi</p>
          </div>
        </div>
      </div>
      <!-- Small card 1 -->
      <div
        class="bg-white p-8 rounded-xl border border-outline-variant/30 shadow-sm bento-card"
      >
        <p class="text-on-surface italic mb-6">
          " For a fact, i can say that my daughter's birthday party was a blast.
          All the people on the invite list showed up and that was as a result
          of the swift way this aplication handles invitatios "
        </p>
        <div class="flex items-center gap-4">
          <div
            class="w-10 h-10 rounded-full bg-secondary-fixed overflow-hidden"
          >
             class="w-full h-full object-cover"
              data-alt="Head shot of a newly married light-skinned lady."
              :src="babangidaImg"
          </div>
          <div>
            <p class="font-label-md text-label-md text-sm">
              Babangida Suliaman
            </p>
          </div>
        </div>
      </div>
      <!-- Video Card Style -->
      <div
        class="md:row-span-2 relative rounded-xl overflow-hidden group cursor-pointer bento-card shadow-sm border border-outline-variant/30"
      >
        <img
          class="w-full h-full object-cover"
          data-alt="A candid cinematic shot of a young professional man in a stylish sweater vest, smiling and looking at the camera in a modern loft apartment. The lighting is natural and high-key, creating an authentic and warm mood that aligns with the corporate-modern aesthetic."
          :src="profileImg"
        />
        <div
          class="absolute inset-0 bg-black/20 flex items-center justify-center"
        ></div>
        <div
          class="absolute bottom-6 left-6 right-6 flex justify-between items-end"
        ></div>
      </div>
      <!-- Small card 2 -->
      <div
        class="bg-white p-8 rounded-xl border border-outline-variant/30 shadow-sm bento-card"
      >
        <p class="text-on-surface mb-6 italic">
          "So easy and things are done very fast and with ease."
        </p>
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 rounded-full bg-tertiary-fixed overflow-hidden">
            <img
              class="w-full h-full object-cover"
              data-alt="A focused headshot of a woman sitting at at table."
              :src="daniellaImg"
            />
          </div>
          <div>
            <p class="font-label-md text-label-md text-sm">Daniela Thomson</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
