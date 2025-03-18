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
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <PrismicRichText 
      :components="{heading2: Heading2,  em: GlideText}"
      :field="slice.primary.heading" />
    <PrismicRichText 
    wrapper="div"
    class="mx-auto mt-6 max-w-md text-balance text-center text-gray-300"
    :field="slice.primary.body" />
    <div class="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
      <article 
        v-for="item in slice.primary.bento" 
        :key="$prismic.asText(item.title)"
        class="glassContainer grid grid-rows gap-4 rounded-lg bg-gray-950/60 p-4"
        :class="item.is_wide ? 'md:col-span-2' : 'md:col-span-1'">
        <PrismicRichText 
        wrapper="h3"
          class="text-2xl"
          :field="item.title" />
        <PrismicRichText
          wrapper="div"
          class="max-w-md text-balance text-gray-300" 
          :field="item.body" />
        <PrismicImage
          class="max-h-36 w-full object-cover" :field="item.image" />
      </article>
    </div>
  </Bounded>
</template>
