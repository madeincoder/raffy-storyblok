<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup>
import AppFooter from "../components/AppFooter.vue";
import AppHeader from "../components/AppHeader.vue";
import Header from "../components/Header.vue";
</script>
