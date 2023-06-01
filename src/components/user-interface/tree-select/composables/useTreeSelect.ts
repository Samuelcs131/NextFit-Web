import { QTree } from 'quasar'
import { nextTick, ref } from 'vue'
import { ITreeNode } from '../types/ITreeNode.type'
import { slugify } from 'src/utils/slugfy.utils'
import { filterObjectsByPropertyValueRecursive } from 'src/utils/array/filterObjectsByPropertyValueRecursive.utils'

interface ITree {
  [key: string]: {
    selectedNodes: ITreeNode[]
    ticked: string[]
    treeNodes: ITreeNode[]
  }
}

interface IState {
  tree: ITree
  treeId: string
  isPopupShown: boolean
  inputValue: string | null
}

export function useTreeSelect() {
  const initializeState: IState = {
    tree: {},
    treeId: crypto.randomUUID(),
    isPopupShown: false,
    inputValue: null,
  }

  const state = ref(initializeState)
  const treeView = ref<QTree | null>(null)

  function createTree(treeId: string, nodes: ITreeNode[]) {
    state.value.tree[treeId] = {
      selectedNodes: [],
      ticked: [],
      treeNodes: nodes,
    }
  }

  function getTickedNodes(treeId: string) {
    nextTick(() => {
      state.value.tree[treeId].selectedNodes =
        treeView.value?.getTickedNodes() as ITreeNode[]
    })
  }

  function getSelectedLabels(treeId: string) {
    const labels = state.value.tree[treeId].selectedNodes.map((node) => {
      return node.label
    })

    if (labels.length > 3) {
      const [label1, label2, label3] = labels

      return `${[label1, label2, label3].join(', ')} +${labels.length - 3}`
    }

    return labels.join(',')
  }

  function handleRemoveItem(id: string) {
    const { treeId } = state.value
    state.value.tree[treeId].selectedNodes = state.value.tree[
      treeId
    ].selectedNodes.filter((item) => {
      return item.id !== id
    })
    state.value.tree[treeId].ticked = state.value.tree[treeId].ticked.filter(
      (itemId) => {
        return itemId !== id
      }
    )
  }

  function clearField(treeId: string) {
    state.value.tree[treeId].selectedNodes = []
    state.value.tree[treeId].ticked = []
  }

  function isSelected() {
    return state.value.tree[state.value.treeId].selectedNodes.length > 0
  }

  function filterTreeSelect(node: ITreeNode, filter: string) {
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

  function setValueDefault(value: string[]) {
    const options = state.value.tree[state.value.treeId].treeNodes

    const selecteds = filterObjectsByPropertyValueRecursive(
      options,
      'id',
      'children',
      value
    )

    state.value.tree[state.value.treeId].selectedNodes = selecteds
    state.value.tree[state.value.treeId].ticked = selecteds.map((i) => i.id)
  }

  return {
    state,
    treeView,
    isSelected,
    createTree,
    clearField,
    expandOptions,
    getTickedNodes,
    setValueDefault,
    filterTreeSelect,
    handleRemoveItem,
    getSelectedLabels,
  }
}
