<script setup>
import { mainNavigationLinks } from '~/db'

</script>

<template>
    <header>
        <nav class=" max-w-2xl mx-auto px-[30px] py-[40px] flex items-baseline  ">
            <div>
                <h1>
                    <NuxtLink :to="localePath('/')" class="font-extrabold font-bespoke text-2xl">
                        Dago's Blog
                    </NuxtLink>
                </h1>
            </div>
            <div class="ml-[20px] sm:ml-[45px]">
                <ul class="flex items-baseline justify-between gap-2">
                    <li v-for="item, index in mainNavigationLinks" :key="index">
                        <NuxtLink class="font-text-sm font-bold" :to="localePath(item.route)">
                            {{ item.text }}
                        </NuxtLink>
                    </li>

                </ul>
            </div>
        </nav>
    </header>
</template>