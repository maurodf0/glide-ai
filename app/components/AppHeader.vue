<script setup lang="ts">
import type { Content } from '@prismicio/client'
    defineProps<{
        settings?: Content.SettingsDocument
    }>()
</script>


<template>
    <header class="py-4 max-w-screen-md mx-auto">
      <GlideLogo />
    </header>
</template>

