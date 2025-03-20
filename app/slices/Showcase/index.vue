<script setup lang="ts">
import type { Content } from "@prismicio/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/scrollTrigger";

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

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    return;
  }

  gsap.fromTo('.showcase__heading', {
    y: 100,
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: '.showcase__heading',
      start: 'top center+=200',
      end: '100% center-=150',
      markers: true,
      scrub: true,
      toggleActions: 'play pause resume reverse',
    },

  });

  // gsap.fromTo('.showcase__glow', {
  //   opacity: 0,
  //   scale: 0.5,
  //   y: 100,
  // }, {
  //   opacity: 1,
  //   scale: 1,
  //   y: 0,
  //   scrollTrigger: {
  //     trigger: '.showcase__heading',

  //     scrub: true,
  //     toggleActions: 'play pause resume reverse',
  //   }
  //   });
});

</script>

<template>
  <Bounded
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
  <div class="absolute -z-10 aspect-video w-full max-w-2xl rounded-full bg-sky-700 blur-[120px] filter mix-blend-screen"></div>
   <PrismicRichText 
    wrapper="header"
    class="showcase__heading text-balance text-center text-5xl md:text-7xl font-medium"
    :field="slice.primary.heading" />
    <article 
    class="relative mt-16 grid items-center gap-8 rounded-xl border border-sky-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 p-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12">
    <div class="showcase__glow gridBackground"></div>
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

<style scoped>

.gridBackground {
  background-image: url('/assets/grid-pattern.png');
  position: absolute;
  inset: 0;
  background-repeat: repeat repeat;
  z-index: -1;
  background-position: center;
  opacity: .15;
  mask-image: radial-gradient(circle at 60% 50%, black 10%, transparent 40%);
}
</style>