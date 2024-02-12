<template>
  <page-layout breadcrumbs>
    <template #breadcrumbs-after>
      <q-btn
        unelevated
        color="primary"
        :label="$t('newActivity')"
        :disable="loaderStatus(activityLoader.fetchActivities)"
        :to="{ name: 'editActivity' }"
      />
    </template>
    <v-table
      :loading="loaderStatus(activityLoader.fetchActivities)"
      :list="state.listActivities"
      :columns="activityColumns"
      show-delete-btn
      show-edit-btn
      @edit="handleEdit"
      @delete="openDeleteActivity"
      :actions="actionsTable"
      @custom="handleCustom"
    />
  </page-layout>
  <delete-activity-dialog />
  <activity-player-dialog />
</template>
<script lang="ts" setup>
  import VTable from 'src/components/v-table/VTable.vue'
  import PageLayout from 'src/layouts/user/components/page-layout/PageLayout.vue'
  import { useActivities } from './composables/useActivities'
  import { onBeforeMount } from 'vue'
  import { activityColumns } from './constants/activityColumns.const'
  import useLoader from 'src/composables/useLoader'
  import { activityLoader } from './constants/activityLoader.const'
  import { useRouter } from 'vue-router'
  import { activityDialog } from './constants/activityDialog.const'
  import DeleteActivityDialog from './components/DeleteActivityDialog.vue'
  import ActivityPlayerDialog from './components/ActivityPlayerDialog.vue'
  import { actionsTable } from './constants/actionsTable.const'
  import { IActivity } from 'src/types/activity/IActivity.type'

  const {
    state,
    fetchActivities,
    createDialog,
    openDeleteActivity,
    openActivityPlayerDialog,
  } = useActivities()
  const { loaderStatus } = useLoader()
  const { push } = useRouter()

  function handleCustom(actionName: string, activity: IActivity){
    const [activityName] = actionsTable
    if (actionName !== activityName.name) return
    openActivityPlayerDialog(activity)
  }

  function handleEdit(key: IActivity) {
    const id = key.id.value
    if (id) push({ name: 'editActivity', params: { id } })
  }

  onBeforeMount(async () => {
    createDialog(activityDialog.activityPlayerDialog)
    await fetchActivities()
  })
</script>
