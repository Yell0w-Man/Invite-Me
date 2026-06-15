```vue
<script setup>
import weddingTemplate2 from "../assets/images/wedding-template2.jpg";
import partyTemplate from "../assets/images/party-template.jpg";
import corporateEvent from "../assets/images/corporate-event.jpg";
import weddingTemplate1 from "../assets/images/wedding-template1.jpg";

const collections = [
  {
    title: "Royal Wedding",
    image: weddingTemplate2,
  },
  {
    title: "Modern Party",
    image: partyTemplate,
  },
  {
    title: "Corporate Gala",
    image: corporateEvent,
  },
  {
    title: "Garden Soiree",
    image: weddingTemplate1,
  },
];
</script>

<template>
  <section class="mx-auto mt-20 max-w-[1200px] px-5 md:px-16">
    <!-- Section Header -->
    <div id="features" class="mb-12">
      <h2
        class="font-['Hanken_Grotesk'] text-[48px] font-bold leading-[56px] tracking-[-0.02em]"
      >
        Browse Collections
      </h2>

      <p
        class="mt-2 text-[18px] leading-[28px] text-on-surface-variant"
      >
        Beautifully crafted templates for every milestone.
      </p>
    </div>

    <!-- Cards -->
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="collection in collections"
        :key="collection.title"
        class="group relative overflow-hidden rounded-xl border border-outline-variant/30 transition-all duration-300 hover:-translate-y-1 hover:border-primary-container"
      >
        <img
          :src="collection.image"
          :alt="collection.title"
          class="aspect-[3/4] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div
          class="absolute inset-0 flex translate-y-4 flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <p class="text-[14px] font-semibold">
            {{ collection.title }}
          </p>

          <button
            class="mt-2 w-fit text-sm underline underline-offset-4"
          >
            Select Template
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
