<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

// Get token from URL
const token = route.query.token;

const newPassword = ref("");
const confirmPassword = ref("");

const loading = ref(false);
const success = ref("");
const error = ref("");

const resetPassword = async () => {
  error.value = "";
  success.value = "";

  if (!newPassword.value || !confirmPassword.value) {
    error.value = "Please fill in all fields.";
    return;
  }

  if (newPassword.value !== confirmPassword.value) {
    error.value = "Passwords do not match.";
    return;
  }

  loading.value = true;

  try {
    const response = await fetch(
      "http://localhost:8000/api/v1/auth/reset-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
          new_password: newPassword.value,
          confirm_password: confirmPassword.value,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.detail || "Unable to reset password.");
    }

    success.value = "Password reset successfully! Redirecting to login...";

    setTimeout(() => {
      router.push("/login");
    }, 2500);

  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center px-4"
  >
    <div
      class="w-full max-w-md bg-white rounded-3xl shadow-xl p-8"
    >

      <!-- Logo -->
      <div class="flex justify-center mb-6">
        <img
          src="@/assets/images/InviteMe.png"
          class="w-32"
          alt="InviteMe"
        >
      </div>

      <!-- Heading -->
      <h1 class="text-3xl font-bold text-center text-gray-900">
        Reset Password
      </h1>

      <p class="text-gray-500 text-center mt-2 mb-8">
        Enter your new password below.
      </p>

      <!-- Error -->
      <div
        v-if="error"
        class="mb-5 bg-red-100 text-red-700 px-4 py-3 rounded-lg"
      >
        {{ error }}
      </div>

      <!-- Success -->
      <div
        v-if="success"
        class="mb-5 bg-green-100 text-green-700 px-4 py-3 rounded-lg"
      >
        {{ success }}
      </div>

      <!-- New Password -->
      <div class="mb-5">

        <label class="block text-gray-700 mb-2 font-medium">
          New Password
        </label>

        <input
          v-model="newPassword"
          type="password"
          placeholder="Enter new password"
          class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-700"
        >

      </div>

      <!-- Confirm Password -->
      <div class="mb-8">

        <label class="block text-gray-700 mb-2 font-medium">
          Confirm Password
        </label>

        <input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm password"
          class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-700"
        >

      </div>

      <!-- Button -->
      <button
        @click="resetPassword"
        :disabled="loading"
        class="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-xl font-semibold transition disabled:opacity-60"
      >
        {{ loading ? "Resetting Password..." : "Reset Password" }}
      </button>

      <!-- Back -->
      <div class="text-center mt-6">

        <RouterLink
          to="/login"
          class="text-purple-700 hover:underline"
        >
           Back to Login
        </RouterLink>

      </div>

    </div>
  </div>
</template>