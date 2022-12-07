<template>
  <div
    class="background flex items-center justify-center window-width window-height"
  >
    <q-card flat bordered style="width: 500px">
      <q-card-section class="text-center">
        <h1 class="text-h4">Login</h1>
      </q-card-section>
      <q-card-section class="q-gutter-md">
        <q-input outlined v-model="text" label="Login" />

        <q-input outlined v-model="text" label="Senha" />
      </q-card-section>
      <q-card-section class="q-gutter-md flex items-center">
        <q-btn color="primary">Entrar</q-btn>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts" setup>

const text = ''
</script>

<style lang="scss">
.background {
  background: url("assets/img/ilustrative-photo.jpg") center;
  background-size: cover;
}
</style>
