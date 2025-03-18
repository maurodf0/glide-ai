<script setup lang="ts">
import type { Content } from "@prismicio/client";
import GlideText from "~/components/RichText/GlideText.vue";
import Heading2 from "~/components/RichText/Heading2.vue";

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
      :components="{heading2: Heading2,  em: GlideText}"
      :field="slice.primary.heading" />
    <PrismicRichText 
    class="glideTextEm"
    :field="slice.primary.body" />
    <template v-for="item in slice.primary.bento" :key="item.id">
      <PrismicRichText :field="item.title" />
      <PrismicRichText :field="item.body" />
      <PrismicImage :field="item.image" />
    </template>
  </Bounded>
</template>
