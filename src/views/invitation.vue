<script setup>
import weddingTemplate from "@/assets/images/weddingcard.webp";
import birthdayTemplate from "@/assets/images/partycard.webp";
import corporateTemplate from "@/assets/images/gala-card.webp";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const user = JSON.parse(localStorage.getItem("user"));

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  router.push("/login");
};

const search = ref("");

const stats = [
  {
    title: "Sent",
    value: 128,
    icon: "send",
  },
  {
    title: "Drafts",
    value: 12,
    icon: "draft",
  },
  {
    title: "Scheduled",
    value: 8,
    icon: "schedule",
  },
  {
    title: "Open Rate",
    value: "84%",
    icon: "visibility",
  },
];

 const invitations = [
  {
    title: "Sarah & John's Wedding",
    template: "Elegant Emerald",
    event: "Wedding",
    recipients: 150,
    status: "Sent",
    sent: "112 Delivered",
    image: weddingTemplate,
  },
  {
    title: "Amara's Birthday",
    template: "Gold gleam",
    event: "Birthday",
    recipients: 75,
    status: "Draft",
    sent: "Not Sent",
    image: birthdayTemplate,
  },
  {
    title: "Creative Minds Conference",
    template: "Corporate Blue",
    event: "Conference",
    recipients: 300,
    status: "Scheduled",
    sent: "Tomorrow 10:00 AM",
    image: corporateTemplate,
  },
];
</script>

<template>

<div class="h-screen bg-gray-100 flex overflow-hidden">

  <!-- ================= SIDEBAR ================= -->

  <aside
    class="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col"
  >

    <div class="p-6">
      <img
        src="@/assets/images/InviteMe.png"
        class="w-28"
      >
    </div>

    <nav class="flex-1 px-4 overflow-y-auto space-y-2">

      <RouterLink
        to="/dashboard"
        class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-100"
      >
        <span class="material-symbols-outlined">
          dashboard
        </span>

        Dashboard
      </RouterLink>

      <RouterLink
        to="/events"
        class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-100"
      >
        <span class="material-symbols-outlined">
          event
        </span>

        Events
      </RouterLink>

      <RouterLink
        to="/guests"
        class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-100"
      >
        <span class="material-symbols-outlined">
          groups
        </span>

        Guests
      </RouterLink>

      <RouterLink
        to="/invitation"
        class="flex items-center gap-3 px-4 py-3 rounded-lg bg-purple-100 text-purple-700 font-semibold"
      >
        <span class="material-symbols-outlined">
          mail
        </span>

        Invitations
      </RouterLink>

      <RouterLink
        to="/rsvps"
        class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-100"
      >
        <span class="material-symbols-outlined">
          fact_check
        </span>

        RSVPs
      </RouterLink>

    </nav>

    <div class="p-4">

      <button
        @click="logout"
        class="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800"
      >
        Logout
      </button>

    </div>

  </aside>

  <!-- ================= MAIN ================= -->

  <main class="ml-64 flex-1 h-screen overflow-y-auto p-8">

    <!-- Header -->

    <div class="flex justify-between items-center mb-10">

      <div>

        <h1 class="text-3xl font-bold">

          Invitations

        </h1>

        <p class="text-gray-500 mt-2">

          Create, manage and monitor all invitations.

        </p>

      </div>

      <button
        class="flex items-center gap-2 bg-purple-700 text-white px-6 py-3 rounded-xl hover:bg-purple-800"
      >

        <span class="material-symbols-outlined">

          add

        </span>

        Create Invitation

      </button>

    </div>

    <!-- Welcome -->

    <div class="mb-8">

      <h2 class="text-xl font-semibold">

        Welcome back,

        <span class="text-purple-700">

          {{ user?.name }}

        </span>

      </h2>

    </div>

    <!-- Statistics -->

    <div class="grid md:grid-cols-4 gap-5 mb-10">

      <div
        v-for="stat in stats"
        :key="stat.title"
        class="bg-white rounded-xl border border-purple-200 p-6 shadow-sm"
      >

        <div class="flex justify-between items-center">

          <div>

            <p class="text-gray-500">

              {{ stat.title }}

            </p>

            <h2 class="text-3xl font-bold mt-2">

              {{ stat.value }}

            </h2>

          </div>

          <span
            class="material-symbols-outlined text-purple-700 text-4xl"
          >

            {{ stat.icon }}

          </span>

        </div>

      </div>

    </div>

    <!-- Search -->

    <!-- <div
      class="bg-white rounded-xl border border-purple-200 p-5 mb-8 flex flex-col md:flex-row gap-4"
    >

      <input
        v-model="search"
        type="text"
        placeholder="Search invitations..."
        class="flex-1 border rounded-lg px-4 py-3 outline-none focus:border-purple-700"
      >

      <select
        class="border rounded-lg px-4 py-3"
      >

        <option>All Status</option>

        <option>Sent</option>

        <option>Draft</option>

        <option>Scheduled</option>

      </select>

    </div> -->
            <!-- Invitation Cards -->
      <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">

        <div
          v-for="invitation in invitations"
          :key="invitation.title"
          class="bg-white rounded-2xl border border-purple-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
        >

          <!-- Preview -->
          <div class="relative h-44 overflow-hidden rounded-t-2xl">

  <img
    :src="invitation.image"
    :alt="invitation.title"
    class="w-full h-full object-cover"
  />

  <!-- Dark overlay -->
  <div class="absolute inset-0 bg-black/35"></div>

  <!-- Invitation title -->
  <div class="absolute bottom-4 left-4">

    <h3 class="text-black text-xl font-bold bg-white rounded-xl px-8">
      {{ invitation.title }}
    </h3>

    <p class="text-gray-200 text-sm">
      {{ invitation.template }}
    </p>

  </div>

</div>
          <!-- Card Body -->
          <div class="p-6">

            <div class="flex justify-between items-start mb-5">

              <div>

                <p class="text-sm text-gray-500">
                  Event Type
                </p>

                <p class="font-semibold">
                  {{ invitation.event }}
                </p>

              </div>

              <span
                class="px-3 py-1 rounded-full text-sm font-medium"
                :class="{
                  'bg-green-100 text-green-700': invitation.status === 'Sent',
                  'bg-yellow-100 text-yellow-700': invitation.status === 'Draft',
                  'bg-blue-100 text-blue-700': invitation.status === 'Scheduled'
                }"
              >

                {{ invitation.status }}

              </span>

            </div>

            <div class="space-y-4">

              <div class="flex items-center gap-3">

                <span
                  class="material-symbols-outlined text-purple-700"
                >
                  groups
                </span>

                <div>

                  <p class="text-sm text-gray-500">
                    Recipients
                  </p>

                  <p class="font-semibold">
                    {{ invitation.recipients }} Guests
                  </p>

                </div>

              </div>

              <div class="flex items-center gap-3">

                <span
                  class="material-symbols-outlined text-purple-700"
                >
                  send
                </span>

                <div>

                  <p class="text-sm text-gray-500">
                    Delivery Status
                  </p>

                  <p class="font-semibold">
                    {{ invitation.sent }}
                  </p>

                </div>

              </div>

            </div>

            <button
              class="w-full mt-8 border border-purple-700 text-purple-700 py-3 rounded-xl font-semibold hover:bg-purple-700 hover:text-white transition flex items-center justify-center gap-2"
            >

              Manage Invitation

              <span class="material-symbols-outlined">
                arrow_forward
              </span>

            </button>

          </div>

        </div>

      </div>

      
    </main>

    </div>

</template>