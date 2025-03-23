<script setup lang="ts">
import type { Content } from "@prismicio/client";
const prismic = usePrismic();

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.IntegrationsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const integrations = computed( () => {
  return props.slice.primary.integrations
  .map(item => item.icon_id)
  .filter(icon => prismic.isFilled.keyText(icon))
})

</script>

<template>
  <Bounded
    class="relative overflow-hidden"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
  <img src="/assets/gradient.png"
    class="absolute inset-0 h-full w-full object-cover">

    <PrismicText 
    wrapper="h2"
    class="relative text-balance text-center text-5xl md:text-7xl font-medium  bg-gradient-to-b from-sky-50 to bg-sky-300 bg-clip-text text-transparent py-2"
    :field="slice.primary.heading" />
    <PrismicRichText 
    wrapper="div"
    class="relative text-center mt-6 text-gray-300 max-w-md mx-auto"
    :field="slice.primary.body" />

    <div class="mt-20 flex flex-col md:flex-row items-center">
      <template v-for="(integration, index) in integrations" :key="integration">
           <GlideLogoStylized 
              v-if="index === Math.floor(integrations.length / 2)"
              class="pulsing-logo shrink-0 opacity-70 brightness-100 -mt-[42px] -mb-[11px] md:mb-4 md:mt-0 md:-mr-10 md:-ml-7" />
          <div class="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-sky-50/30 bg-sky-50/25 p-4 text-3xl text-sky-100 opacity-40 md:text-3xl lg:text-5xl" >
            <Icon :name="integration" />
          </div>
        </template>
    </div>

  </Bounded>
</template>
