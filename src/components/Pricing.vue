<template>
  <section class="py-24 bg-white" id="pricing">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-14">
        <span
          class="inline-block rounded-full bg-primary/10 px-4 py-1 my-4 text-[12px] font-medium uppercase tracking-wide text-primary-container">
          Pricing
        </span>
        <p class="text-gray-500 text-sm mb-2">
          Pricing plan, for every Event type.
        </p>

        <h2 class="text-4xl font-bold text-gray-900">
          Clear rates for every event.
        </h2>

        <h2 class="text-4xl font-bold text-gray-900">
          Book Confidently.
        </h2>
      </div>

      <!-- Pricing Cards -->
      <div class="grid md:grid-cols-4 gap-6 items-stretch p-6">

        <!-- Free Card -->
        <div class="border border-gray-100 rounded-2xl p-8 bg-white flex flex-col h-full shadow-xl shadow-gray-200/50">
          <p class="text-indigo-600/70 text-xs font-bold tracking-widest uppercase mb-1">For Micro-Events</p>
          <h3 class="text-2xl font-extrabold text-slate-900 mb-1">Free</h3>
          <p class="text-gray-500 text-xs mb-6">Get started with zero risk.</p>

          <div class="flex items-baseline text-slate-900 mb-6">
            <span class="text-4xl font-black">₦0</span>
            <span class="text-gray-400 text-xs ml-1">/ free trial</span>
          </div>

          <hr class="border-gray-100 mb-6" />

          <ul class="space-y-4 text-xs font-medium text-slate-700 mb-8 flex-grow">
            <li class="flex items-start gap-3 text-indigo-600">
              <span class="material-symbols-outlined text-sm leading-none">
                calendar_month
              </span>
              <span class="text-slate-600"><strong>1</strong> Event total</span>
            </li>

            <li class="flex items-start gap-3 text-indigo-600">
              <span class="material-symbols-outlined text-sm leading-none">
                groups
              </span>
              <span class="text-slate-600">Up to <strong>20</strong> guests</span>
            </li>

            <li class="flex items-start gap-3 text-indigo-600">
              <span class="material-symbols-outlined text-sm leading-none">
                palette
              </span>
              <span class="text-slate-600"><strong>3</strong> standard templates</span>
            </li>

            <li class="flex items-start gap-3 text-gray-400 line-through decoration-gray-300">
              <span class="material-symbols-outlined text-sm leading-none">
                cancel
              </span>
              <span>No watermark</span>
            </li>
          </ul>

          <button
            class="w-full border border-purple-400 text-slate-700 font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors">
            Start Free
          </button>
        </div>

        <div class="border border-gray-200 rounded-2xl p-8 bg-white flex flex-col h-full">
          <p class="text-indigo-600/70 text-xs font-bold tracking-widest uppercase mb-1">Pay-Per-Event</p>
          <h3 class="text-2xl font-extrabold text-slate-900 mb-1">Basic</h3>
          <p class="text-gray-500 text-xs mb-6">Perfect for single big celebrations.</p>

          <div class="flex items-baseline text-slate-900 mb-6">
            <span class="text-4xl font-black">₦2,500</span>
            <span class="text-gray-400 text-xs ml-1">/ event</span>
          </div>

          <hr class="border-gray-100 mb-6" />

          <ul class="space-y-4 text-xs font-medium text-slate-700 mb-8 flex-grow">
            <li class="flex items-start gap-3 text-emerald-500">
              <span class="material-symbols-outlined text-sm leading-none">
                calendar_month
              </span>
              <span class="text-slate-600"><strong>1</strong> Event</span>
            </li>

            <li class="flex items-start gap-3 text-emerald-500">
              <span class="material-symbols-outlined text-sm leading-none">
                groups
              </span>
              <span class="text-slate-600">Up to <strong>100</strong> guests</span>
            </li>

            <li class="flex items-start gap-3 text-emerald-500">
              <span class="material-symbols-outlined text-sm leading-none">
                palette
              </span>
              <span class="text-slate-600"><strong>All</strong> design templates</span>
            </li>

            <li class="flex items-start gap-3 text-emerald-500">
              <span class="material-symbols-outlined text-sm leading-none">
                check_circle
              </span>
              <span class="text-slate-600"><strong>No watermark</strong> on invites</span>
            </li>
          </ul>

          <button
            class="w-full bg-indigo-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all">
            Choose Basic
          </button>
        </div>

        <!-- Pro Card -->
        <div class="border border-gray-200 rounded-2xl p-8 bg-white flex flex-col h-full">
          <p class="text-indigo-600/70 text-xs font-bold tracking-widest uppercase mb-1">Subscription</p>
          <h3 class="text-2xl font-extrabold text-slate-900 mb-1">Pro</h3>
          <p class="text-gray-500 text-xs mb-6">For active party planners.</p>

          <div class="flex items-baseline text-slate-900 mb-6">
            <span class="text-4xl font-black">₦5,000</span>
            <span class="text-gray-400 text-xs ml-1">/ month</span>
          </div>

          <hr class="border-gray-100 mb-6" />

          <ul class="space-y-4 text-xs font-medium text-slate-700 mb-8 flex-grow">
            <li class="flex items-start gap-3 text-indigo-600">
              <span class="material-symbols-outlined text-sm leading-none">
                calendar_month
              </span>
              <span class="text-slate-600">
                Up to <strong>5 active</strong> events/month
              </span>
            </li>

            <li class="flex items-start gap-3 text-indigo-600">
              <span class="material-symbols-outlined text-sm leading-none">
                groups
              </span>
              <span class="text-slate-600">
                Up to <strong>500</strong> guests per event
              </span>
            </li>
            <li class="flex items-start gap-3 text-indigo-600">
              <span class="material-symbols-outlined text-sm leading-none">
                support_agent
              </span>
              <span class="text-slate-600">
                Priority support
                <span class="text-gray-400 block mt-0.5">
                  (WhatsApp)
                </span>
              </span>
            </li>

            <li class="flex items-start gap-3 text-indigo-600">
              <span class="material-symbols-outlined text-sm leading-none">
                description
              </span>
              <span class="text-slate-600">
                CSV / Excel guest export
              </span>
            </li>
          </ul>

          <button
            class="w-full border border-indigo-600 text-indigo-600 font-semibold py-3 px-4 rounded-xl hover:bg-indigo-50 transition-colors">
            Get Pro
          </button>
        </div>

        <!-- Business Card -->
        <div class="border border-gray-200 rounded-2xl p-8 bg-white flex flex-col h-full">
          <p class="text-gray-400 text-xs font-bold tracking-widest uppercase mb-1">Enterprise / Agencies</p>
          <h3 class="text-2xl font-extrabold text-slate-900 mb-1">Business</h3>
          <p class="text-gray-500 text-xs mb-6">White-labeled & customized scale.</p>

          <div class="flex items-baseline text-slate-900 mb-6">
            <span class="text-4xl font-black">₦15,000</span>
            <span class="text-gray-400 text-xs ml-1">/ month</span>
          </div>

          <hr class="border-gray-100 mb-6" />

          <ul class="space-y-4 text-xs font-medium text-slate-700 mb-8 flex-grow">
            <li class="flex items-start gap-3 text-emerald-500">
              <span class="material-symbols-outlined text-sm mt-0.5">
                calendar_month
              </span>
              <span class="text-slate-600">
                Up to <strong>15 active</strong> events/month
              </span>
            </li>

            <li class="flex items-start gap-3 text-emerald-500">
              <span class="material-symbols-outlined text-sm mt-0.5">
                groups
              </span>
              <span class="text-slate-600">
                Up to <strong>1,500</strong> guests per event
              </span>
            </li>

            <li class="flex items-start gap-3 text-emerald-500">
              <span class="material-symbols-outlined text-sm mt-0.5">
                brush
              </span>
              <span class="text-slate-600">
                Custom branding (own logo)
              </span>
            </li>

            <li class="flex items-start gap-3 text-emerald-500">
              <span class="material-symbols-outlined text-sm mt-0.5">
                call
              </span>
              <span class="text-slate-600">
                Dedicated local RSVP number
              </span>
            </li>
          </ul>

          <button
            class="w-full border border-slate-800 text-slate-800 font-semibold py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors">
            Contact Sales
          </button>
        </div>

      </div>

      <!-- Large Subscription Box -->
      <div class="mt-10 border-2 border-purple-500 rounded-2xl p-10">

        <div class="flex flex-col md:flex-row md:items-end gap-8">

          <div class="flex-1">

            <div class="flex gap-3 mb-10">
              <span
                class="inline-block rounded-full bg-primary/10 px-4 py-1 text-[12px] font-medium uppercase tracking-wide text-primary-container">
                Mega Owambe and Concerts
              </span>
            </div>

            <h3 class="text-4xl font-bold text-gray-900">
              Need higher limits <br> than 1,500 guests?
            </h3>
          </div>

          <div class="flex flex-1 item-end justify-end">
            <p class="ml-auto cursor-pointer">
              Talk to Enterprise, <span class="text-purple-700">
                get discounted prices
                <span class="material-symbols-outlined align-middle text-base">
                  chevron_right
                </span>
              </span>
            </p>
          </div>




        </div>
        <div class="grid md:grid-cols-4 gap-6 mt-12 text-sm text-gray-600">
          <div>Unlimited Invitations</div>
          <div>Best Templates</div>
          <div>Advanced RSVP Analytics</div>
          <div>Event Reminders</div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Title -->
      <h2 class="text-center text-2xl font-semibold text-slate-900 mb-10">
        Compare Plans at a Glance
      </h2>

      <div class="overflow-x-auto">
        <table class="w-full border-collapse text-sm">

          <!-- Header -->
          <thead>
            <tr class="border-b bg-slate-50 text-slate-700">
              <th class="text-left py-4 px-4 font-semibold uppercase text-xs tracking-wide">
                Features
              </th>
              <th class="text-left py-4 px-4 font-semibold uppercase text-xs tracking-wide">
                Free
              </th>
              <th class="text-left py-4 px-4 font-semibold uppercase text-xs tracking-wide">
                Basic
              </th>
              <th class="text-left py-4 px-4 font-semibold uppercase text-xs tracking-wide">
                Pro
              </th>
              <th class="text-left py-4 px-4 font-semibold uppercase text-xs tracking-wide">
                Business
              </th>
            </tr>
          </thead>

          <tbody class="text-slate-700">

            <!-- Price -->
            <tr class="border-b">
              <td class="py-4 px-4 font-medium text-slate-900">Price</td>
              <td class="py-4 px-4">₦0</td>
              <td class="py-4 px-4">₦2,500 / event</td>
              <td class="py-4 px-4 text-indigo-600">₦5,000 / month</td>
              <td class="py-4 px-4">₦15,000 / month</td>
            </tr>

            <!-- Events -->
            <tr class="border-b">
              <td class="py-4 px-4 font-medium text-slate-900">Events Included</td>
              <td class="py-4 px-4">1 Event</td>
              <td class="py-4 px-4">1 Event</td>
              <td class="py-4 px-4 text-indigo-600">Up to 5 active events/mo</td>
              <td class="py-4 px-4">Up to 15 active events/mo</td>
            </tr>

            <!-- Guests -->
            <tr class="border-b">
              <td class="py-4 px-4 font-medium text-slate-900">Guest Limit</td>
              <td class="py-4 px-4">Up to 20</td>
              <td class="py-4 px-4">Up to 100</td>
              <td class="py-4 px-4 text-indigo-600">Up to 500 per event</td>
              <td class="py-4 px-4">Up to 1,500 per event</td>
            </tr>

            <!-- Templates -->
            <tr class="border-b">
              <td class="py-4 px-4 font-medium text-slate-900">Templates</td>
              <td class="py-4 px-4">3 basic templates</td>
              <td class="py-4 px-4">All templates</td>
              <td class="py-4 px-4">All templates</td>
              <td class="py-4 px-4">All templates</td>
            </tr>

            <!-- Watermark -->
            <tr class="border-b">
              <td class="py-4 px-4 font-medium text-slate-900">Watermark Removal</td>

              <td class="py-4 px-4 text-red-500 font-bold">✕</td>
              <td class="py-4 px-4 text-emerald-500 font-bold">✓</td>
              <td class="py-4 px-4 text-emerald-500 font-bold">✓</td>
              <td class="py-4 px-4 text-emerald-500 font-bold">✓</td>
            </tr>

            <!-- Support -->
            <tr class="border-b">
              <td class="py-4 px-4 font-medium text-slate-900">Support</td>
              <td class="py-4 px-4">Email only</td>
              <td class="py-4 px-4">Standard</td>
              <td class="py-4 px-4 text-indigo-600">Priority</td>
              <td class="py-4 px-4">Dedicated Manager</td>
            </tr>

            <!-- Branding -->
            <tr class="border-b">
              <td class="py-4 px-4 font-medium text-slate-900">Custom Branding</td>

              <td class="py-4 px-4 text-red-500 font-bold">✕</td>
              <td class="py-4 px-4 text-red-500 font-bold">✕</td>
              <td class="py-4 px-4 text-red-500 font-bold">✕</td>
              <td class="py-4 px-4 font-semibold">
                ✓ Custom Logo & Colors
              </td>
            </tr>

            <!-- RSVP -->
            <tr>
              <td class="py-4 px-4 font-medium text-slate-900">Guest RSVP Methods</td>
              <td class="py-4 px-4">Web Link</td>
              <td class="py-4 px-4">Web Link</td>
              <td class="py-4 px-4">Web Link, SMS RSVP</td>
              <td class="py-4 px-4 font-semibold">
                ✓ Dedicated Number & WhatsApp integration
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  </section>
</template>