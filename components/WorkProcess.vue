<template>
  <section class="pb-16 pt-24 lg:pt-[140px]">
    <div class="container mx-auto px-4 md:px-0">
      <div class="flex flex-col md:flex-row gap-16 items-center">
        <!-- Left side - Image -->
        <div class="md:w-1/2">
          <img
            :src="imageUrl || '/roofer-working.jpg'"
            class="rounded-lg w-full h-auto shadow-lg object-cover"
          />
        </div>

        <!-- Right side - Content -->
        <div class="md:w-1/2 space-y-8 px-16">
          <div class="space-y-4 mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              {{ headline || "How we work" }}
            </h2>
            <p class="text-gray-700">
              {{
                subHeading ||
                "Our process is designed to be straightforward and efficient. Designed to be straightforward and easy."
              }}
            </p>
          </div>

          <!-- Process Steps -->
          <div class="space-y-8 relative">
            <!-- Vertical line connecting steps -->
            <div
              class="absolute left-6 top-10 bottom-10 w-0.5 bg-gray-200"
            ></div>

            <!-- Step 1 -->
            <div class="flex gap-6 relative">
              <div
                class="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg z-10 flex-shrink-0"
              >
                1
              </div>
              <div class="pt-1">
                <h3 class="text-xl font-semibold mb-2">
                  {{ stepTitle1 || "Reach Out to Us" }}
                </h3>
                <p class="text-gray-700">
                  {{
                    stepDescription1 ||
                    "Contact Raffy Roofing to express your interest in our services. We'll schedule a time to visit your property and assess your roofing needs."
                  }}
                </p>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="flex gap-6 relative">
              <div
                class="w-12 h-12 rounded-full bg-white border-2 border-gray-200 text-gray-700 flex items-center justify-center font-bold text-lg z-10 flex-shrink-0"
              >
                2
              </div>
              <div class="pt-1">
                <h3 class="text-xl font-semibold mb-2">
                  {{ stepTitle2 || "Discuss Your Options" }}
                </h3>
                <p class="text-gray-700">
                  {{
                    stepDescription2 ||
                    "During our visit, we'll discuss various roofing options with you, considering your budget and preferences. We'll provide a detailed proposal for you to review."
                  }}
                </p>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="flex gap-6 relative">
              <div
                class="w-12 h-12 rounded-full bg-white border-2 border-gray-200 text-gray-700 flex items-center justify-center font-bold text-lg z-10 flex-shrink-0"
              >
                3
              </div>
              <div class="pt-1">
                <h3 class="text-xl font-semibold mb-2">
                  {{ stepTitle3 || "Start Your Roofing Project" }}
                </h3>
                <p class="text-gray-700">
                  {{
                    stepDescription3 ||
                    "Once you approve the proposal, our team will begin your roofing project. We handle everything from installation to cleanup, ensuring experience for you."
                  }}
                </p>
              </div>
            </div>
          </div>
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
  stepTitle1: {
    type: String,
    default: "How we work",
  },
  stepDescription1: {
    type: String,
    default: "Our process is designed to be straightforward and efficient.",
  },
  stepTitle2: {
    type: String,
    default: "How we work",
  },
  stepDescription2: {
    type: String,
    default: "Our process is designed to be straightforward and efficient.",
  },
  stepTitle3: {
    type: String,
    default: "How we work",
  },
  stepDescription3: {
    type: String,
    default: "Our process is designed to be straightforward and efficient.",
  },
  imageUrl: {
    type: String,
    default: "/roofer-working.jpg",
  },
});
</script>
