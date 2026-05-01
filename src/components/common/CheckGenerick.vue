<script setup lang="ts">

import {computed, ref} from "vue";

const props = defineProps<{
  label?: string
  type: string
}>()

const emit = defineEmits<{
  clicked: [boolean]
}>()

const typeClasses: Record<string, string> = {
  'space-between': 'flex justify-between items-center',
  'default': 'flex items-center'
}

const classType = computed(() => {
  return typeClasses[props.type] ?? typeClasses.default
})

const clicked = ref(false)
const onChange = () => {
  clicked.value = !clicked.value
  emit('clicked', clicked.value)
}
</script>

<template>

  <div :class="classType">
    <label v-if="label" for="checkId">
      {{ label }}
    </label>
    <input @change="onChange" type="checkbox" id="checkId"/>
  </div>
</template>

<style scoped>

</style>