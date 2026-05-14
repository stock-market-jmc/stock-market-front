<script setup lang="ts">

import FormGeneric from "@/components/common/FormGeneric.vue";
import InputGeneric from "@/components/common/InputGeneric.vue";
import {useAuthStore} from "@/stores/AuthStore.ts";
import {computed, ref} from "vue";
import router from "@/router";

const authStore = useAuthStore()
const email = ref('');
const password = ref('');
const loading = computed(()=> authStore.loading)

const onSubmit = () => {
  authStore.login(email.value,password.value)
  router.push('/')
}
</script>

<template>
  <FormGeneric
      :loading="loading"
      @submit-form="onSubmit"
      class="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-6"
  >
    <template #inputs>
      <InputGeneric
          v-model="email"
          placeholder="Email"
          type="email"/>
      <InputGeneric
          v-model="password"
          placeholder="Password"
          type="password"
      />
    </template>
  </FormGeneric>
</template>

<style scoped>

</style>