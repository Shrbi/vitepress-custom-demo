<script setup>
import { useData } from "vitepress";

import HomePage from "./layouts/HomePage.vue";
import Navbar from "./components/Navbar.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData();
</script>

<template>
  <Navbar />
  <HomePage v-if="frontmatter.home" />
</template>
