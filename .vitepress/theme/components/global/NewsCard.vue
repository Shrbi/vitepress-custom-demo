<script setup>
defineProps(["image", "image_md"]);
</script>

<template>
  <div
    class="flex w-full shrink flex-col gap-8 p-2 md:col-span-2"
    :class="$style.newsCardWrapper"
  >
    <img class="hidden w-full md:block" :src="image_md" alt="desktop image" />
    <img class="w-full p-4 md:hidden" :src="image" alt="mobile image" />

    <div class="grid grid-flow-row gap-4 md:grid-flow-col">
      <slot></slot>
    </div>
  </div>
</template>

<style module>
.newsCardWrapper :not(img) :not(h2) :not(p) :not(a),
.newsCardWrapper h2:not(:nth-of-type(1)),
.newsCardWrapper h2 > a,
.newsCardWrapper img:not(:nth-of-type(1)):not(:nth-of-type(2)),
.newsCardWrapper p:not(:nth-last-of-type(1)) > a,
.newsCardWrapper p > img {
  @apply hidden;
}

.newsCardWrapper h2 {
  @apply row-span-2 text-[3.6rem] font-extrabold leading-[4.5rem] text-gray-800 md:row-span-3;
}

.newsCardWrapper p {
  @apply pb-4 text-lg text-slate-600 md:col-span-1 md:col-start-4 md:pb-8;
}

.newsCardWrapper p > a {
  @apply bg-[#F15E51] px-12 py-5 text-lg uppercase text-slate-100 lg:hover:bg-[#00001A] lg:hover:text-slate-100;
}
</style>
