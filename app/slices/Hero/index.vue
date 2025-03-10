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
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    
 <PrismicRichText :field="slice.primary.heading" />
 <PrismicRichText :field="slice.primary.body" />
 <template v-for="link in slice.primary.ctas" :key="link.key">
  <PrismicLink :field="link" />
</template>
<PrismicImage :field="slice.primary.image" />


  </Bounded>
</template>
