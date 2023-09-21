<template>
  <q-card flat style="width: 350px" class="q-mx-auto q-my-xl">
    <q-card-section class="q-py-none flex justify-center" style="left: -30px">
      <div class="flex items-center font-prosto-one">
        <logo-nextfit class="q-mr-md" size="xl" color="primary" />
        <h1 class="text-h4 text-bold non-selectable">NextFit</h1>
      </div>
    </q-card-section>

    <q-card-section>
      Um email será enviado com um link para restaurar a senha.
    </q-card-section>

    <q-card-section class="q-py-none">
      <q-input
        v-model="state.email"
        v-bind="$vInput"
        :label="$t('labels.email')"
      />

      <q-button
        visual="primary"
        class="full-width q-mt-lg"
        :label="$t('buttons.send')"
      />
    </q-card-section>

    <q-card-section class="q-my-none">
      <q-separator />
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-btn
        :disable="isLoading"
        label="Fazer login em vez disso"
        color="secondary"
        class="full-width"
        flat
        to="/login"
      />
    </q-card-section>

    <q-inner-loading
      :showing="isLoading"
      :label="$t('interface.pleaseWait')"
      label-class="text-primary"
      label-style="font-size: 1.1em"
    />
  </q-card>
</template>

<script lang="ts" setup>
  import QButton from 'src/components/user-interface/button/QButton.vue'
  import LogoNextfit from 'src/components/user-interface/logo/LogoNextfit.vue'
  import useLoader from 'src/composables/useLoader'
  import { onMounted, computed, onBeforeUnmount, ref } from 'vue'

  const { loaderStatus } = useLoader()

  interface IState {
    email: string | null
  }

  const state = ref({
    email: null,
  } as IState)

  const isLoading = computed(() => loaderStatus('registerLoader.submitForm'))
</script>

<style lang="scss"></style>
