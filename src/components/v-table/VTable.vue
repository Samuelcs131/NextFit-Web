<template>
  <q-table
    :rows="tableRows"
    :columns="tableColumns"
    :visible-columns="visibleColumns"
    :grid="$q.screen.xs"
    :filter="filter"
    data-test="list-table"
    class="no-shadow"
    bordered
    :no-data-label="$t('interface.noData')"
    :no-results-label="$t('interface.noResults')"
  >
    <template #top-left v-if="!hideHeader">
      <div class="column">
        <h2 v-if="title" class="text-h5 q-my-xs">{{ title }}</h2>
        <div class="q-gutter-sm row">
          <slot name="additionalHeaderItems" />

          <q-button
            soft
            visual="default"
            flat
            data-test="toggle-view-btn"
            icon="visibility"
            :disable="props.list.items.length === 0"
          >
            <q-tooltip>Visualizar</q-tooltip>
            <q-menu>
              <div class="row no-wrap q-pa-md">
                <div class="column">
                  <q-toggle
                    data-test="toggle-field"
                    v-for="column in columns"
                    :key="column.name"
                    v-model="visibleColumns"
                    :val="column.name"
                    :label="column.label"
                  />
                </div>
              </div>
            </q-menu>
          </q-button>
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
          placeholder="Buscar"
        >
          <template #append>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-button
          data-test="add-btn"
          v-if="showAddBtn"
          @click="handleAdd"
          icon="add"
          visual="primary"
        >
          <q-tooltip>Adicionar</q-tooltip>
        </q-button>
        <slot name="additionalHeaderButtons" />
      </div>
    </template>
    <template #item="props">
      <div class="q-px-sm col-12">
        <q-card flat bordered class="col-12 bg-grey-1 q-my-xs">
          <q-card-section>
            <div class="row items-center no-wrap">
              <div class="col">
                <template
                  v-for="col in filteredCols(props.cols)"
                  :key="col.name"
                >
                  <div class="row">
                    <span class="text-grey q-mr-xs">{{ col.label }}</span
                    >{{ col.value }}
                  </div>
                </template>
              </div>

              <div class="col-auto">
                <q-btn
                  color="grey-7"
                  round
                  flat
                  icon="more_vert"
                  v-if="actions"
                >
                  <q-menu cover auto-close>
                    <q-list>
                      <template v-for="action in actions" :key="action.name">
                        <q-item
                          clickable
                          @click="handleCustom(action.name, props.row.key)"
                          data-test="custom-action"
                          :class="`${action.name}-btn ${
                            action.btnClass ? action.btnClass : ''
                          }`"
                        >
                          <q-item-section>{{ action.label }}</q-item-section>
                        </q-item>
                      </template>
                    </q-list>
                  </q-menu>
                </q-btn>
                <q-btn
                  class="edit-btn"
                  icon="edit"
                  v-if="showEditBtn"
                  @click="handleEdit(props.row.key)"
                  size="sm"
                >
                  <q-tooltip>Editar</q-tooltip>
                </q-btn>
                <q-btn
                  class="delete-btn"
                  icon="delete"
                  v-if="showDeleteBtn"
                  @click="handleDelete(props.row.key)"
                  size="sm"
                >
                  <q-tooltip>Excluir</q-tooltip>
                </q-btn>
              </div>
            </div>
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
          <div v-html="col.value" v-if="!col.useCustomComponent" />
          <slot v-else name="custom-component" :props="props.row" />
        </q-td>
        <q-td
          key="actions"
          data-test="action-column"
          class="q-gutter-xs"
          :props="props"
        >
          <template v-if="actions">
            <q-btn
              color="grey-13"
              v-for="action in actions"
              :key="action.name"
              data-test="custom-action"
              :class="`${action.name}-btn ${
                action.btnClass ? action.btnClass : ''
              }`"
              :icon="action.icon"
              @click="handleCustom(action.name, props.row.key)"
              flat
              size="sm"
            >
              <q-tooltip>{{ action.label }}</q-tooltip>
            </q-btn>
          </template>
          <q-btn
            data-test="edit-btn"
            icon="edit"
            @click="handleEdit(props.row.key)"
            v-if="showEditBtn"
            size="sm"
          >
            <q-tooltip>Editar</q-tooltip>
          </q-btn>
          <q-btn
            data-test="delete-btn"
            icon="delete"
            @click="handleDelete(props.row.key)"
            v-if="showDeleteBtn"
            size="sm"
          >
            <q-tooltip>Excluir</q-tooltip>
          </q-btn>
        </q-td>
      </q-tr>
    </template>
    <template #header v-if="props.list.items.length == 0"/>
    <template #no-data v-if="props.list.items.length == 0">
      <div class="full-width">
        <illustrative-message illustration="empty" :message="$t('interface.noData')" class="q-mb-md" />
      </div>
    </template>
  </q-table>
</template>
<script setup lang="ts" generic="T">
  import { ref, computed, watch } from 'vue'
  import { QTableColumn } from 'quasar'
  import { List } from 'src/domain/application/entities/list/List.entity'
  import { IVListAction } from './types/IVListAction'
  import QButton from '../user-interface/button/QButton.vue'
  import IllustrativeMessage from '../user-interface/illustrative-message/IllustrativeMessage.vue'

  interface IProps {
    list: List<T>
    columns: QTableColumn[]
    actions?: IVListAction[]
    showAddBtn?: boolean
    showEditBtn?: boolean
    showDeleteBtn?: boolean
    hideHeader?: boolean
    hideSearch?: boolean
    title?: string
    searchFilter?: string
    actionsPosition?: string
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

  function handleEdit(key: string) {
    emit('edit', key)
  }

  function handleDelete(key: string) {
    emit('delete', key)
  }

  function handleCustom(actionName: string, key: string) {
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
        label: 'Ações',
      } as QTableColumn,
    ]
  }

  const visibleColumns = ref(tableColumns.map((column) => column.name))

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
