<script setup lang="ts">
import type { Content } from "@prismicio/client";
import gsap from "gsap";
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
  <GlideLogoFrame class="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-1/2 scale-150 opacity-30" />
  <GlideLogoFrame class="absolute left-1/2 top-1/2 -translate-x-[120%] -translate-y-1/3 scale-150 opacity-30" />
  <GlideLogoFrame class="absolute left-1/2 top-1/2 -translate-x-[20%] -translate-y-2/3 scale-150 opacity-30" />
  
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
        <template  v-if="index === Math.floor(integrations.length / 2)">
           <GlideLogoStylized class="pulsing-logo shrink-0 opacity-70 brightness-100 -mt-[42px] -mb-[11px] md:mb-4 md:mt-0 md:-mr-10 md:-ml-7" />
           <div class="signalLine rotate-180"></div>
          </template>
          <div class="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-sky-50/30 bg-sky-50/25 p-4 text-3xl text-sky-100 opacity-40 md:text-3xl lg:text-5xl" >
            <Icon :name="integration" />
          </div>
          <div 
          v-if="index !== integrations.length - 1"
          class="signalLine" :class="index >= Math.floor(integrations.length / 2) ? 'rotate-180' : 'rotate-0'" />
        </template>
    </div>

  </Bounded>
</template>

<style scoped>
.signalLine {
  --rotation: 90deg;
  @apply h-[20px] w-[1.5px] bg-gradient-to-t md:h-[1.5px] md:w-[30px] lg:w-[40px] xl:w-[50px];
  background-color: hsla(0, 0%, 100%, 0.1);
  background-image: linear-gradient(
    var(--rotation),
    rgba(255, 255, 255, 0) 50%,
    #0ea5e9 50%,
    rgba(255, 255, 255, 0) 70%
  );
  background-size: 500% 500%;
}

@media(max-width: 767px) {
  .signalLine {
    --rotation: 0deg;
  }
}

</style>
