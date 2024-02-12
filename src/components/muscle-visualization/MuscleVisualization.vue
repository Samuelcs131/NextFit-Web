<template>
  <q-card v-bind="$vCard" style="display: flex; flex-direction: column">
    <q-card-section
      class="full-height flex justify-center q-pa-none overflow-hidden"
      style="position: relative"
    >
      <body-muscle
        style="height: 350px; width: 100%"
        :isFront="bodyIsFront"
        v-bind="muscleBodyOptions"
      />
    </q-card-section>
    <q-card-section class="row q-col-gutter-md">
      <div class="col-12 col-md-4">
        <q-btn
          icon="360"
          color="primary"
          round
          @click="bodyIsFront = !bodyIsFront"
        >
          <q-tooltip>{{ $t('rotation') }}</q-tooltip>
        </q-btn>
      </div>
      <div class="col-12 col-md-8">
        <v-select
          class="full-width"
          filled
          v-model="bodySelect"
          dense
          auto-filter
          use-input
          :disable="bodySelectDisable || !bodySelectOptions?.length"
          :options="bodySelectOptions || []"
          :label="$t('muscles')"
          clearable
        />
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
  import { ref, watch, computed } from 'vue'
  import BodyMuscle from '../muscles/BodyMuscle.vue'
  import VSelect from '../user-interface/select/VSelect.vue'
  import { IMuscleOptions } from './types/IMuscleOptions.type'

  interface IProps {
    bodySelectDisable?: boolean
    bodySelectOptions?: IMuscleOptions[]
    bodySelectDefault?: IMuscleOptions
  }
  const props = defineProps<IProps>()
  const bodyIsFront = ref(true)
  const bodySelect = ref(props.bodySelectDefault)

  const muscleBodyOptions = computed(() => {
    const body = {} as { [key: string]: string }

    props.bodySelectOptions?.forEach(({ label, color }) => {
      if (bodySelect.value && bodySelect.value.label !== label) return
      body[label] = color
    })

    return body
  })

  watch(
    () => props.bodySelectOptions,
    (value) => {
      if (!value?.length) bodySelect.value = undefined
    }
  )
</script>
