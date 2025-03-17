<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.BentoSlice>([
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
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <PrismicRichText 
      :components="{em: RichTextGlideText}"
      :field="slice.primary.heading" />
    <PrismicRichText :field="slice.primary.body" />
    <template v-for="item in slice.primary.bento" :key="item.id">
      <PrismicRichText :field="item.title" />
      <PrismicRichText :field="item.body" />
      <PrismicImage :field="item.image" />
    </template>
  </Bounded>
</template>
