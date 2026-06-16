<script setup>
import aboutImage from "@/assets/images/about-image.png"; 
</script>
<template>
    <section id="about" class="mx-auto mt-20 max-w-[1200px] px-5 py-24 md:px-16">
        <div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

            <div class="flex justify-center">
                <div class="relative overflow-hidden rounded-3xl shadow-lg w-full max-w-[550px] h-[600px]">
                    <img :src="aboutImage" alt="About Invite Me" class="h-full w-full object-cover" />

                    <!-- Dark gradient for readability -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    <!-- Founder Info -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 class="text-2xl font-bold">
                            Ayobamidele Ewetuga
                        </h3>

                        <i class="mt-1 text-white/80 italic">
                            Founder & CEO
                        </i>
                    </div>
                </div>
            </div>

            <div>
                <span class="inline-block rounded-full bg-primary/10 px-4 py-1 text-[14px] font-semibold text-primary">
                    About Invite Me
                </span>

                <h2 class="mt-6 text-[48px] font-bold leading-[56px] tracking-[-0.02em] text-on-surface">
                    Making invitations simple, beautiful, and effortless.
                </h2>

                <p class="mt-6 text-[18px] leading-[28px] text-on-surface-variant">
                    Invite Me was created to remove the stress of event planning.
                    Whether you're organizing a wedding, birthday celebration,
                    corporate event, or private gathering, our platform helps you
                    create stunning invitations and deliver them instantly through
                    WhatsApp.
                </p>

                <p class="mt-4 text-[18px] leading-[28px] text-on-surface-variant">
                    From guest management to RSVP tracking, everything is designed
                    to help you save time and focus on creating memorable
                    experiences.
                </p>

                <!-- Stats -->
                <!-- <div class="mt-10 grid grid-cols-3 gap-6">

          <div>
            <h3 class="text-[32px] font-bold text-primary">
              10K+
            </h3>
            <p class="text-sm text-on-surface-variant">
              Invitations Sent
            </p>
          </div>

          <div>
            <h3 class="text-[32px] font-bold text-primary">
              500+
            </h3>
            <p class="text-sm text-on-surface-variant">
              Events Hosted
            </p>
          </div>

          <div>
            <h3 class="text-[32px] font-bold text-primary">
              98%
            </h3>
            <p class="text-sm text-on-surface-variant">
              Satisfaction
            </p>
          </div>

        </div> -->
            </div>

        </div>

        <div class="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">

            <div
                class="rounded-3xl border border-outline-variant/20 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                    <span class="material-symbols-outlined text-3xl text-purple-600">
                        visibility
                    </span>
                </div>

                <h3 class="text-[24px] font-semibold text-on-surface">
                    Our Vision
                </h3>

                <p class="mt-3 text-[16px] leading-[24px] text-on-surface-variant">
                    Make event planning effortless and accessible for everyone.
                </p>
            </div>

            <div
                class="rounded-3xl border border-outline-variant/20 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
                    <span class="material-symbols-outlined text-3xl text-pink-600">
                        track_changes
                    </span>
                </div>

                <h3 class="text-[24px] font-semibold text-on-surface">
                    Our Mission
                </h3>

                <p class="mt-3 text-[16px] leading-[24px] text-on-surface-variant">
                    Help hosts create, manage, and send invitations with ease.
                </p>
            </div>

            <div
                class="rounded-3xl border border-outline-variant/20 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <span class="material-symbols-outlined text-3xl text-emerald-600">
                        shield
                    </span>
                </div>

                <h3 class="text-[24px] font-semibold text-on-surface">
                    Our Promise
                </h3>

                <p class="mt-3 text-[16px] leading-[24px] text-on-surface-variant">
                    Simple, reliable, and stress-free invitation management.
                </p>
            </div>

        </div>
    </section>
</template>
