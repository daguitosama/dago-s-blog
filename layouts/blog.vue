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

// Page Metadata
const content = useContent();

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
        <Html
            :lang="head.htmlAttrs.lang"
            :dir="head.htmlAttrs.dir"
        >
            <NuxtErrorBoundary @error="onError">
                <Head>
                    <!-- i18n metadata -->
                    <template
                        v-for="link in head.link"
                        :key="link.id"
                    >
                        <Link
                            :id="link.id"
                            :rel="link.rel"
                            :href="link.href"
                            :hreflang="link.hreflang"
                        />
                    </template>
                    <template
                        v-for="meta in head.meta"
                        :key="meta.id"
                    >
                        <Meta
                            :id="meta.id"
                            :property="meta.property"
                            :content="meta.content"
                        />
                    </template>

                    <!-- page metadata -->
                    <!-- base -->
                    <!-- <Title> {{ content.page_meta_data.title }} </Title> -->
                    <!-- <Meta
                        name="description"
                        :content="content.page_meta_data.description"
                    /> -->
                    <!-- OG -->
                    <!-- <Meta
                        property="og:title"
                        :content="content.page_meta_data.title"
                    /> -->
                    <!-- <Meta
                        property="og:description"
                        :content="content.page_meta_data.description"
                    /> -->
                    <!-- <Meta
                        property="og:image"
                        :content="content.page_meta_data.image"
                    /> -->
                    <!-- <Meta
                        property="og:site_name"
                        :content="siteName"
                    /> -->
                    <!-- use canonical -->
                    <!-- <Meta
                        property="og:url"
                        :content="canonical"
                    /> -->
                    <!-- Twitter -->
                    <!-- <Meta
                        property="twitter:card"
                        content="summary_large_image"
                    /> -->
                    <!-- <Meta
                        property="twitter:title"
                        :content="content.page_meta_data.title"
                    /> -->
                    <!-- <Meta
                        property="twitter:image"
                        :content="content.page_meta_data.image"
                    /> -->
                    <!-- <Meta
                        property="twitter:site"
                        :content="twitterSite"
                    /> -->
                </Head>

                <Body class="antialiased transition-all duration-300">
                    <p class="w-full p-4 text-3xl bg-slate-300">
                        Foo from the layout
                    </p>
                    <slot />
                </Body>
            </NuxtErrorBoundary>
        </Html>
    </div>
</template>
