<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row gap-16 items-center">
        <!-- Left side - Image -->
        <div class="md:w-1/2">
          <img
            :src="imageUrl"
            :alt="imageUrl.alt || 'Quality roofing example'"
            class="rounded-lg w-full h-auto shadow-lg"
          />
        </div>

        <!-- Right side - Content -->
        <div class="md:w-1/2 space-y-8 px-16">
          <div class="space-y-4 mb-24">
            <h2 class="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
              {{ title || "Our commitment to quality roofing" }}
            </h2>

            <p class="text-gray-700">
              {{
                description ||
                "We understand that you may have questions about roofing. Our FAQ section provides answers to common."
              }}
            </p>
          </div>

          <div class="space-y-9">
            <!-- Quality commitment section -->
            <div>
              <h3 class="text-2xl font-semibold mb-3">
                {{ titleInner || "Our Commitment to Quality" }}
              </h3>
              <!-- Use v-html only for rich text descriptionInner -->
              <div
                v-html="resolver.render(descriptionInner)"
                class="text-gray-700"
              ></div>
            </div>

            <!-- Community section -->
            <div>
              <h3 class="text-2xl font-semibold mb-3">
                {{ titleInner2 || "Community-Focused Service" }}
              </h3>
              <p class="text-gray-700">
                {{
                  descriptionInner2 ||
                  "Raffy is more than just a roofing company, we are a proud member of the community. We understand the needs of local residents and businesses."
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import the RichTextResolver from Storyblok Vue
import { RichTextResolver } from "@storyblok/vue";
const resolver = new RichTextResolver();

// Define props for your component
defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  titleInner: {
    type: String,
    required: true,
  },
  descriptionInner: {
    type: Object,
    required: true,
  },
  titleInner2: {
    type: String,
    required: true,
  },
  descriptionInner2: {
    type: String,
    required: true,
  },
});
</script>
