import { numberRandom } from 'src/utils/random/random.utils'
import { getAllExercise } from '../../exercise/mock/getAllExercise.mock'
import { ITrainingDto } from '../dto/ITrainingDto.type'
import { colorPalette } from 'src/constants/color/colorPalette.const'

export const getAllTraining: ITrainingDto[] = [
  {
    id: 'd782c09739868cca25ae5',
    name: 'Treino de segunda',
    tags: [
      {
        color: colorPalette[0].color,
        id: 'f132f43g5h6k768j5h4g',
        name: 'Seg'
      },
      {
        color: colorPalette[1].color,
        id: 't34tkij76d32g45',
        name: 'Ter'
      },
      {
        color: colorPalette[2].color,
        id: 'g45jk87j65436jh5g34',
        name: 'Qua'
      },
      {
        color: colorPalette[3].color,
        id: 'g45jk87j65436jh5g34',
        name: 'Qui'
      },
      {
        color: colorPalette[4].color,
        id: 'g45jk87j65436jh5g34',
        name: 'Sex'
      },
      {
        color: colorPalette[5].color,
        id: 'g45jk87j65436jh5g34',
        name: 'Sab'
      },
      {
        color: colorPalette[6].color,
        id: 'g45jk87j65436jh5g34',
        name: 'Dom'
      },
      {
        color: colorPalette[7].color,
        id: 'g45jk87j65436jh5g34',
        name: 'Opcional 1'
      },
      {
        color: colorPalette[8].color,
        id: 'g45jk87j65436jh5g34',
        name: 'Opcional'
      },
    ],
    activities: [
      {
        id: '56f8e3998c2d782c09739868cca25ae5cc287939',
        exerciseId: getAllExercise[9].id,
        exerciseName: getAllExercise[9].name,
        illustrativeVideo: getAllExercise[9].illustrativeVideo,
        series: numberRandom(1, 10),
        interval: numberRandom(20, 150),
        repetitions: numberRandom(1, 20),
        weight: numberRandom(1, 20),
        order: 1,
      },
      {
        id: '5c046916f88157356dd30e901fafc9fe1c407058',
        exerciseId: getAllExercise[10].id,
        exerciseName: getAllExercise[10].name,
        illustrativeVideo: getAllExercise[10].illustrativeVideo,
        series: numberRandom(1, 10),
        interval: numberRandom(20, 150),
        repetitions: numberRandom(1, 20),
        weight: numberRandom(1, 20),
        order: 2
      },
    ],
  },
  {
    id: '157356dd30e901fafc9fe1c4070',
    name: 'Treino de terça',
    tags: [],
    activities: [
      {
        id: '58cec947a22e77453869da47e7aa65289d47fd33',
        exerciseId: getAllExercise[6].id,
        exerciseName: getAllExercise[6].name,
        illustrativeVideo: getAllExercise[6].illustrativeVideo,
        series: numberRandom(1, 10),
        interval: numberRandom(20, 150),
        repetitions: numberRandom(1, 20),
        weight: numberRandom(1, 20),
        order: 1
      },
      {
        id: 'e34450e07c34f84aebf9e9451e978faa768a1096',
        exerciseId: getAllExercise[7].id,
        exerciseName: getAllExercise[7].name,
        illustrativeVideo: getAllExercise[7].illustrativeVideo,
        series: numberRandom(1, 10),
        interval: numberRandom(20, 150),
        repetitions: numberRandom(1, 20),
        weight: numberRandom(1, 20),
        order: 2
      },
      {
        id: '915d0cd7a4835584462a403cbe9c4b1e0c6efb20',
        exerciseId: getAllExercise[8].id,
        exerciseName: getAllExercise[8].name,
        illustrativeVideo: getAllExercise[8].illustrativeVideo,
        series: numberRandom(1, 10),
        interval: numberRandom(20, 150),
        repetitions: numberRandom(1, 20),
        weight: numberRandom(1, 20),
        order: 3
      },
    ],
  },
]
