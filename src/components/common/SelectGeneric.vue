<script setup lang="ts">
import {ref} from 'vue'

const props = defineProps<{
  selectedOption: string
  options: string[]
  closeOnclick: boolean
}>()

const emit = defineEmits<{
  'updateOption': [value: string],
  'closeOnClick': [false]
}>()

const open = ref(false)

const selectOption = (option: string) => {
  emit('updateOption', option)
  if (props.closeOnclick) {
    open.value = false
  }
}

const onClick = () => {
  open.value = !open.value
  emit('closeOnClick', false)
}

</script>

<template>
  <div class="relative w-72 md:w-96 shrink-0">
    <div
        @click="onClick"
        class="bg-white border border-gray-200 rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer transition-all duration-200 hover:shadow-md hover:border-gray-300"
    >
      <span class="text-gray-800 font-medium">{{ selectedOption }}</span>
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
          :key="option"
          @click="selectOption(option)"
          class="px-4 py-3 cursor-pointer w-full text-gray-700 transition-all duration-150 hover:bg-gray-50 hover:text-gray-900"
      >
        {{ option }}
      </div>
      <slot/>
    </div>
  </div>
</template>