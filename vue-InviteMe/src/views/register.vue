<template>
  <div class="relative min-h-screen bg-background overflow-hidden">
    <!-- Background Blobs -->
    <div
      class="absolute -top-52 -right-32 w-[520px] h-[520px] rounded-full bg-primary opacity-20"
    ></div>

    <div
      class="absolute -bottom-40 -left-32 w-[420px] h-[420px] rounded-full bg-primary opacity-10"
    ></div>

    <div
      class="relative z-10 min-h-screen flex items-center justify-center px-5 py-8"
    >
      <div
        class="w-full max-w-[1240px] bg-white rounded-[32px] border border-purple-100 shadow-xl p-8 lg:p-12 grid lg:grid-cols-2 gap-10"
      >
        <!-- LEFT SIDE -->
        <div class="flex flex-col justify-between">
          <!-- Logo -->
          <div>
            <img
              src="/src/assets/images/InviteMe.png"
              alt="InviteMe Logo"
              class="w-28"
            />
          </div>

          <!-- Illustration -->
          <div class="flex justify-center items-center flex-1">
            <img
              src="/src/assets/images/bento-card-image.png"
              alt="InviteMe Hero"
              class="w-full max-w-[440px]"
            />
          </div>
        </div>

        <!-- RIGHT SIDE -->
        <div class="flex justify-center items-center">
          <div
            class="w-full max-w-md bg-white border border-purple-100 rounded-[26px] p-8 shadow-lg"
          >
            <h1 class="text-4xl font-bold text-primary mb-2">Create Account</h1>

            <p class="text-gray-500 mb-8">
              Start creating and sending invitations with InviteMe.
            </p>

            <form @submit.prevent="handleSubmit" class="space-y-5">
              <!-- Full Name -->
              <div>
                <label class="block mb-2 text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  v-model="fullName"
                  type="text"
                  placeholder="Bami Ewetuga"
                  class="w-full px-4 py-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary"
                />
              </div>

              <!-- Email -->
              <div>
                <label class="block mb-2 text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  v-model="email"
                  type="email"
                  placeholder="stephen@email.com"
                  class="w-full px-4 py-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary"
                />
              </div>

              <!-- Password -->
              <div>
                <label class="block mb-2 text-sm font-semibold text-gray-700">
                  Password
                </label>

                <input
                  v-model="password"
                  type="password"
                  placeholder="••••••••"
                  class="w-full px-4 py-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary"
                />

                <p class="mt-2 text-xs text-gray-500 leading-relaxed">
                  Must contain letters, numbers, symbols and at least 8
                  characters.
                </p>
              </div>

              <button
                type="submit"
                :disabled="!isFormValid"
                class="w-full py-4 rounded-2xl text-white font-semibold transition-all"
                :class="
                  isFormValid
                    ? 'bg-purple-600 hover:bg-purple-700 cursor-pointer'
                    : 'bg-gray-400 cursor-not-allowed'
                "
              >
                Create Account
              </button>
            </form>

            <!-- Login Link -->
            <p class="text-center mt-6 text-gray-500 text-sm">
              Already have an account?

              <router-link to="/login" class="text-primary font-semibold ml-1">
                Sign In
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const fullName = ref("");
const email = ref("");
const password = ref("");

const isFormValid = computed(() => {
  return (
    fullName.value.trim() !== "" &&
    email.value.trim() !== "" &&
    password.value.length >= 8
  );
});

const handleSubmit = () => {
  if (!isFormValid.value) return;

  console.log({
    fullName: fullName.value,
    email: email.value,
    password: password.value,
  });

  // Later this will become your API call
  router.push("/");
};
</script>
