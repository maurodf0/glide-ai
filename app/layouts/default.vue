<script setup lang="ts">
    const prismic = usePrismic();
const lenis = useLenis(({ scroll, velocity, progress, direction }) => { ... })



    const { data: settings } = await useAsyncData( () => prismic.client.getSingle('settings'));

    useSeoMeta({
        title: settings.value?.data.site_title,
        description: settings.value?.data.meta_description,
        ogTitle: settings.value?.data.site_title,
        ogImage: computed(() => prismic.asImageSrc(settings.value?.data.meta_image)),
    });
</script>


<template>
    <Lenis root>
        <AppHeader :settings="settings" />
        <slot />
        <AppFooter :settings="settings" />
    </Lenis>
</template>


