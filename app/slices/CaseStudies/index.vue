<script setup lang="ts">
import type { Content } from "@prismicio/client";
const prismic = usePrismic();

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.CaseStudiesSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const caseStudies = computed( () => {
  return props.slice.primary.case_studies
  .map(item => item.link)
  .filter(link => prismic.isFilled.contentRelationship(link)) as unknown as Content.CaseStudyDocument[];
  });

</script>

<template>
  <Bounded
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    
  <PrismicRichText 
  wrapper="h2"
  class="max-w-2xl text-balance text-center text-5xl md:text-7-xl font-medium"
    :field="slice.primary.heading" />
  <PrismicRichText 
  wrapper="div"
  class="mx-auto mt-6 max-w-md text-balance text-center text-gray-300"
    :field="slice.primary.body" />
    <div class="grid mt-20 gap-16">
    <article 
      v-for="caseStudy in caseStudies"
      :key="caseStudy.id">
      <PrismicText :field="caseStudy.data.company"/>
      <PrismicRichText :field="caseStudy.data.description"/>
      <PrismicImage :field="caseStudy.data.cover"/>
    </article>
</div>

  </Bounded>
</template>

