<template>
  <q-card v-bind="$vCard">
    <q-card-section>
      <q-form class="q-pa-md rounded-borders">
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-6">
            <q-input
              v-bind="$vInput"
              v-model="state.form.name"
              :label="'Nome'"
            />
          </div>
          <div class="col-12 col-sm-6">
            <q-input
              v-bind="$vInput"
              v-model="state.form.lastName"
              :label="'Sobrenome'"
            />
          </div>
        </div>

        <div class="row q-col-gutter-md q-mt-sm">
          <div class="col-12">
            <q-select
              v-bind="$vInput"
              v-model="state.form.sex"
              :options="state.options.sex"
              :label="'Sexo'"
            />
          </div>
        </div>

        <div class="row q-col-gutter-md q-mt-sm">
          <div class="col-12">
            <q-input
              v-bind="$vInput"
              v-model="state.form.height"
              :label="'Altura'"
            />
          </div>
        </div>

        <div class="row q-col-gutter-md q-mt-sm">
          <div class="col-12">
            <q-input
              v-bind="$vInput"
              v-model="state.form.age"
              :label="'Idade'"
            />
          </div>
        </div>

        <div class="row q-col-gutter-md q-mt-sm">
          <div class="col-12">
            <q-input
              v-bind="$vInput"
              v-model="state.form.country"
              :label="'País'"
            />
          </div>
        </div>

        <div class="row justify-end q-mt-lg">
          <q-btn
            v-bind="$vPrimaryBtn"
            label="Salvar alterações"
            v-on:click="saveUser"
          />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
import { useProfileMain } from '../../composables/useProfileMain'

const { state, saveUser} = useProfileMain()

</script>
