import { IActivity } from 'src/types/activity/IActivity.type'
import { getAllExercise } from '../../exercise/mock/getAllExercise.mock'
import { numberRandom } from 'src/utils/random/random.utils'

export const getAllActivities = [
  {
    id: 'd5644e8105ad77c3c3324ba693e83d8fffd54950',
    exercise: getAllExercise[0],
    date: new Date().toISOString(),
    createAt: new Date().toISOString(),
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: 'c9e1144e1961dcab3458068f12ef2038b8ae29f6',
    exercise: getAllExercise[1],
    date: new Date().toISOString(),
    createAt: new Date().toISOString(),
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '7a65ca8b18cc76e966a0f6cafa78e4aece9f0944',
    exercise: getAllExercise[2],
    date: new Date().toISOString(),
    createAt: new Date().toISOString(),
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: 'a66cb049b05dff56fe280c5fada469a5aafecf7e',
    exercise: getAllExercise[3],
    date: new Date().toISOString(),
    createAt: new Date().toISOString(),
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '0c7462713fce05376a9ddc193236737a351cc6c3',
    exercise: getAllExercise[4],
    date: new Date().toISOString(),
    createAt: new Date().toISOString(),
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '276c587e80fa9afa1390750a097be06f0171c83b',
    exercise: getAllExercise[5],
    date: new Date().toISOString(),
    createAt: new Date().toISOString(),
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '58cec947a22e77453869da47e7aa65289d47fd33',
    exercise: getAllExercise[6],
    date: new Date().toISOString(),
    createAt: new Date().toISOString(),
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: 'e34450e07c34f84aebf9e9451e978faa768a1096',
    exercise: getAllExercise[7],
    date: new Date().toISOString(),
    createAt: new Date().toISOString(),
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '915d0cd7a4835584462a403cbe9c4b1e0c6efb20',
    exercise: getAllExercise[8],
    date: new Date().toISOString(),
    createAt: new Date().toISOString(),
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '56f8e3998c2d782c09739868cca25ae5cc287939',
    exercise: getAllExercise[9],
    date: new Date().toISOString(),
    createAt: new Date().toISOString(),
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '5c046916f88157356dd30e901fafc9fe1c407058',
    exercise: getAllExercise[10],
    date: new Date().toISOString(),
    createAt: new Date().toISOString(),
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
]