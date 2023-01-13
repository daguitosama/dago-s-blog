<script setup>
const props = defineProps({
    post: {
        type: Object,
        default: {
            uuid: "",
            title: "",
            description: "",
            date: "",
            _path: "",
        },
    },
    dateFormater: {
        type: Function,
        default: (date) => "formatedDate",
    },
});
</script>

<template>
    <div class="not-prose border-b border-slate-200 dark:border-zinc-500 px-[30px] py-[40px]">
        <NuxtLink
            :to="post._path"
            class="inline-block hover:underline hover:text-primary-on-light-base dark:hover:text-primary-on-dark-base cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
        >
            <h2 class="font-bespoke font-bold text-2xl">
                {{ post.title }}
            </h2>
        </NuxtLink>

        <div class="mt-2">
            <time
                :datetime="post.date"
                class="font-medium font-mono text-sm opacity-70"
            >
                {{ dateFormater(post.date) }}
            </time>
        </div>

        <div class="mt-4">
            <NuxtLink
                :to="post._path"
                class="inline-block border-b-2 border-b-slate-500 hover:text-primary-on-light-base dark:hover:text-primary-on-dark-base cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
                <p class="font-bold text-sm">
                    <span> Read Post</span>
                </p>
            </NuxtLink>
        </div>
    </div>
</template>
