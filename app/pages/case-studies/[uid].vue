<script setup lang="ts">
import { components } from "~/slices";

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
</script>

<template>
  <main>
    <Bounded>
      <header class="relative grid w-full place-items-center text-center">
        <GlideGrid />
        <h1 class="text-5xl font-medium text-balance md:text-7xl">
          <PrismicText :field="page?.data.company" />
          <RichTextGlideText class="block text-lg">Case Study</RichTextGlideText>
        </h1>
        <PrismicText 
          class="max-w-xl mb-4 mt-8 text-lg text-gray-300"
          :field="page?.data.description" 
          wrapper="p"/>
          <PrismicImage v-if="prismic.isFilled.image(page?.data.cover)" :field="page?.data.cover" class="max-w-4xl w-full rounded-lg h-full object-cover" /> 
      </header>
    <SliceZone
      wrapper="div"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
    </Bounded>
  </main>
</template>