<template>
  <page-layout breadcrumbs>
    <template #breadcrumbs-after>
      <q-btn
        unelevated
        color="primary"
        :label="$t('newBodyMeasurement')"
        :disable="loaderStatus(bodyMeasurementLoader.fetchBodyMeasurements)"
        :to="{ name: 'editBodyMeasurement' }"
      />
    </template>

    <div class="container-card gap-sm">
      <q-card
        v-for="(body, idx) in state.listBodyMeasurement.items"
        :key="idx"
        flat
        bordered
      >
        <q-card-section class="q-py-sm">
          <span class="flex gap-sm">
            <p class="q-mb-none text-grey-500">{{ $t('date') }}:</p>
            {{
              dateLocaleToString(body.item.date, {
                timeStyle: 'short',
                dateStyle: 'medium',
              })
            }}
          </span>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="row q-col-gutter-md">
            <div class="col-6">
              <span class="text-grey-500"
                >{{ $t('arm') }} ({{ $t('leftLetter') }}/{{
                  $t('rightLetter')
                }})</span
              >
              <p class="q-mb-none">
                {{ body.item.leftArm }} cm / {{ body.item.rightArm }} cm
              </p>
            </div>
            <div class="col-6">
              <span class="text-grey-500"
                >{{ $t('calf') }} ({{ $t('leftLetter') }}/{{
                  $t('rightLetter')
                }})</span
              >
              <p class="q-mb-none">
                {{ body.item.leftCalf }} cm / {{ body.item.rightCalf }} cm
              </p>
            </div>
            <div class="col-6">
              <span class="text-grey-500"
                >{{ $t('forearm') }} ({{ $t('leftLetter') }}/{{
                  $t('rightLetter')
                }})</span
              >
              <p class="q-mb-none">
                {{ body.item.leftForearm }} cm / {{ body.item.rightForearm }} cm
              </p>
            </div>
            <div class="col-6">
              <span class="text-grey-500"
                >{{ $t('thigh') }} ({{ $t('leftLetter') }}/{{
                  $t('rightLetter')
                }})</span
              >
              <p class="q-mb-none">
                {{ body.item.leftThigh }} cm / {{ body.item.rightThigh }} cm
              </p>
            </div>
          </div>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
          <div class="row q-col-gutter-md">
            <div class="col-6">
              <span class="text-grey-500">{{ $t('abdomen') }}</span>
              <p class="q-mb-none">{{ body.item.abdomen }} cm</p>
            </div>
            <div class="col-6">
              <span class="text-grey-500">{{ $t('breastplate') }}</span>
              <p class="q-mb-none">{{ body.item.breastplate }} cm</p>
            </div>
            <div class="col-6">
              <span class="text-grey-500">{{ $t('glute') }}</span>
              <p class="q-mb-none">{{ body.item.glute }} cm</p>
            </div>
            <div class="col-6">
              <span class="text-grey-500">{{ $t('deltoid') }}</span>
              <p class="q-mb-none">{{ body.item.deltoid }} cm</p>
            </div>
            <div class="col-6">
              <span class="text-grey-500">{{ $t('weight') }}</span>
              <p class="q-mb-none">{{ body.item.weight }} kg</p>
            </div>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section class="q-py-xs flex justify-between gap-md">
          <q-btn
            :label="$t('edit')"
            flat
            color="default"
            dense
            @click="handleEdit(body.item)"
          />
          <q-btn :label="$t('delete')" flat color="negative" dense />
        </q-card-section>
      </q-card>
    </div>
  </page-layout>
  <!--
  <delete-exercise-dialog /> -->
</template>
<script setup lang="ts">
  import { useBodyMeasurement } from './composables/useBodyMeasurement'
  import useLoader from 'src/composables/useLoader'
  import { bodyMeasurementLoader } from './constants/bodyMeasurementLoader.const'
  import PageLayout from 'src/layouts/user/components/page-layout/PageLayout.vue'
  import { onMounted } from 'vue'
  import { dateLocaleToString } from 'src/utils/date/dateUtils.util'
  import { IBodyMeasurement } from 'src/types/body-measurement/IBodyMeasurement.type'
  import { useRouter } from 'vue-router'

  const { state, fetchBodyMeasurements } = useBodyMeasurement()
  const { loaderStatus } = useLoader()
  const { push } = useRouter()

  function handleEdit(bodyMeasurement: IBodyMeasurement) {
    const id = bodyMeasurement.id.value
    if (id) push({ name: 'editBodyMeasurement', params: { id } })
  }

  onMounted(async () => {
    await fetchBodyMeasurements()
  })
</script>
<style lang="scss" scoped>
.container-card {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
</style>
