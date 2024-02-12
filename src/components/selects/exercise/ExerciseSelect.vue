<template>
  <q-select
    :label="multiple ? $t('exercises') : $t('exercise')"
    v-bind="props"
    :outlined="true"
    :options="exerciseOptions.current"
    @update:model-value="handleEmit"
    option-label="name"
    option-value="id"
    map-options
    @filter="handleFilter"
    use-input
  />
</template>
<script setup lang="ts">
  import { ExerciseService } from 'src/service/nextfit/exercise/exercise.service'
  import { IExercise } from 'src/types/exercise/IExercise.type'
  import { slugify } from 'src/utils/slugfy.utils'
  import { t } from 'src/utils/translate/translateUtils'
  import { onMounted, ref } from 'vue'

  interface IProps {
    modelValue: unknown
    options?: unknown[]
    emitValue?: boolean
    multiple?: boolean
  }

  const emit = defineEmits(['update:modelValue'])

  const props = defineProps<IProps>()
  const exerciseOptions = ref({
    data: [] as IExercise[],
    current: [] as IExercise[],
  })

  function handleEmit(exercise?: IExercise | IExercise[]) {
    emit('update:modelValue', exercise)
  }
/* eslint-disable */
function handleFilter(val: string, update: (callbackFn: () => void) => void) {
  update(() => {
    const key = slugify(val)

    exerciseOptions.value.current = exerciseOptions.value.data?.filter((v) => {
      return slugify(t(v.name)).indexOf(key) > -1
    })
  })
}

onMounted(async () => {
  const { data: exercises } = await ExerciseService.getAll()
  exerciseOptions.value = {
    data: exercises,
    current: exercises,
  }
})
</script>
