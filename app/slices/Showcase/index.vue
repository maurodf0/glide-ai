<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ShowcaseSlice>([
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
    wrapper="header"
    class="text-balance text-center text-5xl md:text-7xl font-medium"
    :field="slice.primary.heading" />
    <article 
    class="relative mt-16 grid items-center gap-8 rounded-xl border border-sky-50/20 bg-gradiant-to-b from-gray-50/15 to-gray-50/5 p-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12">
      <div>
        <figure class="w-fit rounded-lg bg-sky-900 p-4 text-3xl border-gray-100/10 border-4">
          <Icon :name="slice.primary.icon" class="block" />
        </figure>
        <PrismicText 
          wrapper="h3"
          :field="slice.primary.subheading" 
          class="mt-6 text-2xl font-bold" />
        <PrismicRichText 
          :field="slice.primary.body" 
          wrapper="div"
          class="prose prose-invert mt-4 max-w-xl"/>
        <PrismicLink 
          class="buttonLink mt-6"
          :field="slice.primary.cta" />
      </div>
      <PrismicImage 
        :class="slice.variation === 'reversed' ? 'lg:order-1 lg:translate-x-[15%]' : 'lg:-order-1 lg:translate-x-[-15%]'"
        class="opacity-90 shadow-2xl lg:col-span-2 lg:pt-0"
        :field="slice.primary.image" />
   </article>
  </Bounded>
</template>
