<template>
  <footer class="py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <!-- Logo and Description -->
        <div class="lg:col-span-2 max-w-md">
          <div class="flex items-center mb-4">
            <img
              :src="blok.logo?.filename || '/logo.svg'"
              alt="Raffy Logo"
              class="h-8 mr-2"
            />
          </div>
          <p class="text-gray-600">
            {{
              blok.description ||
              "We're also active on social media! Follow us for engaging content, industry updates, and intera ctive polls. We value your opinion."
            }}
          </p>
        </div>

        <!-- Quick Links 1 -->
        <div class="lg:col-span-1">
          <h3 class="font-semibold text-lg mb-4">
            {{ blok.links_title_1 || "Quick Link" }}
          </h3>
          <ul class="space-y-2">
            <li
              v-for="(link, index) in blok.links_1 || defaultLinks"
              :key="index"
            >
              <NuxtLink
                :to="link.url"
                class="text-gray-600 hover:text-gray-900"
              >
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Quick Links 2 -->
        <div class="lg:col-span-1">
          <h3 class="font-semibold text-lg mb-4">
            {{ blok.links_title_2 || "Quick Link" }}
          </h3>
          <ul class="space-y-2">
            <li
              v-for="(link, index) in blok.links_2 || defaultLinks"
              :key="index"
            >
              <NuxtLink
                :to="link.url"
                class="text-gray-600 hover:text-gray-900"
              >
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="lg:col-span-1">
          <h3 class="font-semibold text-lg mb-4">
            {{ blok.contact_title || "Contact Info" }}
          </h3>
          <address class="not-italic space-y-2 text-gray-600">
            <p>{{ blok.address_line_1 || "123 Fifth Ave, New York, NY" }}</p>
            <p>{{ blok.address_line_2 || "12004, United 9 States" }}</p>
            <p>{{ blok.phone || "+123-456-7890" }}</p>
            <p>
              <a
                :href="`mailto:${blok.email || 'mail@example.com'}`"
                class="hover:text-gray-900"
              >
                {{ blok.email || "mail@example.com" }}
              </a>
            </p>
          </address>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-[#170E1033] my-8"></div>

      <!-- Copyright and Social -->
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-600 text-sm mb-4 md:mb-0">
          {{
            blok.copyright ||
            "© Copyright 2024. All Rights Reserved by FramerBite"
          }}
        </p>

        <div class="flex space-x-4">
          <a
            v-for="(social, index) in blok.social_links || defaultSocial"
            :key="index"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-gray-900 bg-white rounded-xl p-2 transition-colors duration-300"
          >
            <component :is="getSocialIcon(social.platform)" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Facebook, Twitter, Instagram, Globe } from "lucide-vue-next";

const defaultLinks = [
  { text: "Home", url: "/" },
  { text: "About", url: "/about" },
  { text: "Service", url: "/services" },
];

const defaultSocial = [
  { platform: "facebook", url: "https://facebook.com" },
  { platform: "twitter", url: "https://twitter.com" },
  { platform: "instagram", url: "https://instagram.com" },
  { platform: "website", url: "https://example.com" },
];

const getSocialIcon = (platform) => {
  switch (platform?.toLowerCase()) {
    case "facebook":
      return Facebook;
    case "twitter":
      return Twitter;
    case "instagram":
      return Instagram;
    case "website":
      return Globe;
    default:
      return Globe;
  }
};

defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
</script>
