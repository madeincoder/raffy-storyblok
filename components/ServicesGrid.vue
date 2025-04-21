<script setup>
import { Home, AlertTriangle, Cloud } from "lucide-vue-next";
import { ArrowRight } from "lucide-vue-next";

// Icon mapping function for each service
const getIconComponent = (iconName) => {
  const iconMap = {
    home: Home,
    "alert-triangle": AlertTriangle,
    cloud: Cloud,
  };
  return iconMap[iconName] || Home;
};

defineProps({
  icon: {
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
  link: {
    type: Object,
    required: true,
  },
});
</script>

<template class="bg-[#F5F2F1]">
  <section>
    <div class="container mx-auto px-4 lg:px-0">
      <!-- Services Grid -->
      <div class="bg-white p-10 rounded-lg shadow-sm">
        <div class="flex justify-center mb-6">
          <div
            class="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center"
          >
            <!-- Render icon dynamically based on the service's icon -->
            <component
              :is="getIconComponent(icon)"
              class="w-6 h-6 text-gray-800"
            />
          </div>
        </div>

        <h3 class="text-xl font-semibold text-center mb-4">
          {{ title }}
        </h3>

        <p class="text-gray-700 text-center mb-6">
          {{ description || "No description available" }}
        </p>

        <div class="text-center">
          <NuxtLink
            :to="link.cached_url || '#'"
            class="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
          >
            Learn More
            <ArrowRight class="ml-2 w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
