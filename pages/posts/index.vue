<script setup>
/**
 * I18n Meta Data
 */

// i18n metadata
// https://v8.i18n.nuxtjs.org/guide/seo/
const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: "id",
    addSeoAttributes: true,
});

// canonical
const canonical = computed(
    () => head.value?.link.filter((link) => link.rel == "canonical")[0].href
);


// Fixed Metadata Values
const {
    public: { siteName, twitterSite },
} = useRuntimeConfig();

function onError(error) {
    console.error(error);
}



</script>
<template>
    <div>
        <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
        <NuxtErrorBoundary @error="onError">

            <Head>
                <!-- i18n metadata -->
                <template v-for="link in head.link" :key="link.id">
                    <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
                </template>
                <template v-for="meta in head.meta" :key="meta.id">
                    <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
                </template>

                <!-- page metadata -->
                <!-- base -->
                <Title> Posts | Dago's Blog</Title>
                <Meta name="description" content="Dago's Blog Posts" />
                <!-- OG -->
                <Meta property="og:title" content="Posts" />
                <Meta property="og:description" content="Dago's Blog Posts" />
                <Meta property="og:image" content="https://dago-s-blog.pages.dev/img/social.jpg" />
                <Meta property="og:site_name" :content="siteName" />
                <!-- use canonical -->
                <Meta property="og:url" :content="canonical" />
                <!-- Twitter -->
                <Meta property="twitter:card" content="summary_large_image" />
                <Meta property="twitter:title" content="Posts" />
                <Meta property="twitter:image" content="https://dago-s-blog.pages.dev/img/social.jpg" />
                <Meta property="twitter:site" :content="twitterSite" />
            </Head>

            <Body
                class="antialiased transition-all duration-300 bg-white dark:bg-[#131D26] text-stone-900 dark:text-white">

                <!-- nav -->
                <div class=" w-full mb-[40px]">
                    <TheNavigation />
                </div>

                <main class="
                            
                            max-w-2xl mx-auto

                            prose-headings:mx-[30px] prose-headings:font-bespoke 
                            
                            prose-h1:text-4xl
                            md:prose-h1:text-5xl md:prose-h1:leading-tight
                            
                            prose-p:mx-[30px] 
                            
                        ">

                    <h1 class="text-4xl sm:text-5xl font-extrabold">Posts</h1>

                    <PostList class="mt-[40px]" />

                </main>
                <TheFooter />
            </Body>
        </NuxtErrorBoundary>

        </Html>
    </div>
</template>