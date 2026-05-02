<script setup lang="ts" generic="T">
import {ref} from 'vue'
import type {SelectOption} from "@/types/SelectOption.ts";

const props = defineProps<{
  selectedOption: SelectOption<T>
  options: SelectOption<T>[]
  closeOnclick: boolean
  selectClass?: string
}>()

const emit = defineEmits<{
  'optionSelected': [value: SelectOption<T>],
  'closeOnClick': [false]
}>()

const open = ref(false)

const onSelectOption = (option: SelectOption<T>) => {
  emit('optionSelected', option)
  if (props.closeOnclick) {
    open.value = false
  }
}

const onClick = () => {
  open.value = !open.value
  emit('closeOnClick', false)
}

const customizedClass = (option: SelectOption<T>) => {
  return option.selected ? props.selectClass : ''
}
</script>

<template>
  <div class="relative w-72 md:w-96 shrink-0">
    <div
        @click="onClick"
        class="bg-white border border-gray-200 rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer transition-all duration-200 hover:shadow-md hover:border-gray-300"
    >
      <span class="text-gray-800 font-medium">{{ selectedOption.label }}</span>
      <span class="text-gray-500 transition-transform duration-75" :class="{ 'rotate-180': open }">▼</span>
    </div>

    <div
        v-if="open"
        class="z-50 absolute bg-white border border-gray-200
        rounded-xl shadow-lg overflow-hidden
        top-full left-0 w-full mt-1
        max-h-[70vh] overflow-y-auto"
    >
      <div
          v-for="option in options"
          :key="option.label"
          @click="onSelectOption(option)"
          class="px-4 py-3 cursor-pointer w-full text-gray-700 transition-all duration-150 hover:bg-gray-50 hover:text-gray-900"
          :class="customizedClass(option)"
      >
        {{ option.label }}
      </div>
      <slot/>
    </div>
  </div>
</template>