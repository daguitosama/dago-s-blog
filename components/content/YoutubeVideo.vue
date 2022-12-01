<script setup>
const props = defineProps({
    videoId: {
        type: String,
    },
    // if want to explicity load the video 
    // affter a time
    // the component will wait full page load as to render
    // will fallback to the delay
    /**
     * Seconds to delay the YT iframe load
     */
    loadDelay: {
        type: Number,
        default: 4
    }
});
const render_player = ref(false);
var loader_was_trigger = false;
function mountSecuence() {
    if (!document) {
        return
    }
    // console.log('mountSecuence')
    window.addEventListener('load', onWindowLoad);
    setTimeout(fallbackLoad, props.loadDelay * 1000)
}

function unMountSecuence() {
    window.removeEventListener('load', onWindowLoad)
}

function onWindowLoad() {
    loader_was_trigger = true;
    render_player.value = true
    // console.log('onWindowLoad', { rp: render_player.value })
}

function fallbackLoad() {
    if (!loader_was_trigger) {
        render_player.value = true
    }
}

onMounted(mountSecuence);
onUnmounted(unMountSecuence);
</script>

<template>
    <div class=" max-w-2xl sm:px-[0px] mb-[40px] flex items-center justify-center h-[350px] w-full  sm:rounded-xl "
        :class="{ 'border-b-4 border-t-4 sm:border-4 border-black dark:border-white': !render_player }">
        <div class="w-full h-full  mx-auto" v-if="render_player">
            <iframe height="100%" width="100%" :src="'https://www.youtube.com/embed/' + videoId" frameborder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                class="sm:rounded-xl border-b-4 border-t-4 sm:border-4 border-black dark:border-white"></iframe>
        </div>
    </div>
</template>
