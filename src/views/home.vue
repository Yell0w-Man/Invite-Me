<template>
  <div class="bg-background text-on-background font-body-md">
    <Header />

    <main>
      <Hero />
      <Collections />
      <About/>
      <!-- <Testimonials /> -->
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTA />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'InviteMe — Send Invitations via WhatsApp',
  meta: [
    {
      property: 'og:title',
      content: 'InviteMe — Send Invitations via WhatsApp'
    },
    {
      property: 'og:description',
      content:
        'Create stunning invite cards, share instantly, and track RSVPs — all through WhatsApp.'
    },
    {
      property: 'og:image',
      content: 'https://www.inviteme.name.ng/og-image.jpg'
    },
    {
      property: 'og:url',
      content: 'https://www.inviteme.name.ng'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    }
  ]
})

import Header from "@/components/Header.vue";
import Collections from "@/components/Collections.vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue"; 
// import Testimonials from "@/components/Testimonials.vue";
import HowItWorks from "@/components/HowItWorks.vue"  
import Pricing from "@/components/Pricing.vue"
import FAQ from "@/components/FAQ.vue"
import CTA from "@/components/CTA.vue";
import Footer from "@/components/Footer.vue";

</script>