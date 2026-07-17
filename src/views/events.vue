 <script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const user = JSON.parse(localStorage.getItem("user"));

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  router.push("/login");
};

const events = [
  {
    title: "Sarah & John's Wedding",
    date: "24 August 2026 • 4:00 PM",
    location: "Lagos, Nigeria",
    guests: 150,
    rsvp: 112,
    percent: 75,
  },
  {
    title: "Amara's Birthday",
    date: "12 July 2026 • 6:00 PM",
    location: "Ibadan, Nigeria",
    guests: 75,
    rsvp: 45,
    percent: 60,
  },
  {
    title: "Creative Minds Conference",
    date: "5 September 2026 • 10:00 AM",
    location: "Abuja, Nigeria",
    guests: 300,
    rsvp: 240,
    percent: 80,
  },
];
</script>

<template>
  <div class="h-screen bg-gray-100 flex overflow-hidden">

    <!-- SIDEBAR -->
    <aside
      class="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col"
    >
      <div class="p-6">
        <img
          src="@/assets/images/InviteMe.png"
          alt="InviteMe"
          class="w-28"
        />
      </div>

      <nav class="flex-1 px-4 overflow-y-auto">

        <RouterLink
          target="_blank"      
          to="/dashboard"
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-purple-100 hover:text-purple-700 mb-2"
        >
          <span class="material-symbols-outlined">
            dashboard
          </span>

          Dashboard
        </RouterLink>

        <RouterLink
          to="/events"
          class="flex items-center gap-3 px-4 py-3 rounded-lg bg-purple-100 text-purple-700 font-semibold mb-2"
        >
          <span class="material-symbols-outlined">
            event
          </span>

          Events
        </RouterLink>

        <a
          href="#"
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-purple-100 hover:text-purple-700 mb-2"
        >
          <span class="material-symbols-outlined">
            groups
          </span>

          Guests
        </a>

          <RouterLink
        target="_blank"      
        to="/invitation"
        class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-purple-100 hover:text-purple-700 mb-2"
      >
        <span class="material-symbols-outlined">
          mail
        </span>

         Invitation
      </RouterLink>

        <a
          href="#"
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-purple-100 hover:text-purple-700"
        >
          <span class="material-symbols-outlined">
            fact_check
          </span>

          RSVPs
        </a>

      </nav>

      <div class="p-4">

        <button
          @click="logout"
          class="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition"
        >
          Logout
        </button>

      </div>

    </aside>

    <!-- MAIN CONTENT -->
    <main class="ml-64 flex-1 h-screen overflow-y-auto p-8">

      <!-- HEADER -->
      <div class="flex justify-between items-center mb-10">

        <div>
          <h1 class="text-3xl font-bold text-gray-900">
            Events
          </h1>

          <p class="text-gray-500 mt-1">
            Manage all your invitations in one place.
          </p>
        </div>

        <button
          class="flex items-center gap-2 bg-purple-700 text-white px-6 py-3 rounded-xl hover:bg-purple-800 transition"
        >
          <span class="material-symbols-outlined">
            add
          </span>

          Create Event
        </button>

      </div>

      <!-- WELCOME -->
      <div class="mb-8">
        <h2 class="text-xl font-semibold">
          Welcome back,
          <span class="text-purple-700">
            {{ user?.name }}
          </span>
        </h2>
      </div>

      <!-- EVENT GRID -->
      <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">

        <div
          v-for="event in events"
          :key="event.title"
          class="bg-white rounded-2xl border border-purple-200 shadow-sm hover:shadow-lg transition p-6"
        >

          <!-- Title -->
          <h2 class="text-xl font-bold text-gray-900 mb-5">
            {{ event.title }}
          </h2>

          <!-- Details -->
          <div class="space-y-3 text-gray-600">

            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-purple-700">
                calendar_month
              </span>

              {{ event.date }}
            </div>

            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-purple-700">
                location_on
              </span>

              {{ event.location }}
            </div>

            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-purple-700">
                groups
              </span>

              {{ event.guests }} Guests
            </div>

          </div>

          <!-- RSVP -->
          <div class="mt-6">

            <div class="flex justify-between mb-2">

              <span class="font-medium">
                RSVP Progress
              </span>

              <span class="text-purple-700 font-bold">
                {{ event.percent }}%
              </span>

            </div>

            <!-- <div class="w-full h-3 rounded-full bg-gray-200">

              <div
                class="h-3 rounded-full bg-purple-700"
                :style="{ width: event.percent + '%' }"
              ></div>

            </div> -->

            <p class="text-sm text-gray-500 mt-2">
              {{ event.rsvp }} / {{ event.guests }} Guests Responded
            </p>

          </div>

          <!-- Button -->
          <button
            class="w-full mt-6 border border-purple-700 text-purple-700 py-3 rounded-xl font-medium hover:bg-purple-700 hover:text-white transition"
          >
            Manage Invitations
          </button>

        </div>

      </div>

    </main>

  </div>
</template>                