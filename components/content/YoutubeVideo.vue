<script setup>
const props = defineProps({
    videoId: {
        type: String,
    },

    /**
     * Seconds to delay the YT iframe load (defaults: 4)
     */
    loadDelay: {
        type: Number,
        default: 4
    }
});
const render_player = ref(false);
const iframe_loaded = ref(false);
function mountSecuence() {
    if (!document) {
        return
    }
    setTimeout(startIframeLoad, props.loadDelay * 1000)
}


function startIframeLoad() {
    render_player.value = true
}

function onIframeLoad() {
    iframe_loaded.value = true;
}

onMounted(mountSecuence);
</script>

<template>
    <div class=" max-w-2xl sm:px-[0px] mb-[40px] flex items-center justify-center h-[350px] w-full  sm:rounded-xl "
        :class="{ ' bg-slate-200 dark:bg-slate-400 animate-pulse': !render_player || !iframe_loaded }">
        <div class="w-full h-full  mx-auto" v-if="render_player">
            <iframe height="100%" width="100%" :src="'https://www.youtube.com/embed/' + videoId" frameborder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                class="sm:rounded-xl border-b-4 border-t-4 sm:border-4 border-black dark:border-white"
                :onload="onIframeLoad"></iframe>
        </div>
    </div>
</template>
