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
        <span>{{ date }}</span>
    </div>
</template>