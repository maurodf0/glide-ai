<script setup lang="ts">
import type { Content } from '@prismicio/client'
    defineProps<{
        settings?: Content.SettingsDocument
    }>()
</script>


<template>
    <header class="p-4 md:p-6">
        <nav aria-label="Main" class="flex justify-between items-center ">
            <NuxtLink to="/" class="flex items-center">
                <GlideLogo />
            </NuxtLink>
            <ul class="hidden md:flex items-center gap-6">
                <li v-for="link in settings?.data.navigation" :key="link.key">
                    <PrismicLink :field="link" :class="link.variant" />
                </li>
            </ul>
        </nav>
    </header>
</template>

