<script setup lang="ts">
import gsap from "gsap";
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

onMounted(() => {
  const tl = gsap.timeline({defaults: {
    ease: "power2.inOut"
  }
});

tl.fromTo('.hero__heading', {
  scale: 0.5,
  opacity: 0,
}, {
  scale: 1,
  opacity: 1,
  duration: 1.4,
});
tl.fromTo('.hero__body', {
  y:-50,
  opacity: 0,
}, {
  y:0,
  opacity: 1,
  duration: 1.4,
})

}) 
</script>

<template>
  <Bounded 
  class="bounded-container"
    as="main"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
<div class="text-center relative">
    <PrismicText 
      :field="slice.primary.heading" 
      wrapper="h1"
      class="hero__heading" />

    <PrismicText 
      :field="slice.primary.body"
      wrapper="p"
      class="hero__body" />
    <div class="ctas">
      <PrismicLink
        v-for="link in slice.primary.ctas" :key="link.key"
         :field="link"
         class="buttonLink text-center hero-cta"
         />
    </div>
  <div class="glassContainer">
      <PrismicImage 
        :field="slice.primary.image"
        class="hero-img"
        />
        <div class="BlurredShadow"></div>
        <div class="BlurredShadow bottom"></div>
    </div>
</div>
  </Bounded>
</template>
