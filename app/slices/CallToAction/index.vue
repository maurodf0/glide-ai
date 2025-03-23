<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CallToActionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>

  <Bounded
    class="!py-32"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
  <div class="glow absolute aspect-square w-full max-w-sm rounded-full bg-sky-500/50 blur-[160px] filter -z-10"></div>
  <div class="glassContainer rounded-lg bg-gradient-to-b from-gray-800 to bg-gray-900 p-4 md:rounded-xl">
    <GlideIcon class="w-24 h-24" />
  </div>
    <PrismicText :field="slice.primary.heading"
    wrapper="h2"
    class="mt-8 max-w-xl text-balance text-center text-5xl md:text-7xl font-medium" />
    <div class="mt-6 flex flex-wrap justify-center gap-4 md:gap-8">
    <PrismicLink 
      v-for="link in slice.primary.ctas" 
        :key="link.key" 
        :field="link"
        class="buttonLink"/>

    </div>

</Bounded>
</template>
