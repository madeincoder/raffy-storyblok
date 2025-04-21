<template>
  <div
    class="bg-white py-9 px-11 rounded-xl shadow-sm border-l-4 border-[#DFD1C8]"
  >
    <h3 class="text-2xl font-semibold mb-4">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
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
});
</script>
