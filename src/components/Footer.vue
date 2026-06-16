<template>
  <footer class="bg-[#efedf5] px-6 md:px-12 py-10 mt-section-gap">
    <div class="max-w-[1400px] mx-auto bg-white rounded-[40px] p-8 md:p-12 shadow-sm">

      <!-- TOP SECTION -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">

        <!-- LEFT CARD -->
        <div class="lg:col-span-3">
          <div
            class="relative overflow-hidden rounded-[30px] h-[320px] group bg-black p-6 flex flex-col justify-between">

            <div>
              <span class="text-white text-sm tracking-wide uppercase">
                Enjoy A New Experience
              </span>
            </div>

            <div class="flex-1 flex items-center">
              <h1 class="text-[72px] md:text-[84px] leading-none font-black tracking-[-5px]">
                <span class="text-white">Invite</span>
                <span class="text-purple-600">
                  Me
                </span>
              </h1>
            </div>

            <div class="flex items-end justify-between">
              <div>
                <h3 class="text-white text-3xl leading-none font-semibold">
                  Explore<br />More
                </h3>
              </div>

              <button
                class="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition duration-300">
                <a href="https://linktr.ee/InviteMeNG" target="_blank">
                  <span class="material-symbols-outlined text-3xl">
                    north_east
                  </span>
                </a>
              </button>
            </div>

            <div
              class="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-500/10 pointer-events-none">
            </div>
          </div>

          <div class="mt-8 text-lg space-y-2 text-on-surface">
            <p>Lagos — Nigeria</p>
          </div>
        </div>

        <!-- CENTER CONTENT -->
        <div class="lg:col-span-6 flex flex-col justify-between">

          <div>
            <h2 class="text-[48px] md:text-[72px] leading-[1] font-semibold tracking-tight text-black max-w-4xl">
              We do invitations
              for all events.
            </h2>

            <div class="flex flex-wrap gap-4 mt-8">

              <div
                class="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-3 hover:border-primary transition">
                <span class="material-symbols-outlined text-primary text-[20px]">
                  group
                </span>
                <span class="font-medium">
                  Guest Management
                </span>
              </div>

              <div
                class="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-3 hover:border-orange-400 transition">
                <span class="material-symbols-outlined text-orange-500 text-[20px]">
                  bolt
                </span>
                <span class="font-medium">
                  Priority Events
                </span>
              </div>

              <div
                class="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-3 hover:border-sky-400 transition">
                <span class="material-symbols-outlined text-sky-500 text-[20px]">
                  verified
                </span>
                <span class="font-medium">
                  RSVP Tracking
                </span>
              </div>

            </div>
          </div>

          <div class="flex flex-col md:flex-row justify-between gap-6 mt-12 text-lg">
            <p class="text-on-surface">
              hello@inviteme.name.ng
            </p>

            <p class="text-on-surface">
              @{{currentYear}} Invite Me
            </p>
          </div>

        </div>

        <!-- RIGHT CONTENT -->
        <div class="lg:col-span-3 flex flex-col justify-between">

          <div class="grid grid-cols-2 gap-6 text-lg">

            <div class="space-y-4">
              <a target="_blank" href="https://invite-me.notion.site/FAQ-161a86573d90820aa9f901c04e0c1f18?pvs=25"
                class="block hover:text-primary transition">
                FAQ
              </a>

              <a target="_blank" href="https://invite-me.notion.site/InviteMe-a27a86573d9082ad80fc81d9ba0c0405?pvs=143"
                class="block hover:text-primary transition">
                About
              </a>
            </div>

            <div class="space-y-4 text-right">
              <a target="_blank" href="https://x.com/InviteMe707" class="block hover:text-primary transition">
                X (Twitter) ↗
              </a>

              <a target="_blank" href="https://www.instagram.com/invite_me712/" class="block hover:text-primary transition">
                Instagram ↗
              </a>
            </div>

          </div>

        </div>

      </div>

      <div class="border-t border-gray-200 my-12"></div>

      <div class="flex flex-col md:flex-row justify-between items-center gap-6 text-lg">

        <a target="_blank" href="https://invite-me.notion.site/Privacy-Policy-f16a86573d908220866b81c915c3dca0?pvs=25"
          class="hover:text-primary transition">
          Privacy Policy
        </a>

        <p>EST — {{currentYear}}</p>

        <a target="_blank" href="https://invite-me.notion.site/Terms-Of-Service-b9ba86573d9083acb20e01db331ede5f?pvs=25"
          class="hover:text-primary transition">
          Terms & Conditions
        </a>

      </div>

      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-10">
        <p class="text-lg text-on-surface">
          ©{{currentYear}} All Right Reserved
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup>
 const currentYear = new Date().getFullYear();
</script>