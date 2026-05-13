<script setup lang="ts">

import ButtonGeneric from "@/components/common/ButtonGeneric.vue";

const emit = defineEmits<{
  'submitForm': [void]}
>()

const handleClick = () => {
  emit('submitForm')
}
</script>


<template>
  <div class="flex flex-col gap-4">
    <slot name="inputs"/>
    <ButtonGeneric
    title="Login"
    @clicked="handleClick"
    />
  </div>
</template>

<style scoped>

</style>