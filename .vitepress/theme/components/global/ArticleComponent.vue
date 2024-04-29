<script setup></script>

<template>
  <div class="flex items-stretch justify-start gap-4">
    <div class="w-1/2 md:w-full" :class="$style.articleImageWrapper">
      <slot name="image"></slot>
    </div>
    <div
      class="flex w-full flex-col items-start justify-around gap-6"
      :class="$style.articleTextWrapper"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style module>
.articleTextWrapper :not(h2) :not(h3) :not(p),
.articleTextWrapper h2:not(:nth-of-type(1)),
.articleTextWrapper h3:not(:nth-of-type(1)),
.articleTextWrapper p:not(:nth-of-type(1)) {
  @apply hidden;
}

.articleTextWrapper h2 {
  @apply text-[8vw] text-[#C8C7CF] md:text-5xl;
}

.articleTextWrapper h3 {
  @apply text-[4vw] text-[#060611] md:text-2xl lg:hover:text-[#EAAA53];
}

.articleTextWrapper p {
  @apply text-[3vw] text-[#B0B0B3] md:text-lg;
}

.articleImageWrapper :not(img),
.articleImageWrapper p:has(img):not(:nth-of-type(1)) {
  @apply hidden;
}

.articleImageWrapper p:has(img) {
  @apply flex justify-center;
}

.articleImageWrapper p > img {
  @apply max-h-60;
}
</style>
