<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import type AssetInterface from "@/types/AssetInterface.ts";
import {alphaVantageApi} from "@/api/AlphaVantageApi.ts";

const assets: AssetInterface[] = [
  { symbol: 'AAPL', name: 'Apple Inc' },
  { symbol: 'GOOG', name: 'Alphabet Class C' },
];

const open = ref(false);
const selected = ref({ symbol: '', name: 'Select an asset' });

const emit = defineEmits<{
  select: [AssetInterface]
}>()

const selectOption = (option: AssetInterface) => {
  open.value = false;
  emit('select', option)
};

const buttonRef = ref<HTMLElement | null>(null);
const dropdownStyle = ref({
  top: '0px',
  left: '0px',
  width: 'auto'
});

const updateDropdownPosition = () => {
  if (!buttonRef.value || !open.value) return;
  const rect = buttonRef.value.getBoundingClientRect();
  dropdownStyle.value = {
    top: `${rect.bottom}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`
  };
};

watch(open, (newVal) => {
  if (newVal) updateDropdownPosition();
});

// Cerrar al hacer clic fuera
const handleClickOutside = (event: MouseEvent) => {
  if (open.value && buttonRef.value && !buttonRef.value.contains(event.target as Node)) {
    open.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', updateDropdownPosition, true);
  window.addEventListener('resize', updateDropdownPosition);
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateDropdownPosition, true);
  window.removeEventListener('resize', updateDropdownPosition);
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="w-72 lg:w-96 shrink-0 relative">
    <div
        ref="buttonRef"
        @click="open = !open"
        class="bg-white border border-gray-200 rounded-xl px-4 py-3
             flex justify-between items-center cursor-pointer
             transition-all duration-200 hover:shadow-md hover:border-gray-300"
    >
      <span class="text-gray-800 font-medium">{{ selected.name }}</span>
      <span class="text-gray-500 transition-transform duration-75" :class="{ 'rotate-180': open }">▼</span>
    </div>
  </div>

  <Teleport to="body">
    <div
        v-if="open"
        class="fixed z-50 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
        :style="dropdownStyle"
    >
      <div
          v-for="option in assets"
          :key="option.symbol"
          @click="selectOption(option)"
          class="px-4 py-3 cursor-pointer w-full text-gray-700
               transition-all duration-150 hover:bg-gray-50 hover:text-gray-900"
      >
        {{ option.name }}
      </div>
    </div>
  </Teleport>
</template>