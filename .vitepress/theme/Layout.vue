<script setup>
import { useData } from "vitepress";

import HomePage from "./layouts/HomePage.vue";
import Navbar from "./components/Navbar.vue";
import NotFound from "./layouts/NotFound.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { page, frontmatter } = useData();
</script>

<template>
  <Navbar />
  <NotFound v-if="page.isNotFound" />
  <HomePage v-if="frontmatter.home" />
</template>
