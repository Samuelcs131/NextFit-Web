<template>
  <q-form greedy @submit="emit('onSubmit')">
    <div :class="`row q-col-gutter-${formGutter ? formGutter : 'md'}`">
      <template v-for="(formField, idx) in formFields" :key="idx">
        <slot :name="`before-${formField.fieldName}`" />
        <q-input

          v-if="formField.type === 'string'"
          v-show="formField.show !== undefined ? formField.show : true"
          type="text"
          v-bind="$vInput"
          :class="`input-${formField.fieldName} col-12 col-sm-${formField.columnSize}`"
          v-model="fieldValues.fields[formField.fieldName]"
          :label="te(formField.label) ? $t(formField.label) : formField.label"
          :rules="formField.rules"
          :disable="propsCurrent.fieldsToDisable.includes(formField.fieldName) || props.loadingForm"
        />
        <q-input
          v-if="formField.type === 'number'"
          v-show="formField.show !== undefined ? formField.show : true"
          type="number"
          v-bind="$vInput"
          :class="`input-${formField.fieldName} col-12 col-md-${formField.columnSize}`"
          v-model.number="fieldValues.fields[formField.fieldName]"
          :label="te(formField.label) ? $t(formField.label) : formField.label"
          :rules="formField.rules"
          :step="formField.step ?? 1"
          :suffix="formField?.suffix ?? ''"
          :disable="propsCurrent.fieldsToDisable.includes(formField.fieldName) || props.loadingForm"
        />
        <date-picker
          v-if="formField.type === 'date'"
          v-show="formField.show !== undefined ? formField.show : true"
          :label="te(formField.label) ? $t(formField.label) : formField.label"
          v-model="fieldValues.fields[formField.fieldName]"
          :rules="formField.rules"
          :class="`input-${formField.fieldName} col-12 col-md-${formField.columnSize}`"
          :disable="propsCurrent.fieldsToDisable.includes(formField.fieldName) || props.loadingForm"
        />
        <v-select
          v-if="formField.type === 'options'"
          v-show="formField.show !== undefined ? formField.show : true"
          :label="te(formField.label) ? $t(formField.label) : formField.label"
          v-model="fieldValues.fields[formField.fieldName]"
          :options="formField.options"
          :rules="formField.rules"
          :multiple="formField?.selectOptions?.multiple"
          :emit-value="formField?.selectOptions?.emitValue"
          :use-input="formField?.selectOptions?.useInput"
          auto-filter
          map-options
          :class="`input-${formField.fieldName} col-12 col-md-${formField.columnSize}`"
          :disable="propsCurrent.fieldsToDisable.includes(formField.fieldName) || props.loadingForm"
        />
        <q-toggle
          v-if="formField.type === 'boolean'"
          v-show="formField.show !== undefined ? formField.show : true"
          :class="`input-${formField.fieldName} col-12 col-md-${formField.columnSize}`"
          v-model="fieldValues.fields[formField.fieldName]"
          :label="te(formField.label) ? $t(formField.label) : formField.label"

          @vnode-mounted="
            () =>
              (fieldValues.fields[formField.fieldName] =
                fieldValues.fields[formField.fieldName] ?? false)
          "
          :disable="propsCurrent.fieldsToDisable.includes(formField.fieldName) || props.loadingForm"
        />
        <slot :name="`after-${formField.fieldName}`" />
      </template>
    </div>

    <div
      :class="`${
        propsCurrent.submitBtnFullWidth ? '' : 'flex items-center justify-end'
      } q-mt-md gap-sm`"
    >
      <q-button
        v-if="propsCurrent.cancelLabelShow"
        visual="default"
        flat
        class="cancel-btn"
        @click="emit('cancelForm')"
        :label="propsCurrent.cancelLabel"
      />

      <q-button
        visual="primary"
        :class="`submit-btn ${
          propsCurrent.submitBtnFullWidth ? 'full-width' : ''
        }`"
        type="submit"
        unelevated
        :disable="propsCurrent.disableSubmitBtn"
        :label="propsCurrent.submitLabel"
        :loading="props.loadingForm"
      />
    </div>
  </q-form>
</template>
<script lang="ts" setup>
  import { ref, computed, watch } from 'vue'
  import { IDefaultFormField } from './types/IDefaultFormField.type'
  import { Form } from 'src/domain/application/entities/form/Form.entity'
  import QButton from '../user-interface/button/QButton.vue'
  import DatePicker from '../user-interface/date-picker/DatePicker.vue'
  import { useI18n } from 'src/boot/i18n'
  import VSelect from '../user-interface/select/VSelect.vue'

  interface IProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    modelValue: Form<any>
    formFields: IDefaultFormField[]
    cancelLabelShow?: boolean
    cancelLabel?: string
    submitLabel?: string
    loadingForm?: boolean
    submitBtnFullWidth?: boolean
    disableSubmitBtn?: boolean
    fieldsToDisable?: string[]
    formGutter?: 'xs' | 'sm' | 'md' | 'xl'
  }

  const props = defineProps<IProps>()

  const emit = defineEmits(['onSubmit', 'cancelForm'])

  const propsCurrent = computed(() => {
    return {
      formFields: props.formFields,
      cancelLabel: !props.cancelLabel ? 'Cancelar' : props.cancelLabel,
      submitLabel: !props.submitLabel ? 'Salvar' : props.submitLabel,
      fieldsToDisable: !props.fieldsToDisable ? [] : props.fieldsToDisable,
      submitBtnFullWidth: !props.submitBtnFullWidth
        ? false
        : props.submitBtnFullWidth,
      disableSubmitBtn:
        props.disableSubmitBtn === undefined ? false : props.disableSubmitBtn,
      cancelLabelShow:
        props.cancelLabelShow === undefined ? false : props.cancelLabelShow,
      loadingForm:
        props.submitLabel === undefined ? false : props.loadingForm,
    }
  })

  const { te } = useI18n()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fieldValues = ref<Form<any>>(props.modelValue)

  watch(props, (value) => {
    fieldValues.value = value.modelValue
  })
</script>
