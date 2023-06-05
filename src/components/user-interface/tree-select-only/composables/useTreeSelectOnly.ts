import { QTree } from 'quasar'
import { ref } from 'vue'
import { ITreeSelectOnly } from '../types/ITreeSelectOnly.type'
import { slugify } from 'src/utils/slugfy.utils'

interface IState {
  selectedId: string | null
  selected: ITreeSelectOnly | null
  isPopupShown: boolean
  inputValue: string | null
  options: {
    canSelect: ITreeSelectOnly[]
    notSelect: string[]
    tree: ITreeSelectOnly[]
  }
}

export function useTreeSelect() {
  const initializeState: IState = {
    selectedId: null,
    selected: null,
    options: {
      canSelect: [],
      notSelect: [],
      tree: [],
    },
    isPopupShown: false,
    inputValue: null,
  }

  const state = ref(initializeState)
  const treeView = ref<QTree | null>(null)

  function isSelected() {
    return state.value.selected !== null
  }

  function filterTreeSelect(node: ITreeSelectOnly, filter: string) {
    const filt = slugify(filter)
    return slugify(node.label).indexOf(filt) > -1
  }

  function expandOptions() {
    if (state.value.inputValue) {
      treeView.value?.expandAll()
    } else {
      treeView.value?.collapseAll()
    }
  }

  function setValueInitial(value: string | null, options: ITreeSelectOnly[]) {
    state.value.options.tree = addHeaderToShow(options)
    state.value.options.notSelect = notGroupSelect(options)
    state.value.options.canSelect = canSelect(options)
    state.value.selectedId = value

    const selected = state.value.options.canSelect.find(
      (item) => item.id === value
    )

    if (selected) state.value.selected = selected
  }

  function canSelect(options: ITreeSelectOnly[], result: ITreeSelectOnly[] = []) {
    options.forEach((item) => {
      if (item.children) {
        const opts = item.children.filter((it) => !it.children)
        result.push(...opts)

        canSelect(item.children, result)
      }
    })

    return result
  }

  function notGroupSelect(options: ITreeSelectOnly[], result: string[] = []) {
    options.forEach((item) => {
      if (item.children) {
        result.push(item.id)
        notGroupSelect(item.children, result)
      }
    })

    return result
  }

  function addHeaderToShow(options: ITreeSelectOnly[]) {
    options.forEach((obj) => {
      if (obj.children) {
        obj.header = 'show'
        addHeaderToShow(obj.children)
      }
    })

    return options
  }

  return {
    state,
    treeView,
    isSelected,
    expandOptions,
    setValueInitial,
    filterTreeSelect,
  }
}
