<script setup>
const props = defineProps({
    prop1: {},
});

// content
// published post quer
// const posts = await (await queryContent("posts").find()).reverse();
const posts = await queryContent("posts").find();
posts.reverse();
// all posts query
// const posts = await queryContent('posts').find();
// console.log(Object.entries(posts[0]))

// date
const dateIntFormater = Intl.DateTimeFormat("en", { dateStyle: "medium" }).format;
const dateFormater = (dateStr = "") => dateIntFormater(new Date(dateStr));
// const dateFormater = (dateStr = "") => dateStr;
</script>

<template>
    <div class="not-prose w-full max-w-2xl">
        <ul class="grid">
            <li
                v-for="post in posts"
                :key="post.uuid"
            >
                <PostListItem
                    :post="post"
                    :dateFormater="dateFormater"
                />
            </li>
        </ul>
    </div>
</template>
