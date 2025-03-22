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
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>