<template>
   <section class="mt-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div class="flex justify-between items-end mb-12">
        <div>
          <h2 class="font-display-lg text-display-lg">Browse Collections</h2>
          <p class="text-on-surface-variant mt-2">Beautifully crafted templates for every milestone.</p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Card 1 -->
        <div
          class="group relative overflow-hidden rounded-xl border border-outline-variant/30 transition-all hover:border-primary-container">
          <img class="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-105"
            data-alt="A premium wedding invitation design with elegant gold foil typography and delicate floral patterns set against a soft cream background. The mood is romantic, sophisticated, and high-end, utilizing a warm light-mode aesthetic with refined textures and professional layout."
            src="assets/images/wedding-template2.jpg">
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
            <p class="font-label-md">Royal Wedding</p>
            <button class="mt-2 text-sm underline decoration-primary-container">Select Template</button>
          </div>
        </div>
        <!-- Card 2 -->
        <div
          class="group relative overflow-hidden rounded-xl border border-outline-variant/30 transition-all hover:border-primary-container">
          <img class="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-105"
            data-alt="A vibrant birthday party invitation design with bold, playful typography and colorful confetti elements. The style is modern and high-energy, using a clean white background to make primary colors like electric blue and bright yellow pop. It feels celebratory and inviting."
            src="assets/images/party-template.jpg">
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
            <p class="font-label-md">Modern Party</p>
            <button class="mt-2 text-sm underline decoration-primary-container">Select Template</button>
          </div>
        </div>
        <!-- Card 3 -->
        <div
          class="group relative overflow-hidden rounded-xl border border-outline-variant/30 transition-all hover:border-primary-container">
          <img class="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-105"
            data-alt="A minimalist corporate event invitation featuring clean architectural lines and a monochromatic palette with subtle purple accents. The design is airy and spacious, emphasizing clarity and professional reliability through sophisticated typography and generous white space."
            src="assets/images/corporate event.jpg">
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
            <p class="font-label-md">Corporate Gala</p>
            <button class="mt-2 text-sm underline decoration-primary-container">Select Template</button>
          </div>
        </div>
        <!-- Card 4 -->
        <div
          class="group relative overflow-hidden rounded-xl border border-outline-variant/30 transition-all hover:border-primary-container">
          <img class="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-105"
            data-alt="A whimsical garden party invitation with soft watercolor illustrations of botanical elements. The palette uses pastel greens and purples on a textured paper background, creating a welcoming and artistic aesthetic that feels effortless and creative."
            src="assets/images/wedding-template1.jpg">
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
            <p class="font-label-md">Garden Soiree</p>
            <button class="mt-2 text-sm underline decoration-primary-container">Select Template</button>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "Collections"
}
</script>
<style scoped>

</style>
