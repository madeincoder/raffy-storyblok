<template>
  <section class="py-16">
    <div class="container mx-auto px-4 lg:px-0">
      <!-- Section Header -->
      <div class="text-center mb-12 max-w-2xl mx-auto">
        <span
          class="inline-block px-4 py-1 bg-[#FEF8F7] text-orange-500 rounded-full text-sm font-medium mb-4"
        >
          {{ blok.label || "Hear from satisfied clients" }}
        </span>
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          {{ blok.headline || "What Our Customers Say" }}
        </h2>
        <p class="text-gray-700 max-w-2xl mx-auto px-6">
          {{
            blok.subheading ||
            "We're proud to share the positive feedback we've received from our customers. Read real reviews and testimonials to see why choose Raffy."
          }}
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="(testimonial, index) in blok.testimonials ||
          defaultTestimonials"
          :key="testimonial._uid || index"
          :class="[
            'bg-white p-10 rounded-lg shadow-sm',
            index === 3 || index === 4 ? 'lg:col-span-1 md:col-span-1' : '',
          ]"
        >
          <div class="flex items-center mb-4">
            <div class="mr-4">
              <img
                :src="testimonial.avatar || '/placeholder-avatar.jpg'"
                :alt="`${testimonial.name}'s avatar`"
                class="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div>
              <h4 class="font-semibold">{{ testimonial.name }}</h4>
              <p class="text-sm text-gray-600">{{ testimonial.title }}</p>
            </div>
            <div class="ml-auto">
              <component
                :is="getSocialIcon(testimonial.source)"
                class="w-6 h-6"
                :class="{
                  'text-blue-600': testimonial.source === 'facebook',
                  'text-black': testimonial.source === 'twitter',
                  'text-[#4285F4]': testimonial.source === 'google',
                }"
              />
            </div>
          </div>
          <p class="text-gray-800">"{{ testimonial.content }}"</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Facebook, Twitter, Mail } from "lucide-vue-next";

const getSocialIcon = (source) => {
  switch (source?.toLowerCase()) {
    case "facebook":
      return Facebook;
    case "twitter":
      return Twitter;
    case "google":
      return GoogleIcon;
    default:
      return Mail;
  }
};

// Custom Google icon component since it's not in Lucide
const GoogleIcon = {
  setup() {
    return () =>
      h(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "currentColor",
        },
        [
          h("path", {
            d: "M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z",
          }),
        ]
      );
  },
};

import { h } from "vue";

const defaultTestimonials = [
  {
    name: "Cody Fisher",
    title: "Web Designer",
    source: "twitter",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "At Raffy Roofing, our custom meres' satisfaction is our top priority. We take pride in the pos active feedback we receive from home wrens who have trusted us with their roofing needs.",
  },
  {
    name: "Wade Warren",
    title: "Dog Trainer",
    source: "facebook",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "Nothing speaks louder than the words of our happy customers. At Raffy Roofing, we are committed to excellence in every project we undertake, and our clients' testimonials reflect that dedication. Read on to see why so many homeowners.",
  },
  {
    name: "Arlene McCoy",
    title: "Nursing Assistant",
    source: "google",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    content:
      "At Raffy Roofing, we believe that a great reputation is built on trust, quality, and exceptional service. Our customers are at the heart of everything we do, and their.",
  },
  {
    name: "Robert Fox",
    title: "President of Sales",
    source: "google",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    content:
      "We're proud to share the stories of success from our satisfied customers. At Raffy Roofing, we guar anteed customer services and continue in every project we complete. Our clients reviews highlight our dedication.",
  },
  {
    name: "Guy Hawkins",
    title: "Marketing Coordinator",
    source: "twitter",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    content:
      "At Raffy Roofing, we value the feedback we receive from our customers. It helps us improve our services and continue to deliver the best roofing solutions possible. Our reviews reflect our commitment to quality and our drive to exceed customer.",
  },
  {
    name: "Leslie Alexander",
    title: "Medical Assistant",
    source: "facebook",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    content:
      "At Raffy Roofing, we value the feedback we receive from our customers. It helps us improve our services and continue to deliver the best roofing solutions possible. Our reviews reflect our commitment to quality and our drive to exceed customer.",
  },
];

defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>
