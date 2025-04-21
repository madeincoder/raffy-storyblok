<template>
  <section class="relative overflow-hidden rounded-lg my-12 mx-auto">
    <div class="relative z-20 bg-[#3c3331] text-white py-16 px-4 min-h-[600px]">
      <div class="container mx-auto text-center max-w-2xl mb-32 relative z-30">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          {{ headline || "Ready to Get Started?" }}
        </h2>
        <p class="text-lg mb-8 text-gray-300">
          {{
            subheading ||
            "Looking for roofing experts who deliver quality workmanship and outstand service? Look further than Raffy Roofing."
          }}
        </p>
        <NuxtLink
          :to="button_link || '/contact'"
          class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          {{ button_text || "Book A Free Appointment" }}
        </NuxtLink>
      </div>

      <!-- Bottom Image -->
      <div class="absolute bottom-0 left-0 right-0 z-10">
        <img
          :src="backgroundImage || '/roof-detail.jpg'"
          alt="Modern roof detail"
          class="w-full h-auto object-cover max-h-[600px] object-top"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  headline: {
    type: String,
    default: "Ready to Get Started?",
  },
  subheading: {
    type: String,
    default:
      "Looking for roofing experts who deliver quality workmanship and outstand service? Look further than Raffy Roofing.",
  },
  button_text: {
    type: String,
    default: "Book A Free Appointment",
  },
  button_link: {
    type: String,
    default: "/contact",
  },
  backgroundImage: {
    type: String,
    default: "/roof-detail.jpg",
  },
});
</script>
