<script setup lang="ts">
const grid = [14, 30];

</script>

<template>
    <svg id="glideGrid"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 935 425"
    class="glideGrid"
    style="mask-image: linear-gradient(black, transparent);">
    <g class="glide-grid-group" />
    <template v-for="i in grid[0]" :key="i">
        <path 
        v-for="j in grid[1]" :key="j"
        fill="currentColor"
        opacity="0.2"
        class="glide-grid-item"
        :d="`M${(j - 1) * 32 + 5} ${(i - 1) * 32 + 10 }L5 0L0 2.95082L3.93548 4L3.19355 2.95082Z`"  
        />
    </template>    
    </svg>
</template>
