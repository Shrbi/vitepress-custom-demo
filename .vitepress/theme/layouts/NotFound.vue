<script setup>
import { withBase, useRoute } from "vitepress";

const root = withBase("/");
const route = useRoute();
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-6 pt-36">
    <h1 class="flex flex-col items-center justify-center gap-4">
      <span class="text-xl font-bold">404 Not Found</span>
      <span class="text-2xl font-bold">找不到指定路徑 "{{ route.path }}"</span>
    </h1>
    <a
      :href="root"
      class="rounded-lg bg-slate-600 px-6 py-3 text-white lg:hover:bg-gray-700"
      target="_top"
      >回到首頁</a
    >
  </div>
</template>
