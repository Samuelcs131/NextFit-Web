<template>
  <q-select
    v-bind="props"
    v-model="state.modelValue"
    outlined
    use-input
    :options="state.options"
    @filter="filterSelectTag"
    @input-value="handleInputSelect"
    multiple
    @update:model-value="handleTag"
    :loading="
      loaderStatus(tagSelectLoader.fetchAllTags) ||
      loaderStatus(tagSelectLoader.deleteTag)
    "
  >
    <template v-slot:selected-item="{ opt, removeAtIndex, index }">
      <q-chip
        :style="{ background: opt.color }"
        dense
        removable
        text-color="white"
        :label="opt.name"
        @remove="removeAtIndex(index)"
      />
    </template>

    <template v-slot:no-option>
      <q-item class="flex items-center no-wrap">
        <span>{{ $t('create') }}</span>
        <q-chip>{{ state.input }}</q-chip>
      </q-item>
    </template>

    <template v-slot:option="{ opt, itemProps }">
      <q-item dense class="full-width" v-bind="itemProps">
        <q-item-section>
          <div>
            <q-avatar
              :style="{ 'background-color': opt.color }"
              size="12px"
              class="q-mr-sm"
            />
            {{ opt.name }}
          </div>
        </q-item-section>
        <q-item-section side v-bind="itemProps">
          <q-btn
            dense
            round
            icon="edit"
            flat
            @click="setTag(opt)"
            :disable="
              loaderStatus(tagSelectLoader.saveTag) ||
              loaderStatus(tagSelectLoader.deleteTag)
            "
          />

          <q-menu separate-close-popup class="paper-shadow border-default">
            <q-item class="q-pa-sm">
              <q-input
                v-model="state.tag.name"
                filled
                dense
                @keyup.enter="changeTag(() => saveTag())"
                :loading="loaderStatus(tagSelectLoader.saveTag)"
                :disable="loaderStatus(tagSelectLoader.saveTag)"
              />
            </q-item>
            <q-item class="q-pa-sm">
              <q-btn
                icon="delete"
                size="12px"
                class="full-width q-pl-xs"
                align="left"
                color="negative"
                flat
                dense
                v-close-popup
                :label="$t('delete')"
                @click="changeTag(() => deleteTag(opt.id.value))"
                :disable="loaderStatus(tagSelectLoader.saveTag)"
              />
            </q-item>
            <!-- COLORS -->
            <q-separator class="q-mb-xs" />
            <span class="q-pa-sm q-my-sm text-caption">
              {{ $t('colors') }}
            </span>
            <q-item
              v-for="(palette, key) in colorPalette"
              :key="key"
              class="q-py-none q-px-sm flex items-center justify-between"
              dense
              tag="label"
              v-ripple
              :disable="loaderStatus(tagSelectLoader.saveTag)"
            >
              <q-avatar
                rounded
                :style="{ 'background-color': palette.color }"
                size="20px"
              />

              <q-item-section class="q-pl-sm">
                <q-item-label>{{ palette.name }}</q-item-label>
              </q-item-section>

              <q-item-section class="q-pl-xs" side>
                <q-radio
                  v-model="state.tag.color"
                  class="no-pointer-events"
                  checked-icon="check"
                  unchecked-icon="none"
                  :keep-color="false"
                  size="sm"
                  :val="palette.color"
                  @click="changeTag(() => saveTag())"
                  :disable="loaderStatus(tagSelectLoader.saveTag)"
                />
              </q-item-section>
            </q-item>
          </q-menu>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>
<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import { colorPalette } from 'src/constants/color/colorPalette.const'
  import { useTagSelect } from './composables/useTagSelect'
  import { ITag } from './types/ITag.type'
  import useLoader from 'src/composables/useLoader'

  interface IProps {
    modelValue: ITag[]
  }

  const props = defineProps<IProps>()
  const emit = defineEmits(['update:modelValue'])

  const {
    state,
    tagSelectLoader,
    setTag,
    saveTag,
    deleteTag,
    fetchAllTags,
    filterSelectTag,
    handleInputSelect,
  } = useTagSelect(props.modelValue)
  const { loaderStatus } = useLoader()

  async function changeTag(callback: () => Promise<void>) {
    await callback()
    emit('update:modelValue', state.value.modelValue)
  }

  function handleTag(value: ITag[] | undefined) {
    emit('update:modelValue', value)
  }

  onBeforeMount(async () => await fetchAllTags())
</script>
