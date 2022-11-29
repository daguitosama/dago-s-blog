<script setup>
const props = defineProps({
    date: {
        type: String,
        default: '10 Nov 2022'
    }
})

</script>

<template>
    <div class="not-prose font-mono ">
        <span class="text-stone-900 dark:text-white">{{ date }}</span>
    </div>
</template>