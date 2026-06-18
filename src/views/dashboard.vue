<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const user = JSON.parse(localStorage.getItem("user"));

const goHome = () => {
  router.push("/");
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  router.push("/login");
};

const stats = [
  { title: "Upcoming Events", value: 3 },
  { title: "Total Guests", value: 142 },
  { title: "RSVPs Received", value: 98 },
  { title: "Pending RSVPs", value: 44 },
];

const events = [
  {
    title: "Sarah & John's Wedding",
    date: "24th August 2026 4:00 PM",
    location: "Lagos, Nigeria",
    rsvp: "112/150",
    percent: 75,
  },
  {
    title: "Amara's 25th Birthday",
    date: "12th July 2026 6:00 PM",
    location: "Ibadan, Nigeria",
    rsvp: "45/75",
    percent: 60,
  },
  {
    title: "Creative Minds Conference",
    date: "5th September 2026 • 10:00 AM",
    location: "Abuja, Nigeria",
    rsvp: "240/300",
    percent: 80,
  },
];
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex">

    <aside class="w-64 bg-white border-r border-gray-200 flex flex-col">

      <div class="p-6">
        <img src="@/assets/images/InviteMe.png" alt="InviteMe" class="w-28" />
      </div>

      <nav class="flex-1 px-4">
        <ul class="space-y-2">
          <li>
            <div class="bg-purple-100 text-purple-700 px-4 py-3 rounded-lg font-medium"> <a href="">Dashboard</a>

            </div>
          </li>

          <li>
            <div class="text-gray-600 px-4 py-3">
              <a href="">Events</a>

            </div>
          </li>

          <li>
            <div class="text-gray-600 px-4 py-3">
              <a href="">Guests</a>

            </div>
          </li>

          <li>
            <div class="text-gray-600 px-4 py-3">
              <a href=""> Invitations</a>

            </div>
          </li>

          <li>
            <div class="text-gray-600 px-4 py-3">
              <a href="">RSVPs</a>

            </div>
          </li>

          <!-- <li>
            <div class="text-gray-600 px-4 py-3">
              <a href="">Settings</a>

            </div>
          </li> -->
        </ul>
      </nav>
      <div class="p-4 space-y-3">

        <button @click="goHome"
          class="w-full border border-purple-700 text-purple-700 py-2 rounded-lg hover:bg-purple-50">
           Back to Home
        </button>

        <button @click="logout" class="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800">
          Logout
        </button>

      </div>
    </aside>

    <main class="flex-1 p-8">

      <!-- HEADER -->
      <div class="flex justify-between items-center mb-8">

        <div>
          <h1 class="text-3xl font-bold">
            Welcome back, {{ user?.name }} ! 
          </h1>

          <p class="text-gray-500 mt-1">
            Your activities at a glance.
          </p>
        </div>

        <button class="bg-purple-700 text-white px-5 py-3 rounded-lg hover:bg-purple-800">
          + Create Event
        </button>

      </div>

      <!-- STATS -->
      <div class="grid md:grid-cols-4 gap-5 mb-8">

        <div v-for="stat in stats" :key="stat.title" class="bg-white rounded-xl shadow-sm border p-5">
          <p class="text-gray-500 text-sm">
            {{ stat.title }}
          </p>

          <h2 class="text-3xl font-bold mt-2">
            {{ stat.value }}
          </h2>
        </div>

      </div>

      <!-- EVENTS -->
      <div class="bg-white rounded-xl border shadow-sm">

        <div class="flex justify-between items-center px-6 py-4 border-b">
          <h2 class="font-bold text-lg">
            Upcoming Events
          </h2>

          <button class="text-purple-700 font-medium">
            View All
          </button>
        </div>

        <div class="divide-y">

          <div v-for="event in events" :key="event.title" class="p-6 flex justify-between items-center">
            <div>
              <h3 class="font-semibold text-lg">
                {{ event.title }}
              </h3>

              <p class="text-gray-500">
                {{ event.date }}
              </p>

              <p class="text-gray-500">
                {{ event.location }}
              </p>
            </div>

            <div class="text-right">
              <p class="text-purple-700 font-bold text-xl">
                {{ event.percent }}%
              </p>

              <p class="text-gray-500">
                {{ event.rsvp }} RSVPs
              </p>
            </div>
          </div>

        </div>

      </div>

    </main>

  </div>
</template>