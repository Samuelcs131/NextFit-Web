<template>
  <q-form ref="vform" greedy>
    <div
      :class="{
        row: true,
        [`q-col-gutter-${formGutter ?? 'md'}`]: true,
      }"
    >
      <template v-for="(formField, idx) in formFields" :key="idx">
        <slot :name="`before-${formField.fieldName}`" />
        <div
          v-if="activeSkeleton"
          :class="`col-12 col-sm-${formField.columnSize}`"
        >
          <q-skeleton type="QInput" height="56px" />
        </div>
        <template v-if="!activeSkeleton">
          <q-input
            v-if="formField.type === 'string'"
            :type="formField.textArea ? 'textarea' : 'text'"
            v-bind="$vInput"
            :class="`input-${formField.fieldName} col-12 col-sm-${formField.columnSize}`"
            v-model="fieldValues.fields[formField.fieldName]"
            :label="formField.label"
            :rules="formField.rules"
            :disable="
              props.fieldsToDisable?.includes(formField.fieldName) ||
              props.loadingForm
            "
          />
          <q-input
            v-if="formField.type === 'number'"
            type="number"
            v-bind="$vInput"
            :class="`input-${formField.fieldName} col-12 col-md-${formField.columnSize}`"
            v-model.number="fieldValues.fields[formField.fieldName]"
            :label="formField.label"
            :rules="formField.rules"
            :step="formField.step ?? 1"
            :suffix="formField?.suffix ?? ''"
            :disable="
              props.fieldsToDisable?.includes(formField.fieldName) ||
              props.loadingForm
            "
          />
          <date-picker
            v-if="formField.type === 'date'"
            :label="formField.label"
            v-model="fieldValues.fields[formField.fieldName]"
            :class="`input-${formField.fieldName} col-12 col-md-${formField.columnSize}`"
            :disable="
              props.fieldsToDisable?.includes(formField.fieldName) ||
              props.loadingForm
            "
            :rule-active="formField.ruleDatePicker"
          />
          <v-select
            v-if="formField.type === 'options'"
            :label="formField.label"
            v-model="fieldValues.fields[formField.fieldName]"
            :options="formField.options"
            :rules="formField.rules"
            :multiple="formField?.selectOptions?.multiple"
            :emit-value="formField?.selectOptions?.emitValue"
            :use-input="formField?.selectOptions?.useInput"
            auto-filter
            map-options
            :class="`input-${formField.fieldName} col-12 col-md-${formField.columnSize}`"
            :disable="
              props.fieldsToDisable?.includes(formField.fieldName) ||
              props.loadingForm
            "
          />
          <q-toggle
            v-if="formField.type === 'boolean'"
            :class="`input-${formField.fieldName} col-12 col-md-${formField.columnSize}`"
            v-model="fieldValues.fields[formField.fieldName]"
            :label="formField.label"
            @vnode-mounted="
              () =>
                (fieldValues.fields[formField.fieldName] =
                  fieldValues.fields[formField.fieldName] ?? false)
            "
            :disable="
              props.fieldsToDisable?.includes(formField.fieldName) ||
              props.loadingForm
            "
          />
        </template>
        <slot :name="`after-${formField.fieldName}`" />
      </template>
    </div>

    <div
      :class="`${
        props.submitBtnFullWidth ? '' : 'flex items-center justify-between'
      } q-mt-md gap-sm`"
    >
      <div>
        <slot name="before-toolbar"/>
      </div>

      <div class="flex gap-sm">
        <q-btn
          v-bind="cancelLabelShowProps"
          v-if="props.cancelLabelShow"
          color="default"
          flat
          class="cancel-btn"
          @click="emit('cancelForm')"
          :label="props.cancelLabel || t('cancel')"
        />

        <q-btn
          color="primary"
          :class="`submit-btn ${
            props.submitBtnFullWidth ? 'full-width' : ''
          }`"
          type="submit"
          unelevated
          :disable="props.disableSubmitBtn"
          :label="props.submitLabel || t('save')"
          :loading="props.loadingForm"
        />
        <slot name="after-toolbar"/>
      </div>
    </div>
  </q-form>
</template>
<script lang="ts" setup>
  import { ref, watch } from 'vue'
  import { IVFormField } from './types/IVFormField.type'
  import { Form } from 'src/domain/application/entities/form/Form.entity'
  import DatePicker from '../user-interface/date-picker/DatePicker.vue'
  import VSelect from '../user-interface/select/VSelect.vue'
  import { t } from 'src/utils/translate/translateUtils'
  import { QForm } from 'quasar'

  interface IProps {
    cancelLabelShowProps?: any // eslint-disable-line @typescript-eslint/no-explicit-any
    modelValue: Form<any> // eslint-disable-line @typescript-eslint/no-explicit-any
    formFields: IVFormField[]
    cancelLabelShow?: boolean
    cancelLabel?: string
    submitLabel?: string
    loadingForm?: boolean
    submitBtnFullWidth?: boolean
    disableSubmitBtn?: boolean
    fieldsToDisable?: string[]
    activeSkeleton?: boolean
    formGutter?: 'xs' | 'sm' | 'md' | 'xl'
  }

  const props = defineProps<IProps>()

  const emit = defineEmits(['cancelForm'])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fieldValues = ref<Form<any>>(props.modelValue)

  watch(props, (value) => {
    fieldValues.value = value.modelValue
  })
</script>
