import { IActivityDto } from '../dto/IActivity.dto'
import { numberRandom } from 'src/utils/random/random.utils'

export const getAllMock: IActivityDto[] = [
  {
    id: '0',
    exerciseId: '0',
    date: new Date().toString(),
    createAt: new Date().toString(),
    series: numberRandom(1, 10),
    interval: numberRandom(60, 200),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },

  {
    id: '1',
    exerciseId: '1',
    date: new Date().toString(),
    createAt: new Date().toString(),
    series: numberRandom(1, 10),
    interval: numberRandom(60, 200),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },

  {
    id: '2',
    exerciseId: '2',
    date: new Date().toString(),
    createAt: new Date().toString(),
    series: numberRandom(1, 10),
    interval: numberRandom(60, 200),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },

  {
    id: '3',
    exerciseId: '3',
    date: new Date().toString(),
    createAt: new Date().toString(),
    series: numberRandom(1, 10),
    interval: numberRandom(60, 200),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },

  {
    id: '4',
    exerciseId: '4',
    date: new Date().toString(),
    createAt: new Date().toString(),
    series: numberRandom(1, 10),
    interval: numberRandom(60, 200),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },

  {
    id: '5',
    exerciseId: '5',
    date: new Date().toString(),
    createAt: new Date().toString(),
    series: numberRandom(1, 10),
    interval: numberRandom(60, 200),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },

  {
    id: '6',
    exerciseId: '6',
    date: new Date().toString(),
    createAt: new Date().toString(),
    series: numberRandom(1, 10),
    interval: numberRandom(60, 200),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },

  {
    id: '7',
    exerciseId: '7',
    date: new Date().toString(),
    createAt: new Date().toString(),
    series: numberRandom(1, 10),
    interval: numberRandom(60, 200),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },

  {
    id: '8',
    exerciseId: '8',
    date: new Date().toString(),
    createAt: new Date().toString(),
    series: numberRandom(1, 10),
    interval: numberRandom(60, 200),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },

  {
    id: '9',
    exerciseId: '9',
    date: new Date().toString(),
    createAt: new Date().toString(),
    series: numberRandom(1, 10),
    interval: numberRandom(60, 200),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
]
