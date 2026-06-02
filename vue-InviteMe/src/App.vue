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
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Collections from "./components/Collections.vue";
import Testimonials from "./components/Testimonials.vue";
import HowItWorks from "./components/HowItWorks.vue";
import CTA from "./components/CTA.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    Header,
    Hero,
    Collections,
    Testimonials,
    HowItWorks,
    CTA,
    Footer
  }
};
</script>