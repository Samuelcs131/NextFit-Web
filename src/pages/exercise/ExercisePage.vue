<template>
  <page-layout breadcrumbs>
    <template #breadcrumbs-after>
      <q-btn
        unelevated
        color="primary"
        :label="$t('newExercise')"
        :disable="loaderStatus(exerciseLoader.fetchExercises)"
        :to="{ name: 'editExercise' }"
      />
    </template>

    <v-table
      :loading="loaderStatus(exerciseLoader.fetchExercises)"
      show-edit-btn
      show-delete-btn
      :list="state.listExercises"
      :columns="exerciseColumns"
      @edit="handleEdit"
      @custom="handleIllustrativeVideo"
      @delete="handleDelete"
      :actions="actionsTable"
      :columns-not-visible="['illustrativeVideo', 'description']"
    />
  </page-layout>
  <illustrative-video-dialog />
  <delete-exercise-dialog />
</template>
<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useExercises } from './composables/useExercises'
  import VTable from 'src/components/v-table/VTable.vue'
  import PageLayout from 'src/layouts/user/components/page-layout/PageLayout.vue'
  import { exerciseColumns } from 'src/pages/exercise/constants/exerciseColumns.const'
  import { useRouter } from 'vue-router'
  import { actionsTable } from 'src/pages/exercise/constants/actionsTable.const'
  import { useDialog } from 'src/composables/useDialog'
  import { exerciseDialog } from './constants/exerciseDialog.const'
  import IllustrativeVideoDialog from './components/IllustrativeVideoDialog.vue'
  import DeleteExerciseDialog from './components/DeleteExerciseDialog.vue'
  import useLoader from 'src/composables/useLoader'
  import { exerciseLoader } from './constants/exerciseLoader.const'
  import { IExercise } from 'src/types/exercise/IExercise.type'

  const { state, fetchExercises } = useExercises()
  const { loaderStatus } = useLoader()
  const { push } = useRouter()

  function handleEdit(key: IExercise) {
    const id = key.id.value
    if (id) push({ name: 'editExercise', params: { id } })
  }

  function handleIllustrativeVideo(actionName: string, exercise: IExercise) {
    const [illustrativeVideo] = actionsTable
    if (actionName !== illustrativeVideo.name) return

    const { toggleDialog, setDataDialog } = useDialog()
    toggleDialog(exerciseDialog.illustrativeVideo)
    setDataDialog(exerciseDialog.illustrativeVideo, exercise)
  }

  function handleDelete(exercise: IExercise) {
    const { toggleDialog, setDataDialog } = useDialog()
    toggleDialog(exerciseDialog.deleteExerciseDialog)
    setDataDialog(exerciseDialog.deleteExerciseDialog, exercise)
  }

  onMounted(async () => {
    await fetchExercises()
  })
</script>
<script setup></script>
