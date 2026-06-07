<template>
  <div class="bg-background text-on-background font-body-md">

    <Header />

    <main>
      <Hero />
      <Collections />
      <Testimonials />
      <HowItWorks />
      <CTA />
    </main>

    <Footer />

  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import Collections from "@/components/Collections.vue";
import Testimonials from "@/components/Testimonials.vue";
import CTA from "@/components/CTA.vue";
import Footer from "@/components/Footer.vue";

</script>