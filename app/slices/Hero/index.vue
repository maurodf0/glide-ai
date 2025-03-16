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

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (prefersReducedMotion) {
    return;
  }
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
  y: 50,
  opacity: 0,
}, {
  y:0,
  opacity: 1,
  duration: 1.2,
}, "-=0.6");
tl.fromTo('.hero-cta', {
  scale: 1.5,
  opacity: 0,
}, {
  scale: 1,
  opacity: 1,
  duration: 1.2,
},"-=0.8") 

tl.fromTo('.hero__image', {
  y: 100,
  opacity: 0,
}, {
  y:0,
  opacity: 1,
  duration: 1.2,
}, "-=0.3");
tl.fromTo('.hero__glow--1', {
  scale: 0.5,
  opacity: 0,
}, {
  scale: 1,
  opacity: 1,
  duration: 2.2,
},"-=1.3")
tl.fromTo('.hero__glow--2', {
  scale: 0.5,
  opacity: 0,
}, {
  scale: 1,
  opacity: 1,
  duration: 2.2,
},"-<")

gsap.to('.hero__glow--1', {
  ease: "power2.inOut",
  repeat: -1,
  repeatDelay: 0,
  keyframes: [
   { top: '0%', left: '33%', duration: 0},
   { top: '33%', left: '33%', duration: 2},
    { top: '33%', left: '0%', duration: 3},
    { top: '0%', left: '0%', duration: 2},
    { top: '0%', left: '33%', duration: 3},
  ]
});
gsap.to('.hero__glow--2', {
  ease: "power2.inOut",
  repeat: -1,
  repeatDelay: 0,
  keyframes: [
   { top: '33%', left: '0%', duration: 0},
   { top: '0%', left: '0%', duration: 2},
    { top: '0%', left: '33%', duration: 3},
    { top: '33%', left: '33%', duration: 2},
    { top: '33%', left: '0%', duration: 3},
  ]
});

});
</script>

<template>
  <Bounded 
  class="bounded-container"
    as="main"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
<div class="text-center relative">
  <GlideGrid />
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
  <div class="glassContainer hero__image">
      <PrismicImage 
        :field="slice.primary.image"
        class="hero-img"
        />
        <div class="hero__glow--1 BlurredShadow"></div>
        <div class="hero__glow--2 BlurredShadow bottom"></div>
    </div>
</div>
  </Bounded>
</template>
