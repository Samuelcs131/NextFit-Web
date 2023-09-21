import { List } from 'src/domain/application/entities/list/List.entity'
import { ref } from 'vue'

interface IState {
  listActivities: List<any>
}

const state = ref({
  listActivities: new List<any>([])
} as IState)

export function useActivities() {
  return { state }
}
