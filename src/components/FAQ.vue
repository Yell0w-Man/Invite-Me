<script setup>
import { ref } from "vue";

const openFAQ = ref(0);

const faqs = [
    {
        question: "How do payments work in Nigeria?",
        answer:
            "We support all popular local payment methods including bank transfers, credit/debit cards (Mastercard, Visa, Verve), and secure processing via Paystack and Flutterwave.",
    },
    {
        question: "Can I upgrade or downgrade later?",
        answer:
            "Absolutely! You can upgrade from the Basic Plan to the Pro Plan at any time. If you run a seasonal event agency, you can subscribe during busy months and pause when business slows down.",
    },
    {
        question: 'What is the "dedicated local number" in the Business Plan?',
        answer:
            "We provide a dedicated Nigerian phone number that your guests can call or text to RSVP. Our system automatically records and updates responses in your dashboard.",
    },
];

const toggleFAQ = (index) => {
    openFAQ.value = openFAQ.value === index ? null : index;
};
</script>

<template>
    <section class="bg-slate-100 py-20" id="FAQ">
        <div class="max-w-5xl mx-auto px-4">

            <!-- Heading -->
            <h2 class="text-center text-4xl font-bold text-slate-900 mb-10">
                Frequently Asked Questions
            </h2>

            <div class="space-y-4">
                <div v-for="(faq, index) in faqs" :key="index"
                    class="bg-white border border-purple-300 rounded-2xl overflow-hidden shadow-sm">

                    <!-- Question -->
                    <button @click="toggleFAQ(index)" class="w-full flex justify-between items-center p-6 text-left">
                        <span class="text-lg font-semibold text-slate-900">
                            {{ faq.question }}
                        </span>


                        <svg class="w-6 h-6 text-purple-700 transform transition-transform duration-300"
                            :class="{ 'rotate-180': openFAQ === index }" fill="none" stroke="currentColor"
                            stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    <!-- Answer -->
                    <transition enter-active-class="transition-all duration-300 ease-in-out"
                        leave-active-class="transition-all duration-300 ease-in-out">
                        <div v-if="openFAQ === index" class="px-6 pb-6 text-slate-600 leading-relaxed">
                            {{ faq.answer }}
                        </div>
                    </transition>

                </div>
            </div>

        </div>
    </section>
</template>