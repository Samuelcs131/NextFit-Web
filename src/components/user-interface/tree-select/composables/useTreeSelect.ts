import { QTree } from 'quasar'
import { nextTick, ref } from 'vue'
import { ITreeSelect } from '../types/ITreeSelect.type'
import { slugify } from 'src/utils/slugfy.utils'
import { filterObjectsByPropertyValueRecursive } from 'src/utils/array/filterObjectsByPropertyValueRecursive.utils'

interface ITree {
  selected: ITreeSelect[]
  ticked: string[]
  options: ITreeSelect[]
}

interface IState {
  tree: ITree
  isPopupShown: boolean
  inputValue: string | null
}

export function useTreeSelect() {
  const initializeState: IState = {
    tree: {
      selected: [],
      ticked: [],
      options: [],
    },
    isPopupShown: false,
    inputValue: null,
  }

  const state = ref(initializeState)
  const treeView = ref<QTree | null>(null)

  function getTickedNodes() {
    nextTick(() => {
      state.value.tree.selected =
        treeView.value?.getTickedNodes() as ITreeSelect[]
    })
  }

  function labelsText(maxItems?: number) {
    const labels = state.value.tree.selected.map((node) => {
      return node.label
    })

    if (maxItems && maxItems > 0) {
      const plus = labels.length - maxItems
      return `${labels.slice(0, maxItems).join(', ')} ${
        plus > 0 ? `( +${plus} )` : ''
      }`
    }

    return labels.join(', ')
  }

  function labelsChip(maxItems?: number) {
    const labels = state.value.tree.selected

    if (maxItems && maxItems > 0) {
      const plus = labels.length - maxItems

      return {
        labels: labels.slice(0, maxItems),
        plus: plus > 0 ? `( +${plus} )` : '',
      }
    }

    return { labels, plus: '' }
  }

  function handleRemoveItem(id: string) {
    state.value.tree.selected = state.value.tree.selected.filter((item) => {
      return item.id !== id
    })
    state.value.tree.ticked = state.value.tree.ticked.filter((itemId) => {
      return itemId !== id
    })
  }

  function clearField() {
    state.value.tree.selected = []
    state.value.tree.ticked = []
  }

  function isSelected() {
    return state.value.tree.selected.length > 0
  }

  function filterTreeSelect(node: ITreeSelect, filter: string) {
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

  function setValueInitial(value: string[] | null, options: ITreeSelect[]) {
    state.value.tree.options = options

    if (!value) return
    
    const selecteds = filterObjectsByPropertyValueRecursive(
      options,
      'id',
      'children',
      value
    )

    state.value.tree.selected = selecteds
    state.value.tree.ticked = selecteds.map((i) => i.id)
  }

  return {
    state,
    treeView,
    isSelected,
    clearField,
    expandOptions,
    getTickedNodes,
    setValueInitial,
    filterTreeSelect,
    handleRemoveItem,
    labelsText,
    labelsChip,
  }
}
