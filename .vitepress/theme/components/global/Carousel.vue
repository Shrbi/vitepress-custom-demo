<script setup></script>

<template>
  <div
    class="carousel carousel-center w-full max-w-md space-x-4 rounded-box bg-neutral p-4"
    :class="$style.carouselFrame"
  >
    <slot></slot>
  </div>
</template>

<style module>
.carouselFrame > :not(div[id^="slide_"]) {
  @apply hidden;
}
</style>
