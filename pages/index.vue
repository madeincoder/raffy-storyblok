<script setup>
import CallToAction from "../components/callToAction.vue";
import Commitment from "../components/Commitment.vue";
import FeatureCard from "../components/FeatureCard.vue";
import HeroSection from "../components/HeroSection.vue";
import ServicesGrid from "../components/ServicesGrid.vue";
import Testimonials from "../components/Testimonials.vue";
import WhyChooseUs from "../components/WhyChooseUs.vue";
import WorkProcess from "../components/WorkProcess.vue";

// Fetch data from Storyblok using the Nuxt async function
const story = await useAsyncStoryblok(
  "home",
  { version: "draft" },
  { customParent: "https://app.storyblok.com" }
);
</script>

<template class="bg-[#F5F2F1]">
  <section
    class="container mx-auto"
    v-for="(item, index) in story.content.body"
    :key="index"
  >
    <!-- Render Hero Section -->

    <HeroSection
      v-if="item.component === 'Hero section'"
      :key="index"
      :title="item.title"
      :description="item.description"
      :button1Text="item.button1Text"
      :button2Text="item.button2Text"
      :imageUrl="item.imageUrl"
    />

    <!-- Render Feature Cards for Columns -->

    <div
      v-if="item.columns && item.columns.length"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-11 mb-16 px-4 lg:px-0"
    >
      <FeatureCard
        v-for="(column, idx) in item.columns"
        :key="idx"
        :title="column.name"
        :description="column.description || 'No description available'"
      />
    </div>

    <!-- Render Commitment Section with Storyblok's RichTextResolver -->

    <Commitment
      v-if="item.component === 'Commitment'"
      :key="index"
      :imageUrl="item.imageUrl"
      :title="item.title"
      :description="item.description"
      :titleInner="item.titleInner"
      :descriptionInner="item.descriptionInner"
      :titleInner2="item.titleInner2"
      :descriptionInner2="item.descriptionInner2"
    />

    <div
      class="container mx-auto px-4 mt-12"
      v-if="item.component === 'Service Section'"
    >
      <div class="text-center mb-16 max-w-lg mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          {{ title || "Our extensive services" }}
        </h2>
        <p class="text-gray-700 max-w-2xl mx-auto">
          {{
            description ||
            "Whether you're facing a complex problem or simply seeking a fresh perspective. Our team has the expertise."
          }}
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <ServicesGrid
        v-for="(item, idx) in item.services"
        v-if="item.component === 'Service Section'"
        :key="idx"
        :icon="item.icon"
        :title="item.title"
        :description="item.description"
        :link="item.link"
      />
    </div>
    <WorkProcess
      v-if="item.component === 'work process'"
      :key="index"
      :imageUrl="item.imageUrl"
      :headline="item.headline"
      :subHeading="item.subHeading"
      :stepTitle1="item.stepTitle1"
      :stepDescription1="item.stepDescription1"
      :stepTitle2="item.stepTitle2"
      :stepDescription2="item.stepDescription2"
      :stepTitle3="item.stepTitle3"
      :stepDescription3="item.stepDescription3"
    />
    <WhyChooseUs
      v-if="item.component === 'why choose us'"
      :key="index"
      :imageUrl="item.imageUrl"
      :imageUrl.alt="item.imageUrl.alt"
      :headline="item.headline"
      :subHeading="item.subHeading"
      :title1="item.title1"
      :description1="item.description1"
      :title2="item.title2"
      :description2="item.description2"
      :title3="item.title3"
      :description3="item.description3"
    />
  </section>
  <section class="container mx-auto">
    <Testimonials />
  </section>
  <section
    class="container mx-auto"
    v-for="(item, index) in story.content.body"
    :key="index"
  >
    <CallToAction
      v-if="item.component === 'call to action'"
      :key="index"
      :title="item.title"
      :subheadline="item.subheadline"
      :button_link="item.button_link"
      :button_text="item.button_text"
      :backgroundImage="item.backgroundImage"
    />
  </section>
</template>

<script>
export default {
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
};
</script>
