<script setup>
const props = defineProps({
    date: {
        type: String,
        default: '10 Nov 2022'
    },
    tags: {
        type: Array,
        default: () => ['tag']
    }
})

</script>

<template>
    <div class="my-[40px] px-[30px] text-base not-prose">
        <Date :date="date" class="py-[5px]" />
        <Tags :tags="tags" class="py-[5px]" />
    </div>
</template>