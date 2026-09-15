<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");

const handleLogin = async () => {
  const res = await fetch("http://localhost:8000/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });

  const data = await res.json();

  if (!res.ok) return;

  localStorage.setItem("token", data.data.access_token);

  localStorage.setItem(
    "user",
    JSON.stringify(data.data.user)
  );

  router.push("/dashboard");
};
</script>

<template>
  <div class="min-h-screen bg-background relative overflow-hidden flex items-center justify-center px-5 py-8">
    <!-- Background Shapes -->
    <div class="absolute -top-48 -right-32 w-[520px] h-[520px] rounded-full bg-primary opacity-10"></div>

    <div class="absolute -bottom-40 -left-32 w-[420px] h-[420px] rounded-full bg-primary-container opacity-15"></div>

    <!-- Main Container -->
    <div
      class="relative z-10 w-full max-w-7xl bg-white rounded-[32px] border border-surface-container shadow-2xl overflow-hidden">
      <div class="grid lg:grid-cols-2 min-h-[760px]">
        <!-- LEFT SIDE -->

        <div class="hidden lg:flex flex-col p-12 bg-surface-container-low">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <RouterLink to="/">
              <img src="@/assets/images/InviteMe.png" alt="InviteMe" class="w-24 cursor-pointer" />
            </RouterLink>
          </div>

          <!-- Illustration -->
          <div class="flex-1 flex items-center justify-center mt-6">
            <img src="@/assets/images/login-illustration.webp" alt="InviteMe illustration"
              class="w-full max-w-[520px] h-auto object-contain" />
          </div>
        </div>

        <!-- RIGHT SIDE -->
        <div class="flex items-center justify-center p-6 sm:p-10">
          <div class="w-full max-w-md">
            <!-- Mobile Logo -->
            <div class="lg:hidden mb-8 text-center">
              <img src="@/assets/images/InviteMe.png" alt="InviteMe" class="w-24 mx-auto" />
            </div>

            <!-- Header -->
            <div class="mb-8">
              <h1 class="text-[36px] leading-tight font-semibold text-primary mb-3">
                Welcome Back
              </h1>

              <p class="text-[18px] text-on-surface-variant">
                Sign in to continue managing your invitations.
              </p>
            </div>

            <!-- Form -->
            <form @submit.prevent="handleLogin" class="space-y-6">
              <!-- Email -->
              <div>
                <label class="block text-[16px] font-semibold text-on-surface mb-3">
                  Email Address
                </label>

                <input v-model="email" type="email" placeholder="stephen@email.com"
                  class="w-full h-14 px-5 text-[16px] rounded-xl border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition" />
              </div>

              <!-- Password -->
              <div>
                <label class="block text-[16px] font-semibold text-on-surface mb-3">
                  Password
                </label>

                <input v-model="password" type="password" placeholder="••••••••"
                  class="w-full h-14 px-5 text-[16px] rounded-xl border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition" />
              </div>

              <!-- Forgot Password -->
              <div class="flex justify-end">
                <RouterLink to="/forgot-password" class="text-primary text-[15px] font-medium hover:underline">
                  Forgot Password?
                </RouterLink>
              </div>

              <!-- Login Button -->
              <button type="submit"
                class="w-full h-14 rounded-xl bg-purple-600 text-white text-[16px] font-semibold shadow-md hover:bg-purple-500 transition-all duration-200 active:scale-95">
                Login
              </button>
            </form>

            <!-- Divider -->
            <div class="flex items-center gap-4 my-8">
              <div class="flex-1 h-px bg-outline-variant"></div>
              <span class="text-[15px] text-on-surface-variant">or</span>
              <div class="flex-1 h-px bg-outline-variant"></div>
            </div>

            <!-- Register Link -->
            <p class="text-center text-[16px] text-on-surface-variant">
              Don't have an account?

              <RouterLink to="/register" class="text-primary font-semibold hover:underline ml-1">
                Create Account
              </RouterLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
