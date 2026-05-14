<script setup lang="ts">
import {useRoute} from "vue-router";
import {useMainStore} from "@/stores/MainStore.ts";
import {computed, onBeforeMount} from "vue";
import HomeCard from "@/components/Home/HomeCard.vue";
import {useHomeOptionsStore} from "@/stores/HomeOptionsStore.ts";

const route = useRoute()

const mainStore = useMainStore()
const homeOptionsStore = useHomeOptionsStore()

const homeOptions = computed(() => homeOptionsStore.homeOptions)
onBeforeMount(() => {
  mainStore.setPageTitle(route.meta.title)
})
</script>

<template>
  <div class="py-4 px-2 grid grid-cols-1 md:grid-cols-3 gap-4">
    <HomeCard
        v-for="option in homeOptions"
        :key="option.slug"
        :content="option.description"
        :option="option"/>
  </div>
</template>

<style scoped>

</style>