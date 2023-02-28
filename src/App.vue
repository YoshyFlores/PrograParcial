<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar/Navbar.vue";
import FooterPage from "./components/Footer/Footer.vue";
</script>

<template>
  <Navbar />
  <RouterView />
  <FooterPage />
</template>
