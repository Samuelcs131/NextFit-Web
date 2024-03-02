<template>
  <page-layout breadcrumbs>
    <template #breadcrumbs-after>
      <q-btn
        unelevated
        color="primary"
        :label="$t('newTreining')"
        :disable="loaderStatus(trainingLoader.fetchTrainings)"
        :to="{ name: 'editTreining' }"
      />
    </template>
    <div class="container-card gap-sm">
      <q-card
        bordered
        v-bind="$vCard"
        v-for="(training, idx) in state.listTraining.items"
        :key="idx"
        style="display: flex; flex-direction: column"
      >
        <q-card-section class="full-height q-pb-xs">
          <h1 class="text-h6 q-mt-none">{{ training.item.name }}</h1>

          <div class="row full-width">
            <div class="col-12 col-sm-6">
              <span class="flex items-center gap-xs text-grey-500">
                <q-icon name="timer" />
                {{ calculateTotalInterval(training.item.activities) }}
              </span>
            </div>
            <div class="col-12 col-sm-6">
              <span class="flex items-center gap-xs text-grey-500">
                <q-icon name="fitness_center" />
                {{ training.item.activities.length }}
                {{ $t('activities').toLocaleLowerCase() }}
              </span>
            </div>
          </div>

          <q-scroll-area style="height: 45px" class="q-mt-lg">
            <div class="row items-center full-width no-wrap">
              <q-chip
                v-for="(tag, idx) in training.item.tags"
                :key="idx"
                :label="tag.name"
                outline
                :style="{ color: tag.color }"
              />
            </div>
          </q-scroll-area>
        </q-card-section>

        <q-separator />
        <q-card-actions class="flex justify-between">
          <div>
            <q-btn
              @click="openStartTrainingDialog(training.item)"
              color="primary"
              flat
              dense
              :label="$t('start')"
            />
          </div>

          <q-btn dense color="default" round flat icon="more_vert">
            <q-menu
              v-bind="$vMenu"
              class="border-default"
              auto-close
              :offset="[10, 0]"
              anchor="top left"
              self="top right"
            >
              <q-list>
                <q-item clickable @click="handleEdit(training.item)">
                  <q-item-section>{{ $t('edit') }}</q-item-section>
                </q-item>
                <q-item
                  class="text-negative"
                  clickable
                  @click="openDeleteDialog(training.item)"
                >
                  <q-item-section>{{ $t('delete') }}</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </page-layout>
  <delete-training-dialog />
  <start-training-dialog />
</template>
<script setup lang="ts">
  import useLoader from 'src/composables/useLoader'
  import PageLayout from 'src/layouts/user/components/page-layout/PageLayout.vue'
  import { trainingLoader } from './constants/trainingLoader.const'
  import { onMounted } from 'vue'
  import { useTraining } from './composables/useTraining'
  import { ITraining } from 'src/types/training/ITraining.type'
  import { useRouter } from 'vue-router'
  import DeleteTrainingDialog from './components/DeleteTrainingDialog.vue'
  import StartTrainingDialog from './components/StartTrainingDialog.vue'

  const { loaderStatus } = useLoader()
  const {
    state,
    fetchTrainings,
    calculateTotalInterval,
    openDeleteDialog,
    openStartTrainingDialog,
  } = useTraining()
  const { push } = useRouter()

  function handleEdit(key: ITraining) {
    const id = key.id.value
    if (id) push({ name: 'editTraining', params: { id } })
  }

  onMounted(async () => {
    await fetchTrainings()
  })
</script>
<style lang="scss" scoped>
.container-card {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>
