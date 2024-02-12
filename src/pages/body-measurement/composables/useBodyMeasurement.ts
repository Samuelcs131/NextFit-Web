import { Form } from 'src/domain/application/entities/form/Form.entity'
import { List } from 'src/domain/application/entities/list/List.entity'
import ActionDispatcher from 'src/helpers/requester/Requester.helper'
import { BodyMeasurementService } from 'src/service/nextfit/body-measurement/bodyMeasurement.service'
import { IBodyMeasurement } from 'src/types/body-measurement/IBodyMeasurement.type'
import { ref } from 'vue'
import { bodyMeasurementLoader } from '../constants/bodyMeasurementLoader.const'
import { useDialog } from 'src/composables/useDialog'

interface IState {
  listBodyMeasurement: List<IBodyMeasurement>
  form: Form<IBodyMeasurement>
}

const state = ref({
  listBodyMeasurement: new List<IBodyMeasurement>([]),
  form: new Form<IBodyMeasurement>(),
} as IState)

export function useBodyMeasurement() {
  const { createDialog } = useDialog()

  async function fetchBodyMeasurements() {
    ActionDispatcher.dispatch({
      callback: async () => {
        const { data: bodyMeasurements } = await BodyMeasurementService.getAll()
        state.value.listBodyMeasurement = new List<IBodyMeasurement>(
          bodyMeasurements
        )
      },
      loaders: [bodyMeasurementLoader.fetchBodyMeasurements],
    })
  }

  async function fetchBodyMeasurement(id: string) {
    ActionDispatcher.dispatch({
      callback: async () => {
        const { data: bodyMeasurement } = await BodyMeasurementService.getById(
          id
        )

        state.value.form = new Form(bodyMeasurement)
      },
      loaders: [bodyMeasurementLoader.fetchBodyMeasurement],
    })
  }

  function resetForm() {
    state.value.form = new Form<IBodyMeasurement>()
  }

  return {
    state,
    resetForm,
    createDialog,
    fetchBodyMeasurement,
    fetchBodyMeasurements,
  }
}
