<template>
  <q-input
    class="custom-readonly"
    :model-value="`${dateValue?.from ?? $t('startDate')} - ${
      dateValue?.to ?? $t('endDate')
    }`"
    readonly
    v-bind="$vInput"
  >
    <template #append>
      <q-btn
        v-if="dateValue.from && dateValue.to"
        class="q-pa-none"
        dense
        icon="cancel"
        flat
        round
        @click="clearInput"
      />
      <q-btn dense flat round icon="event" class="cursor-pointer q-ml-sm">
        <q-popup-proxy
          :breakpoint="600"
          cover
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date
            @update:model-value="emitDateValue"
            mask="DD/MM/YYYY"
            v-model="dateValue"
            range
            :locale="dateLocale[storage.language as Languages]"
          >
            <div class="row items-center justify-end">
              <q-btn v-close-popup :label="$t('close')" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-btn>
    </template>
  </q-input>
</template>
<script lang="ts" setup>
  import {
    dateToFormatDefault,
    dateDefaultToISODate,
  } from 'src/utils/date/dateUtils.util'
  import { ref, onMounted } from 'vue'
  import { dateLocale } from 'src/constants/date/dateLocale.const'
  import { useLocalStorage } from 'src/composables/useLocalStorage'
  import { Languages } from 'src/i18n/enums/languages.enum'
  import { IDateRange } from './types/IDateRange.type'

  interface IProps {
    modelValue: IDateRange
    ruleActive?: boolean
  }

  const props = defineProps<IProps>()

  const dateValue = ref<IDateRange>(props.modelValue)

  const emit = defineEmits(['update:modelValue'])

  const { storage } = useLocalStorage()

  function emitDateValue(rangeDate?: IDateRange) {
    console.log(rangeDate)
    if (rangeDate?.from && rangeDate?.to)
      emit('update:modelValue', handleValueDate(rangeDate))
    else clearInput()
  }

  function handleValueDate(date: IDateRange) {
    return {
      from: dateDefaultToISODate(date.from || '', { resetHour: true }),
      to: dateDefaultToISODate(date.to || '', { resetHour: true }),
    }
  }

  function clearInput() {
    dateValue.value = { from: null, to: null }
    emit('update:modelValue', dateValue.value)
  }

  onMounted(() => {
    if (props.modelValue.from)
      dateValue.value.from = dateToFormatDefault(props.modelValue.from, {
        notHour: true,
      })
    if (props.modelValue.to)
      dateValue.value.to = dateToFormatDefault(props.modelValue.to, {
        notHour: true,
      })
  })
</script>
<style lang="scss">
.custom-readonly.q-field--outlined.q-field--readonly .q-field__control:before {
  border-style: solid;
}
</style>
