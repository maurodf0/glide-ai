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
      class="group relative grid gap-4 opacity-85 transition-opacity will-change-auto duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 lg:grid-cols-3"
      v-for="(caseStudy, index) in caseStudies"
      :key="caseStudy.id">
      <div class="col-span-1 flex flex-col justify-center gap-4">
        <PrismicText
        wrapper="h3"
        class="text-4xl" 
        :field="caseStudy.data.company"/>
      <PrismicRichText
        class="max-w-md"
        wrapper="div"      
       :field="caseStudy.data.description"/>
       <PrismicLink 
        class="z-10 after:absolute after:inset-0 hover:underline"
        :document="caseStudy">Read <PrismicText :field="caseStudy.data.company"/></PrismicLink>
      </div>
      <div 
      class="relative lg:col-span-2"
      :class="index % 2 && 'md:-order-1'" >
        <div class="imageGlow -bottom-8 left-4 bg-sky-500"></div>
        <div class="imageGlow -right-4 top-8 bg-teal-500"></div>
        <PrismicImage 
        class="z-20 scale-[.98] rounded-xl transition-transform duration-300 will-change-auto group-hover:scale-100"
        :field="caseStudy.data.cover"/>
      </div>
    </article>
    
</div>

  </Bounded>
</template>


<style scoped>

  .imageGlow {
    @apply absolute h-1/2 w-1/2 rounded-full blur-3xl opacity-0 mix-blend-screen transition-opacity will-change-auto duration-500 group-hover:opacity-50;
  }

</style>