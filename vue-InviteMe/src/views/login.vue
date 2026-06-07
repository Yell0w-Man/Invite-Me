<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");

const handleLogin = () => {
  console.log({
    email: email.value,
    password: password.value,
  });

  // redirect to landing page
  router.push("/");
};
</script>

<template>
  <div
    class="min-h-screen bg-background relative overflow-hidden flex items-center justify-center px-5 py-8"
  >
    <!-- Background Shapes -->
    <div
      class="absolute -top-48 -right-32 w-[520px] h-[520px] rounded-full bg-primary opacity-10"
    ></div>

    <div
      class="absolute -bottom-40 -left-32 w-[420px] h-[420px] rounded-full bg-primary-container opacity-15"
    ></div>

    <!-- Main Container -->
    <div
      class="relative z-10 w-full max-w-7xl bg-white rounded-[32px] border border-surface-container shadow-2xl overflow-hidden"
    >
      <div class="grid lg:grid-cols-2 min-h-[760px]">
        <!-- LEFT SIDE -->
        <div
          class="hidden lg:flex flex-col justify-between p-12 bg-surface-container-low"
        >
          <!-- Smaller Logo -->
          <div>
            <img
              src="@/assets/images/InviteMe.png"
              alt="InviteMe"
              class="w-24"
            />
          </div>

          <!-- Smaller Hero Section -->
          <div class="flex flex-col items-center text-center">
            <img
              src="@/assets/images/bento-card-image.png"
              alt="InviteMe Illustration"
              class="w-full max-w-[340px] object-contain"
            />

            <h2
              class="text-headline-md text-on-surface mt-6 mb-3 font-semibold"
            >
              Manage Invitations Effortlessly
            </h2>

            <p
              class="text-body-md text-on-surface-variant max-w-sm leading-relaxed"
            >
              Track invitations, manage guests, and organize events from one
              beautiful dashboard.
            </p>
          </div>

          <div></div>
        </div>

        <!-- RIGHT SIDE -->
        <div class="flex items-center justify-center p-6 sm:p-10">
          <div class="w-full max-w-md">
            <!-- Mobile Logo -->
            <div class="lg:hidden mb-8 text-center">
              <img
                src="@/assets/images/InviteMe.png"
                alt="InviteMe"
                class="w-24 mx-auto"
              />
            </div>

            <!-- Header -->
            <div class="mb-8">
              <h1
                class="text-[36px] leading-tight font-semibold text-primary mb-3"
              >
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
                <label
                  class="block text-[16px] font-semibold text-on-surface mb-3"
                >
                  Email Address
                </label>

                <input
                  v-model="email"
                  type="email"
                  placeholder="stephen@email.com"
                  class="w-full h-14 px-5 text-[16px] rounded-xl border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition"
                />
              </div>

              <!-- Password -->
              <div>
                <label
                  class="block text-[16px] font-semibold text-on-surface mb-3"
                >
                  Password
                </label>

                <input
                  v-model="password"
                  type="password"
                  placeholder="••••••••"
                  class="w-full h-14 px-5 text-[16px] rounded-xl border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition"
                />
              </div>

              <!-- Forgot Password -->
              <div class="flex justify-end">
                <RouterLink
                  to="/forgot-password"
                  class="text-primary text-[15px] font-medium hover:underline"
                >
                  Forgot Password?
                </RouterLink>
              </div>

              <!-- Login Button -->
              <button
                 target="_blank"            
                type="submit"
                class="w-full h-14 rounded-xl bg-primary text-on-primary text-[16px] font-semibold hover:bg-primary-container hover:text-primary transition active:scale-95"
              >
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

              <RouterLink
                to="/register"
                class="text-primary font-semibold hover:underline ml-1"
              >
                Create Account
              </RouterLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
