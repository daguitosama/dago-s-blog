<script setup>
const props = defineProps({
    videoId: {
        type: String,
    },
});
</script>

<template>
    <div class="flex items-center justify-center h-[350px] w-full p-2">
        <div class="w-full h-full max-w-2xl mx-auto">
            <iframe
                height="100%"
                width="100%"
                :src="'https://www.youtube.com/embed/' + videoId"
                frameborder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="rounded-xl"
            ></iframe>
        </div>
    </div>
</template>
