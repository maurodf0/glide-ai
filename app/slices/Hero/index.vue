<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HeroSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <Bounded 
  class="bounded-container"
    as="main"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
<div class="text-center relative">
    <PrismicText 
      :field="slice.primary.heading" 
      wrapper="h1"/>

    <PrismicText 
      :field="slice.primary.body"
      wrapper="p"
      class="hero-p" />
    <div class="ctas">
      <PrismicLink
        v-for="link in slice.primary.ctas" :key="link.key"
         :field="link"
         class="buttonLink text-center hero-cta"
         />
    </div>
  <PrismicImage 
    :field="slice.primary.image"
    class="rounded-lg" />
</div>
  </Bounded>
</template>
