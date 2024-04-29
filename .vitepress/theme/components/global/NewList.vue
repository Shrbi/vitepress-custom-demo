<script setup></script>

<template>
  <div class="w-full bg-[#00001A] p-6 md:w-auto" :class="$style.newArticleList">
    <slot></slot>
  </div>
</template>

<style module>
.newArticleList :not(h2) :not(h3) :not(p) :not(hr),
.newArticleList h2:not(:nth-of-type(1)) {
  @apply hidden;
}

.newArticleList h2 {
  @apply pb-10 text-4xl text-[#EAAA53];
}

.newArticleList h3 {
  @apply pb-2 text-2xl text-gray-100 lg:hover:text-[#EAAA53];
}

.newArticleList p {
  @apply text-xl leading-10 text-slate-300;
}

.newArticleList hr {
  @apply my-10 h-px w-full bg-[#61607A];
}
</style>
