<script setup></script>

<template>
  <div class="carousel-item">
    <div class="w-full" :class="$style.carouselSlideImg">
      <slot />
    </div>
  </div>
</template>

<style module>
.carouselSlideImg p :not(img),
.carouselSlideImg p img:not(:nth-of-type(1)) {
  @apply hidden;
}

.carouselSlideImg img {
  @apply rounded-lg;
}
</style>
