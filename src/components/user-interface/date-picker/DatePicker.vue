<template>
  <q-input
    v-model="dateValue"
    v-bind="$vInput"
    @update:model-value="emitDateValue"
    :mask="propsCurrent.maskInput"
  >
    <template #append>
      <q-icon name="event" class="cursor-pointer q-ml-sm">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-date
            v-model="dateValue"
            @update:model-value="emitDateValue"
            today-btn
            :mask="propsCurrent.maskDate"
            :locale="dateLocale[storage.language as Languages]"
          >
            <div class="row items-center justify-end">
              <q-btn
                v-close-popup
                :label="$t('buttons.close')"
                color="primary"
                flat
              />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
      <q-icon name="access_time" class="cursor-pointer q-ml-sm">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-time
            v-model="dateValue"
            format24h
            now-btn
            @update:model-value="emitDateValue"
            :mask="propsCurrent.maskDate"
          >
            <div class="row items-center justify-end">
              <q-btn
                v-close-popup
                :label="$t('buttons.close')"
                color="primary"
                flat
              />
            </div>
          </q-time>
        </q-popup-proxy>
      </q-icon>
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

  interface IProps {
    modelValue: string | null
    maskInput?: string
    maskDate?: string
  }

  const props = defineProps<IProps>()
  const propsCurrent = {
    maskInput: !props.maskInput ? '##/##/#### ##:##' : props.maskInput,
    maskDate: !props.maskDate ? 'DD/MM/YYYY HH:mm' : props.maskDate,
  }

  const dateValue = ref<string | null>(props.modelValue)

  const emit = defineEmits(['update:modelValue'])

  const { storage } = useLocalStorage()

  const emitDateValue = (newDate: string | number | null) => {
    const date =
      typeof newDate === 'string' ? dateDefaultToISODate(newDate) : null
    emit('update:modelValue', date)
  }

  function defaultProps(defaultt: boolean, value: boolean) {
    return defaultt === undefined ? defaultt : value
  }

  onMounted(() => {
    if (props.modelValue) dateValue.value = dateToFormatDefault(props.modelValue)
  })
</script>
