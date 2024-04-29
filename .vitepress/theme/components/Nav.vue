<script setup>
const { navDatas } = defineProps(["navDatas"]);
</script>

<template>
  <li v-for="(nav, index) in navDatas" class="w-full lg:w-auto">
    <a
      :href="nav.href ?? '#'"
      :target="
        nav.target ?? nav.href?.search(/^http.*/) > -1 ? '_blank' : '_self'
      "
      class="flex items-center justify-start gap-3 text-xl"
      v-if="
        nav.children !== undefined &&
        nav.children !== null &&
        nav.children.length > 0
          ? false
          : true
      "
      @click.stop
    >
      <span>{{ nav.text }}</span>
      <span v-if="nav.href?.search(/^http.*/) > -1">
        <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
      </span>
    </a>
    <details class="dropdown dropdown-end z-40" close v-else @click.stop>
      <summary class="text-xl">{{ nav.text }}</summary>
      <ul class="lg:dropdown-content lg:w-96 lg:bg-base-100">
        <Nav :nav-datas="nav.children" />
      </ul>
    </details>
  </li>
</template>
