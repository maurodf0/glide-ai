<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.IntegrationsSlice>([
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
    wrapper="h2"
    class="text-balance text-center text-5xl md:text-7xl font-medium"
    :field="slice.primary.heading" />
    <PrismicRichText 
    wrapper="div"
    class="text-center text-gray-300 max-w-md mx-auto"
    :field="slice.primary.body" />
    <div  class="grid grid-cols-5 gap-4 mt-16 mx-auto">
      <div 
        v-for="item in slice.primary.integrations"
        :key="item.id">
        <Icon :name="item.icon_id" />
      </div>
    </div>
  </Bounded>
</template>
