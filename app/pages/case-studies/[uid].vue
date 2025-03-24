<script setup lang="ts">
import { components } from "~/slices";
import gsap from "gsap";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = await useAsyncData(
  `[case_studies-uid-${route.params.uid}]`,
  () => prismic.client.getByUID("case_studies", route.params.uid as string, {
    fetchLinks: ['case_studies.company', 
                 'case_studies.description', 
                 'case_studies.cover'
                ]
  }),
);

useSeoMeta({
  title: page.value?.data.meta_title,
  ogTitle: page.value?.data.meta_title,
  description: page.value?.data.meta_description,
  ogDescription: page.value?.data.meta_description,
  ogImage: computed(() => prismic.asImageSrc(page.value?.data.meta_image)),
});

onMounted(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches; 
  
  if (reduceMotion) {
    return;
  }

  const tl = gsap.timeline();

  tl.fromTo('.case_study__title', {
    opacity: 0,
    y: 100,
  }, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'power3.out',
  })

  tl.fromTo('.case_study__description', {
    opacity: 0,
    y: 100,
  }, {
    opacity: 1,
    y: 0,
    duration: .5,
    ease: 'power3.out',
  }, '-=.5');

    tl.fromTo('.case_study__image', {
      opacity: 0,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      ease: 'power3.out',
    }, '-=.5');
});
</script>

<template>
  <main>
    <Bounded>
      <header class="relative grid w-full place-items-center text-center">
        <GlideGrid />
        <div class="block overflow-hidden">
          <h1 class="case_study__title text-5xl font-medium text-balance md:text-7xl">
            <PrismicText :field="page?.data.company" />
            <RichTextGlideText class="case_study__title block text-lg">Case Study</RichTextGlideText>
          </h1>
        </div>
        <div class="block overflow-hidden">
        <PrismicText 
          class="case_study__description max-w-xl mb-4 mt-8 text-lg text-gray-300"
          :field="page?.data.description" 
          wrapper="p"/>
      </div>
          <PrismicImage v-if="prismic.isFilled.image(page?.data.cover)" :field="page?.data.cover" class="case_study__image max-w-4xl w-full rounded-lg h-full object-cover" /> 
      </header>
    <SliceZone
      wrapper="div"
      class="mx-auto mt-12 md:mt-16"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
    </Bounded>
  </main>
</template>