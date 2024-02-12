<template>
  <page-layout breadcrumbs>
    <q-card v-bind="$vCard" class="overflow-hidden">
      <q-card-section>
        <v-form
          v-model="state.form"
          :form-fields="formFields"
          cancel-label-show
          :active-skeleton="loaderStatus(trainingLoader.fetchTraining)"
          :cancel-label-show-props="{ to: { name: 'training' } }"
        >
          <template #after-name>
            <div class="full-width">
              <tag-select
                v-if="state.form.fields.tags"
                v-model="state.form.fields.tags"
                label="Tags"
                :rules="[requiredRule]"
              />
            </div>
            <div class="full-width">
              <div class="q-mb-sm" v-if="$q.screen.sm || $q.screen.xs">
                <span>
                  <q-toggle
                    v-model="state.denseVisibility"
                    label="Expandir informações"
                  />
                </span>
              </div>

              <draggable
                v-if="state.form.fields.activities"
                v-model="state.form.fields.activities"
                item-key="id"
                class="list-select-options"
                handle=".draggable-move"
                :animation="200"
              >
                <template #item="{ index }">
                  <card-activity :index="index" />
                </template>
              </draggable>
              <div class="flex justify-center">
                <q-btn
                  icon="add"
                  color="secondary"
                  :label="$t('newActivity')"
                  class="q-mt-md"
                  flat
                  @click="createActivity"
                />
              </div>
            </div>
          </template>
        </v-form>
      </q-card-section>
      <q-inner-loading :showing="loaderStatus(trainingLoader.fetchTraining)">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
    </q-card>
  </page-layout>
</template>
<script setup lang="ts">
  import TagSelect from 'src/components/selects/tag/TagSelect.vue'
  import VForm from 'src/components/v-form/VForm.vue'
  import PageLayout from 'src/layouts/user/components/page-layout/PageLayout.vue'
  import { formFields } from '../constants/formFields.const'
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useTraining } from './../composables/useTraining'
  import useLoader from 'src/composables/useLoader'
  import { trainingLoader } from './../constants/trainingLoader.const'
  import CardActivity from './edit-training/CardActivity.vue'
  import { requiredRule } from 'src/utils/validations/form-rules/mixedRules.util'
  import { GeneratorId } from 'src/helpers/generatorId/GeneratorId.helper'
  import draggable from 'vuedraggable'

  const { state, fetchTraining, resetForm } = useTraining()
  const { params } = useRoute()
  const { loaderStatus } = useLoader()

  function createActivity() {
    state.value.form.fields.activities?.push({
      id: GeneratorId.create(),
    } as any)
  }

  onMounted(() => {
    resetForm()
    if (params.id) fetchTraining(params.id as string)
  })
</script>
<style lang="scss">
.list-select-options {
  .drag-icon-options {
    opacity: 0;
  }
  .item-options {
    &:hover {
      .drag-icon-options {
        opacity: 1;
      }
    }
  }
  .draggable-handle-select-options {
    cursor: move;
  }

  .move-draggable-form-field {
    background: $grey-1;
  }
  .sortable-drag {
    opacity: 0;
    cursor: move;
  }
}
</style>
