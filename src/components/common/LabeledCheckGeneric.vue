<script setup lang="ts">

defineProps<{
  label: string
  type?: string
  modelValue?: boolean
  id?: string
  ownClass?: string
  labelClass?: string
  checkboxClass?: string
  wrapperClass?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const onChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>

<template>
  <label
      :class="wrapperClass"
  >
    <span :class="labelClass">
      {{ label }}
    </span>

    <input
        type="checkbox"
        :checked="modelValue"
        @change="onChange"
        :class="checkboxClass"
    />
  </label>
</template>

<style scoped>
</style>