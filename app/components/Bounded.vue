<script setup lang="ts">
    defineProps<{as?: string}>()
</script>

<template>
 <Component :is="as || 'section'"
    class="px-4 py-14 first:!pt-10" />
    <div class="mx-auto w-full max-w-6xl flex-col items-center">
        <slot/>
    </div>
  </template>