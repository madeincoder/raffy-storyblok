<template>
  <header class="container mx-auto px-4 py-8 flex justify-between items-center">
    <div class="flex items-center">
      <img src="/public/logo.svg" alt="Raffy Logo" class="h-8" />
    </div>

    <nav class="hidden md:flex items-center space-x-8">
      <div class="relative">
        <button class="flex items-center text-gray-800 hover:text-gray-600">
          All Pages
          <ChevronDown class="ml-1 h-4 w-4" />
        </button>
      </div>
      <a href="#about" class="text-gray-800 hover:text-gray-600">About</a>
      <a href="#services" class="text-gray-800 hover:text-gray-600">Services</a>
    </nav>

    <button
      class="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors"
    >
      Book A Free Appointment
    </button>

    <button class="md:hidden" @click="mobileMenuOpen = !mobileMenuOpen">
      <Menu class="h-6 w-6" />
    </button>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenuOpen"
      class="absolute top-20 left-0 right-0 md:hidden bg-white py-4 px-4 shadow-lg z-50"
    >
      <nav class="flex flex-col space-y-4">
        <a href="#" class="text-gray-800 py-2">All Pages</a>
        <a href="#about" class="text-gray-800 py-2">About</a>
        <a href="#services" class="text-gray-800 py-2">Services</a>
        <button
          class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors w-full mt-2"
        >
          Book A Free Appointment
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Menu, ChevronDown } from "lucide-vue-next";

const mobileMenuOpen = ref(false);
</script>
