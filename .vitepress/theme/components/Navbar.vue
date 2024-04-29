<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { useData } from "vitepress";
import Nav from "./Nav.vue";

const { site } = useData();

const nav_show = ref(false);
const page_height = ref(0);

onMounted(() => {
  page_height.value = document.body.clientHeight;
});
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <a class="btn btn-ghost text-2xl font-extrabold">{{ site.title }}</a>
    </div>
    <div class="navbar-center"></div>
    <div class="navbar-end hidden lg:block">
      <ul class="menu menu-horizontal w-full justify-end gap-8">
        <Nav :nav-datas="site.themeConfig.navs" />
      </ul>
    </div>
    <div class="navbar-end lg:hidden">
      <label class="swap swap-rotate pr-3">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" v-model="nav_show" />

        <!-- hamburger icon -->
        <span class="swap-off w-full fill-current text-2xl">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </span>

        <!-- close icon -->
        <span class="swap-on w-full fill-current text-2xl">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </span>
      </label>
    </div>
  </div>
  <div
    class="fixed inset-0 z-50 w-full bg-gray-900/80 px-4 py-6"
    :class="['h-[' + page_height + 'px]']"
    v-if="nav_show"
    @click="nav_show = !nav_show"
  >
    <h2 class="pb-4 text-center text-2xl text-slate-50">Menu</h2>
    <ul
      class="menu mx-auto flex w-full max-w-screen-sm flex-col items-center justify-start gap-4 rounded-md bg-slate-50 py-6"
    >
      <Nav :nav-datas="site.themeConfig.navs" />
    </ul>
  </div>
</template>
