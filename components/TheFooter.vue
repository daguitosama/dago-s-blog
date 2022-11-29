<script setup>
const props = defineProps({
    prop1: {}
})

</script>

<template>
    <footer class="not-prose mb-[80px] mt-[80px]  ">
        <div class="max-w-2xl mx-auto px-[30px] pt-[40px] border-t border-slate-300 dark:border-zinc-700">
            <div>

                <TheColorSelector />
            </div>

            <div class="mt-[30px]">
                <p class="text-sm">links</p>
            </div>
        </div>
    </footer>
</template>