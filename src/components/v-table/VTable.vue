<template>
  <q-table
    :rows="tableRows"
    :columns="tableColumns"
    :visible-columns="visibleColumns"
    :grid="grid || $q.screen.sm || $q.screen.xs"
    :filter="filter"
    class="no-shadow border-radius-md"
    bordered
    :loading-label="$t('loading')"
    :no-data-label="$t('noData')"
    :no-results-label="$t('noResults')"
    :rows-per-page-label="$t('recordsPerPage')"
    v-if="!loading"
  >
    <template #top-left v-if="!hideHeader">
      <div class="column">
        <h2 v-if="title" class="text-h5 q-my-xs">{{ title }}</h2>
        <div class="q-gutter-sm row">
          <slot name="additionalHeaderItems" />

          <q-btn
            soft
            color="default"
            flat
            data-test="toggle-view-btn"
            icon="visibility"
            :disable="props.list.items.length === 0"
          >
            <q-tooltip>Visualizar</q-tooltip>
            <q-menu v-bind="$vMenu">
              <div class="row no-wrap q-pa-md">
                <div class="column">
                  <q-toggle
                    data-test="toggle-field"
                    v-for="col in columns"
                    :key="col.name"
                    v-model="visibleColumns"
                    :val="col.name"
                    :label="col.label"
                  />
                </div>
              </div>
            </q-menu>
          </q-btn>
        </div>
      </div>
    </template>
    <template #top-right v-if="!hideHeader">
      <div class="q-gutter-sm row">
        <q-input
          v-if="!hideSearch"
          v-bind="$vInput"
          borderless
          dense
          debounce="300"
          v-model="filter"
          :placeholder="$t('search')"
        >
          <template #append>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-btn
          data-test="add-btn"
          v-if="showAddBtn"
          @click="handleAdd"
          icon="add"
          color="primary"
        >
          <q-tooltip>{{ $t('add') }}</q-tooltip>
        </q-btn>
        <slot name="additionalHeaderButtons" />
      </div>
    </template>
    <template #item="props" v-if="!grid">
      <div class="q-px-sm col-12">
        <q-card flat bordered class="col-12 q-my-xs">
          <q-card-section>
            <div class="row items-center no-wrap">
              <div class="col">
                <div
                  class="row"
                  v-for="col in filteredCols(props.cols)"
                  :key="col.name"
                >
                  <span class="text-grey-500 q-mr-xs"> {{ col.label }}:</span>
                  {{ !col.value ? '-' : col.value }}
                </div>
              </div>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section class="q-pa-sm justify-between items-center flex">
            <div class="flex gap-sm">
              <slot name="before-button-actions-grid" :props="props.row" />
              <q-btn
                v-if="showEditBtn"
                color="default"
                flat
                :label="$t('edit')"
                @click="handleEdit(props.row)"
              />
              <slot name="after-button-actions-grid" :props="props.row" />
            </div>

            <q-btn color="default" round flat icon="more_vert">
              <q-menu
                v-bind="$vMenu"
                class="border-default"
                auto-close
                :offset="[10, 0]"
                anchor="top left"
                self="top right"
              >
                <q-list>
                  <q-item
                    v-if="showDeleteBtn"
                    @click="handleDelete(props.row)"
                    clickable
                    class="text-negative"
                  >
                    <q-item-section>{{ $t('delete') }}</q-item-section>
                  </q-item>
                  <q-item
                    v-for="action in actions"
                    :key="action.name"
                    clickable
                    @click="handleCustom(action.name, props.row)"
                    data-test="custom-action"
                    :class="`${action.name}-btn ${
                      action.btnClass ? action.btnClass : ''
                    }`"
                  >
                    <q-item-section>{{ action.label }}</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-card-section>
        </q-card>
      </div>
    </template>
    <template #body="props">
      <q-tr data-test="item-list" :props="props">
        <q-td
          class="field-column"
          v-for="col in filteredCols(props.cols)"
          :key="col.name"
          :props="props"
        >
          <div
            v-html="!col.value ? '-' : col.value"
            v-if="!col.useCustomComponent"
          />
          <slot v-else name="custom-component" :props="props.row" />
        </q-td>
        <q-td
          key="actions"
          data-test="action-column"
          class="flex gap-sm no-wrap"
          :props="props"
        >
          <slot name="before-button-actions" :props="props.row" />
          <q-btn
            v-if="showEditBtn"
            @click="handleEdit(props.row)"
            dense
            color="default"
            icon="edit"
            round
            flat
            :tooltip="$t('edit')"
          />
          <slot name="after-button-actions" :props="props.row" />
          <q-btn color="default" dense round flat icon="more_vert">
            <q-menu
              v-bind="$vMenu"
              auto-close
              :offset="[5, 0]"
              anchor="top left"
              self="top right"
            >
              <q-list>
                <q-item
                  v-if="showDeleteBtn"
                  @click="handleDelete(props.row)"
                  dense
                  clickable
                  class="text-negative"
                >
                  <q-item-section>{{ $t('delete') }}</q-item-section>
                </q-item>

                <q-item
                  v-for="action in actions"
                  :key="action.name"
                  dense
                  clickable
                  @click="handleCustom(action.name, props.row)"
                  :class="`${action.name}-btn ${action.btnClass || ''}`"
                >
                  <q-item-section
                    v-if="action.icon"
                    avatar
                    style="min-width: 36px"
                  >
                    <q-icon
                      size="1.5em"
                      class="q-pa-none"
                      :name="action.icon"
                    />
                  </q-item-section>
                  <q-item-section>{{ action.label }}</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-td>
      </q-tr>
    </template>
    <template #header="scope">
      <q-tr v-if="props.list.items.length > 0" :props="scope">
        <q-th v-for="col in scope.cols" :key="col.name" :props="scope">
          {{ col.label }}
        </q-th>
      </q-tr>
    </template>
    <template #no-data v-if="props.list.items.length == 0">
      <div class="full-width">
        <illustrative-message
          illustration="file"
          :message="$t('noData')"
          class="q-mb-md"
        />
      </div>
    </template>
  </q-table>
  <loading-v-table
    v-else
    :table-columns="
      tableColumns.filter(
        ({ name }) => !props.columnsNotVisible?.includes(name)
      )
    "
  />
</template>
<script setup lang="ts" generic="T">
  import { ref, computed, watch } from 'vue'
  import { QTableColumn } from 'quasar'
  import { List } from 'src/domain/application/entities/list/List.entity'
  import { IVTableAction } from './types/IVTableAction'
  import IllustrativeMessage from '../user-interface/illustrative-message/IllustrativeMessage.vue'
  import LoadingVTable from './components/LoadingVTable.vue'

  interface IProps {
    list: List<T>
    columns: QTableColumn[]
    actions?: IVTableAction[]
    showAddBtn?: boolean
    showEditBtn?: boolean
    showDeleteBtn?: boolean
    hideHeader?: boolean
    hideSearch?: boolean
    title?: string
    searchFilter?: string
    actionsPosition?: string
    columnsNotVisible?: string[]
    loading?: boolean
    grid?: boolean
  }

  const props = defineProps<IProps>()

  const emit = defineEmits(['add', 'edit', 'delete', 'custom'])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function filteredCols(columns: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return columns.filter((col: any) => col.name !== 'actions')
  }

  function handleAdd() {
    emit('add')
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleEdit(key: any) {
    emit('edit', key)
  }

  function handleDelete(key: string) {
    emit('delete', key)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleCustom(actionName: string, key: any) {
    emit('custom', actionName, key)
  }

  const showActionColumn =
    props.showDeleteBtn || props.showEditBtn || props.actions

  let tableColumns = [...props.columns]

  if (showActionColumn) {
    tableColumns = [
      ...props.columns,
      {
        name: 'actions',
        align: props.actionsPosition,
        label: ' ',
      } as QTableColumn,
    ]
  }

  const visibleColumns = ref(
    tableColumns
      .map((column) => column.name)
      .filter((name) => !props.columnsNotVisible?.includes(name))
  )

  const tableRows = computed(() => {
    return props.list.items.map((item) => {
      return { ...item.item, key: item.key }
    })
  })

  const filter = ref<string>('')

  watch(
    () => props.searchFilter,
    (searchFilter) => (searchFilter ? (filter.value = searchFilter) : null)
  )
</script>
