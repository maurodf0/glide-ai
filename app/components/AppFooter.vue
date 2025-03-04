<script lang="ts">

</script>

<template>
    <footer>
        <nav aria-label="Main">
             <NuxtLink to="/" class="flex items-center z-50" @click="isOpen = false">
                    <GlideLogo />
                </NuxtLink>

                <ul class="hidden md:flex items-center gap-6">
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
