import { ref } from 'vue'
import { ITag } from '../types/ITag.type'
import ActionDispatcher from 'src/helpers/requester/Requester.helper'
import { TagService } from 'src/service/nextfit/tag/tag.service'
import { tagSelectLoader } from '../constants/tagSelectLoader.const'
import { cloneShallow } from 'src/utils/clone/cloneUtils.util'
import { cloneDeep } from 'lodash'

interface IState {
  input: string | null
  modelValue: ITag[]
  tag: ITag
  options: ITag[]
  optionsData: ITag[]
}

export function useTagSelect(modelValue: ITag[]) {
  const state = ref({
    modelValue: modelValue,
    input: null,
    tag: {} as ITag,
    options: [],
    optionsData: [],
  } as IState)

  async function fetchAllTags() {
    await ActionDispatcher.dispatch({
      callback: async () => {
        const { data: tags } = await TagService.getAll()
        state.value.options = tags
        state.value.optionsData = tags
      },
      loaders: [tagSelectLoader.fetchAllTags],
    })
  }

  async function saveTag() {
    const tag = state.value.tag
    console.log(tag)
    await ActionDispatcher.dispatch({
      callback: async () => {
        await TagService.save(tag)
      },
      successCallback: () => {
        const isServer = tag.id.createServerEntity()
        if (isServer) updateTag(tag)
        else addTag(tag)
      },
      loaders: [tagSelectLoader.saveTag],
    })
  }

  async function deleteTag(tagId: string) {
    await ActionDispatcher.dispatch({
      callback: async () => {
        await TagService.delete(tagId)
      },
      successCallback: () => removeTag(tagId),
      loaders: [tagSelectLoader.deleteTag],
    })
  }

  function addTag(tag: ITag) {
    state.value.optionsData.push(tag)
    state.value.options.push(tag)
  }

  function updateTag(tag: ITag) {
    const filterOptions = state.value.optionsData.map((t) => {
      if (t.id.value === tag.id.value) return tag
      else return t
    })

    const filterModelValue = state.value.modelValue.map((t) => {
      if (t.id.value === tag.id.value) return tag
      else return t
    })

    setModelValue(filterModelValue)
    setOptions(filterOptions)
  }

  function removeTag(tagId: string) {
    const filterOptions = state.value.optionsData.filter(
      (t) => t.id.value != tagId
    )
    const filterModelValue = state.value.modelValue.filter(
      (t) => t.id.value != tagId
    )

    setModelValue(filterModelValue)
    setOptions(filterOptions)
  }

  function setTag(tag: ITag) {
    state.value.tag = { ...tag } as ITag
  }

  function setModelValue(tags: ITag[]){
    state.value.modelValue = cloneDeep<ITag[]>(tags)
  }

  function setOptions(tags: ITag[]){
    state.value.options = cloneDeep<ITag[]>(tags)
    state.value.optionsData = cloneDeep<ITag[]>(tags)
  }

  function handleInputSelect(value: string | null) {
    state.value.input = value
  }

  function filterSelectTag(
    inputValue: string,
    update: (callbackFn: () => void) => void
  ) {
    update(() => {
      const needle = inputValue.toLowerCase()

      state.value.options = state.value.optionsData.filter(
        (tag) => tag.name.toLowerCase().indexOf(needle) > -1
      )
    })
  }

  return {
    state,
    tagSelectLoader,
    setTag,
    saveTag,
    deleteTag,
    fetchAllTags,
    filterSelectTag,
    handleInputSelect,
  }
}
