<template v-editable="blok" id="hero-section">
  <section
    class="bg-[#3c3331] text-white container mx-auto px-4 py-6 flex justify-between items-center rounded-2xl"
  >
    <div class="container mx-auto px-4 py-4">
      <div class="flex flex-col md:flex-row gap-10">
        <div
          class="md:w-3/5 mb-8 md:mb-0 md:pr-8 md:pl-8 flex flex-col justify-center"
        >
          <!-- Dynamically bind the headline -->
          <h1
            class="text-5xl md:text-6xl lg:text-[76px] font-semibold mb-6 leading-tight -tracking-[0.02em]"
          >
            {{ title }}
          </h1>

          <!-- Dynamically bind the description -->
          <p class="text-lg mb-8 text-[#D8CAC8] font-medium">
            {{ description }}
          </p>

          <div class="flex flex-wrap gap-4">
            <button
              class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              {{ button1Text }}
            </button>
            <button
              class="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#3c3331] transition-colors"
            >
              {{ button2Text }}
            </button>
          </div>
        </div>
        <div class="md:w-2/5">
          <div class="rounded-lg overflow-hidden">
            <!-- Dynamically bind the image URL -->
            <img
              :src="imageUrl || '/public/roofing-worker.png'"
              alt="Roofing professional working on a roof"
              class="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  button1Text: {
    type: String,
    required: true,
  },
  button2Text: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});
</script>
