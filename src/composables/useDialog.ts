import { ref } from 'vue'


export interface IDialog {
  [loaderId: string]: {
    isOpen: boolean
    data?: any // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}

const dialogState = ref({} as IDialog)

export function useDialog() {
  function createDialog(dialogId: string) {
    dialogState.value[dialogId] = {
      isOpen: false,
    }
  }

  function dialogIsOpen(dialogId: string) {
    return dialogState.value[dialogId].isOpen
  }

  function toggleDialog(dialogId: string) {
    dialogState.value[dialogId].isOpen = !dialogState.value[dialogId].isOpen
  }

  function clearDataDialog(dialogId: string){
    dialogState.value[dialogId].data = undefined
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function setDataDialog(dialogId: string, data?: any){
    dialogState.value[dialogId].data = data
  }

  function closeDialog(dialogId: string){
    dialogState.value[dialogId].isOpen = false
  }

  return {
    dialogState,
    closeDialog,
    createDialog,
    dialogIsOpen,
    toggleDialog,
    setDataDialog,
    clearDataDialog,
  }
}
