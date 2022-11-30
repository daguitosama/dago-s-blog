<script setup>
import { mainNavigationLinks, secundaryNavigationLinks, rssLink } from '~/db'


</script>

<template>
    <footer class="not-prose mb-[80px] mt-[80px]  ">
        <!-- border-t-2 border-slate-300 dark:border-zinc-500 -->
        <div class="max-w-2xl mx-auto px-[30px] pt-[40px] ">
            <div>
                <TheColorSelector />
            </div>

            <div class="mt-[30px]">
                <ul class="grid grid-cols-2 gap-4 ">
                    <li v-for="item, index in mainNavigationLinks" :key="index" class="
                            py-[5px]
                        ">
                        <NuxtLink :to="item.route" class="font-bold text-sm">
                            {{ item.text }}
                        </NuxtLink>
                    </li>
                    <li v-for="item, index in secundaryNavigationLinks" :key="index" class="
                            py-[5px]
                        ">
                        <NuxtLink :to="item.route" class="font-bold text-sm">
                            {{ item.text }}
                        </NuxtLink>
                    </li>
                    <li class="
                            py-[5px]
                        ">
                        <NuxtLink :to="rssLink.route" class="font-bold text-sm">
                            {{ rssLink.text }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>