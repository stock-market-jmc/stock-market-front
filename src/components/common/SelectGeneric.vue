<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  selectedOption: string
  options: string[]
}>()

const emit = defineEmits<{
  'updateOption': [value: string]
}>()

const open = ref(false)

const selectOption = (option: string) => {
  console.log('Generic',option)
  emit('updateOption', option)
  open.value = false
}
</script>

<template>
  <div class="relative w-72 md:w-96 shrink-0">
    <div
        @click="open = !open"
        class="bg-white border border-gray-200 rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer transition-all duration-200 hover:shadow-md hover:border-gray-300"
    >
      <span class="text-gray-800 font-medium">{{ selectedOption }}</span>
      <span class="text-gray-500 transition-transform duration-75" :class="{ 'rotate-180': open }">▼</span>
    </div>

    <div
        v-if="open"
        class="z-50 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden top-full left-0 w-full mt-1"
    >
      <div
          v-for="option in options"
          :key="option"
          @click="selectOption(option)"
          class="px-4 py-3 cursor-pointer w-full text-gray-700 transition-all duration-150 hover:bg-gray-50 hover:text-gray-900"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>