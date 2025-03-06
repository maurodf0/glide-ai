<script setup lang="ts">
    import type { Content } from '@prismicio/client'
    defineProps<{
        settings?: Content.SettingsDocument
    }>()
</script>

<template>
    <footer>
        <nav aria-label="Footer">
             <NuxtLink to="/" class="flex items-center z-50" @click="isOpen = false">
                    <GlideLogo />
                </NuxtLink>

                <ul class="md:flex  gap-6">
                    <li v-for="link in settings?.data.navigation" :key="link.key">
                        <PrismicLink 
                            :field="link" 
                            :class="{ buttonLink: link.variant === 'Button' }"
                            class="inline-flex min-h-11 items-center "/>
                    </li>
                </ul>
        </nav>
    </footer>    
</template>
