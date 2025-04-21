<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12 max-w-2xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          {{ headline }}
        </h2>
        <p class="text-gray-700 px-4">
          {{ subHeading }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 gap-y-6">
        <div class="col-span-1 grid grid-cols-1 lg:place-items-center gap-y-6">
          <!-- Left side - Benefits -->
          <div class="space-y-6">
            <div class="bg-white p-8 rounded-lg shadow-sm">
              <h3 class="text-xl font-semibold mb-3">{{ title1 }}</h3>
              <p class="text-gray-700">{{ description1 }}</p>
            </div>
          </div>
          <div class="space-y-6">
            <div class="bg-white p-8 rounded-lg shadow-sm">
              <h3 class="text-xl font-semibold mb-3">{{ title2 }}</h3>
              <p class="text-gray-700">{{ description2 }}</p>
            </div>
          </div>
          <div class="space-y-6">
            <div class="bg-white p-8 rounded-lg shadow-sm">
              <h3 class="text-xl font-semibold mb-3">{{ title3 }}</h3>
              <p class="text-gray-700">{{ description3 }}</p>
            </div>
          </div>
        </div>
        <!-- Right side - Image -->
        <div class="col-span-2">
          <img
            :src="imageUrl"
            :alt="imageUrl?.alt"
            class="rounded-lg w-full h-auto shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  headline: {
    type: String,
    default: "How we work",
  },
  subHeading: {
    type: String,
    default: "Our process is designed to be straightforward and efficient.",
  },
  title1: {
    type: String,
    default: "How we work",
  },
  description1: {
    type: String,
    default: "Our process is designed to be straightforward and efficient.",
  },
  title2: {
    type: String,
    default: "How we work",
  },
  description2: {
    type: String,
    default: "Our process is designed to be straightforward and efficient.",
  },
  title3: {
    type: String,
    default: "How we work",
  },
  description3: {
    type: String,
    default: "Our process is designed to be straightforward and efficient.",
  },
  imageUrl: {
    type: String,
    default: "/roofer-working.jpg",
  },
});
</script>
