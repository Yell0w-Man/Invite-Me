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
</script>

<template>
  <div class="min-h-screen bg-white">

    <!-- HEADER (TRANSPARENT NOW) -->
    <div class="w-full">
      <div class="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

        <div>
            <img
              src="@/assets/images/InviteMe.png"
              alt="InviteMe"
              class="w-24"
            />
            <p class="text-gray-700 text-lg">
          Welcome, {{ user?.name }} !
        </p>

          </div>

      </div>
    </div>

    
    <div class="max-w-6xl mx-auto p-6">

      
      <div class="flex gap-4 mb-6">

        <button
          @click="goHome"
          class="bg-white text-purple-700 border border-purple-700 px-4 py-2 rounded-lg hover:bg-purple-50"
        >
          ← Back to Home
        </button>

        <button
          @click="logout"
          class="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800"
        >
          Logout
        </button>

      </div>

      <!-- CARDS -->

      <div class="grid md:grid-cols-2 gap-6">

        <!-- PROFILE SUMMARY -->
        <div class="bg-white border border-purple-500 rounded-xl shadow p-6">
          <h2 class="text-xl font-bold text-purple-700 mb-4">
            Profile Summary
          </h2>

          <p><strong>Name:</strong> {{ user?.name }}</p>
          <p><strong>Email:</strong> {{ user?.email }}</p>
          <p><strong>User ID:</strong> {{ user?.id }}</p>
        </div>

        <!-- INVITATIONS -->
        <div class="bg-white border border-purple-500 rounded-xl shadow p-6">
          <h2 class="text-xl font-bold text-purple-700 mb-4">
            My Invitations
          </h2>

          <div class="text-center py-6">
            <p class="text-5xl font-bold text-purple-700">
              0
            </p>
            <p class="text-gray-600 mt-2">
              Total Invitations
            </p>
          </div>
        </div>

      </div>

      
      <div class="mt-8 bg-white border border-purple-500 rounded-xl shadow p-6">

        <h2 class="text-xl font-bold text-purple-700 mb-4">
          Upcoming Features
        </h2>

        <ul class="space-y-2 text-gray-700">
          <li>Personalized Dashboard</li>
          <li>Create Invitations</li>
          <li>View Sent Invitations</li>
        </ul>

      </div>

    </div>
  </div>
</template>