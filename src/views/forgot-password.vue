<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const email = ref("");

const sendResetLink = async () => {
  try {
    const response = await fetch(
      "http://localhost:8000/api/v1/auth/forgot-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.value,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.detail || "Something went wrong.");
    }

    alert(data.message);

if (data.reset_link) {
  window.location.href = data.reset_link;
}

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4">

    <div class="w-full max-w-md bg-white rounded-2xl shadow-lg border border-purple-200 p-8">

      <!-- Logo -->
      <div class="flex justify-center mb-6">
        <img
          src="@/assets/images/InviteMe.png"
          alt="InviteMe"
          class="w-32"
        />
      </div>

      <!-- Heading -->
      <h1 class="text-3xl font-bold text-center text-gray-900">
        Forgot Password?
      </h1>

      <p class="text-center text-gray-500 mt-3 mb-8">
        Enter your email address and we'll send you a link to reset your password.
      </p>

      <!-- Form -->
      <form @submit.prevent="sendResetLink" class="space-y-6">

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>

          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
            class="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-200 transition"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-purple-700 text-white py-3 rounded-xl font-semibold hover:bg-purple-800 transition"
        >
          Send Reset Link
        </button>

      </form>

      <!-- Back -->
      <div class="mt-6 text-center">

        <RouterLink
          to="/login"
          class="text-purple-700 hover:underline font-medium"
        >
          ← Back to Login
        </RouterLink>

      </div>

    </div>

  </div>
</template>