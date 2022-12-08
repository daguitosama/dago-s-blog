<script setup>
const props = defineProps({
    date: {
        type: String,
        default: '10 Nov 2022'
    }
})

const dateIntFormater = Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format;
const formatDate = (dateStr = "") => dateIntFormater(new Date(dateStr));

</script>

<template>
    <div class="not-prose font-mono ">
        <span class="text-stone-900 dark:text-white">{{ formatDate(date) }}</span>
    </div>
</template>