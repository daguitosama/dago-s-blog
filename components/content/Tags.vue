<script setup>
const props = defineProps({
    tags: {
        type: Array,
        default: () => ['tag']
    }
})

</script>

<template>
    <div class="not-prose  font-mono text-primary-on-light-base">
        <ul class="flex gap-2 items-center">
            <li v-for="tag, index in tags" :key="index">
                <span class="">
                    #{{ tag }}
                </span>
            </li>
        </ul>
    </div>
</template>