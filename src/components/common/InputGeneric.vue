<script setup lang="ts">
const props = defineProps<{
  placeholder: string
  type?: string
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [string]
}>()

const validTypes = ['text', 'email', 'password']

const validateType = (type?: string) => {
  if (type && validTypes.includes(type)) {
    return type
  }
  return 'text'
}
const updateModel = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}

const type = validateType(props.type)


</script>

<template>
  <input
      :value="modelValue"
      @input="updateModel"
      :type="type"
      class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200"
      :placeholder="placeholder"
  />
</template>

<style scoped>
</style>