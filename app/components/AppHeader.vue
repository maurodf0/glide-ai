<script setup lang="ts">
import type { Content } from '@prismicio/client'
    defineProps<{
        settings?: Content.SettingsDocument
    }>()

    const isOpen = ref(false);


</script>


<template>
    <header class="p-4 md:p-6">
        <nav aria-label="Main" class="flex flex-col mx-auto max-w-6xl justify-between py-2 md:flex-row md:items-center md:justify-between">
            <div class="flex items-center justify-between">
                <NuxtLink to="/" class="flex items-center z-50" @click="isOpen = false">
                    <GlideLogo />
                    <span class="sr-only">{{ settings?.data.site_title }}</span>
                </NuxtLink>
                <button class="block md:hidden p-2 text-3xl" :aria-expanded="isOpen" @click="isOpen = true">
                    <Icon name="ph:list-bold" />
                </button>
            </div>

            <div
            class="md:hidden fixed inset-0 z-40 flex flex-col items-end bg-gray-950 pr-4 pt-6 transition-transform duration-300 ease-in-out will-change-transform"
            :class="isOpen ? 'translate-x-0' : 'translate-x-full'" >
                <button 
                    @click="isOpen = false"
                    class="block p-2 text-3xl">
                   <Icon name="ph:x-bold"/>
                </button>

                  <ul class="grid justify-items-end gap-6">
                    <li v-for="link in settings?.data.navigation" :key="link.key">
                        <PrismicLink 
                            :field="link" 
                            :class="{ buttonLink: link.variant === 'Button' }"
                            class="block min-h-11 px-3 text-3xl first:mt-8 "/>
                    </li>
                </ul>
            </div>

            <ul class="hidden md:flex items-center gap-6">
                <li v-for="link in settings?.data.navigation" :key="link.key">
                    <PrismicLink 
                        :field="link" 
                        :class="{ buttonLink: link.variant === 'Button' }"
                        class="inline-flex min-h-11 items-center "/>
                </li>
            </ul>
        </nav>
    </header>
</template>

