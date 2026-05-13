<script setup lang="ts">

defineProps<{
  title: string
}>()

const emit = defineEmits<{
  clicked: [void]
}>()

const handleClick = () => {
  emit('clicked')
}

</script>

<template>
  <div
      @click="handleClick"
      class="w-full py-3 px-4
      bg-linear-to-r from-indigo-600 to-indigo-700
      hover:from-indigo-700 hover:to-indigo-800
      text-white font-semibold rounded-xl text-center
      shadow-md hover:shadow-lg hover:cursor-pointer
      focus:outline-none
      transition-all duration-200 disabled:opacity-60"
  >
    {{ title }}
  </div>
</template>

<style scoped>
</style>