<script setup>
const props = defineProps({
    videoId: {
        type: String,
    },
});
</script>

<template>
    <div class=" max-w-2xl sm:px-[0px] mb-[40px] flex items-center justify-center h-[350px] w-full   ">
        <div class="w-full h-full  mx-auto">
            <iframe height="100%" width="100%" :src="'https://www.youtube.com/embed/' + videoId" frameborder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                class="sm:rounded-xl"></iframe>
        </div>
    </div>
</template>
