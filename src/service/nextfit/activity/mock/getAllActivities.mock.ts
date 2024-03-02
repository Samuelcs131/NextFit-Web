import { getAllExercise } from '../../exercise/mock/getAllExercise.mock'
import { numberRandom } from 'src/utils/random/random.utils'

export const getAllActivities = [
  {
    id: 'd5644e8105ad77c3c3324ba693e83d8fffd54950',
    exercise: getAllExercise[0],
    date: '2023-12-01T09:50:00.000Z',
    createAt: '2023-12-01T09:50:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: 'c9e1144e1961dcab3458068f12ef2038b8ae29f6',
    exercise: getAllExercise[1],
    date: '2024-01-01T13:01:00.000Z',
    createAt: '2024-01-01T13:01:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '7a65ca8b18cc76e966a0f6cafa78e4aece9f0944',
    exercise: getAllExercise[2],
    date: '2024-02-02T13:02:00.000Z',
    createAt: '2024-02-02T13:02:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: 'a66cb049b05dff56fe280c5fada469a5aafecf7e',
    exercise: getAllExercise[3],
    date: '2024-03-03T13:03:00.000Z',
    createAt: '2024-03-03T13:03:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '0c7462713fce05376a9ddc193236737a351cc6c3',
    exercise: getAllExercise[4],
    date: '2024-04-04T13:04:00.000Z',
    createAt: '2024-04-04T13:04:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '276c587e80fa9afa1390750a097be06f0171c83b',
    exercise: getAllExercise[5],
    date: '2024-05-05T13:05:00.000Z',
    createAt: '2024-05-05T13:05:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
 
  {
    id: 'e34450e07c34f84aebf9e9451e978faa768a1096',
    exercise: getAllExercise[7],
    date: '2024-07-07T13:07:00.000Z',
    createAt: '2024-07-07T13:07:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '915d0cd7a4835584462a403cbe9c4b1e0c6efb20',
    exercise: getAllExercise[8],
    date: '2024-08-08T13:08:00.000Z',
    createAt: '2024-08-08T13:08:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '5c046916f88157356dd30e901fafc9fe1c407058',
    exercise: getAllExercise[10],
    date: '2024-10-10T13:10:00.000Z',
    createAt: '2024-10-10T13:10:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '05ad77c3c3324ba693e83d8fffd54950',
    exercise: getAllExercise[0],
    date: '2023-12-05T19:50:00.000Z',
    createAt: '2023-12-05T19:50:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '1961dcab3458068f12ef2038b8ae29f6',
    exercise: getAllExercise[1],
    date: '2023-01-01T13:01:00.000Z',
    createAt: '2023-01-01T13:01:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '18cc76e966a0f6cafa78e4aece9f0944',
    exercise: getAllExercise[2],
    date: '2023-02-02T13:02:00.000Z',
    createAt: '2023-02-02T13:02:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: 'b05dff56fe280c5fada469a5aafecf7e',
    exercise: getAllExercise[3],
    date: '2023-03-03T13:03:00.000Z',
    createAt: '2023-03-03T13:03:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '3fce05376a9ddc193236737a351cc6c3',
    exercise: getAllExercise[4],
    date: '2023-04-04T13:04:00.000Z',
    createAt: '2023-04-04T13:04:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '80fa9afa1390750a097be06f0171c83b',
    exercise: getAllExercise[5],
    date: '2023-05-05T13:05:00.000Z',
    createAt: '2023-05-05T13:05:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: 'a22e77453869da47e7aa65289d47fd33',
    exercise: getAllExercise[6],
    date: '2023-06-06T13:06:00.000Z',
    createAt: '2023-06-06T13:06:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '7c34f84aebf9e9451e978faa768a1096',
    exercise: getAllExercise[7],
    date: '2023-07-07T13:07:00.000Z',
    createAt: '2023-07-07T13:07:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: 'a4835584462a403cbe9c4b1e0c6efb20',
    exercise: getAllExercise[8],
    date: '2023-08-08T13:08:00.000Z',
    createAt: '2023-08-08T13:08:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '8c2d782c09739868cca25ae5cc287939',
    exercise: getAllExercise[9],
    date: '2023-09-09T13:09:00.000Z',
    createAt: '2023-09-09T13:09:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: 'f88157356dd30e901fafc9fe1c407058',
    exercise: getAllExercise[10],
    date: '2023-10-10T13:10:00.000Z',
    createAt: '2023-10-10T13:10:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '7c3c3324ba693e83d8fffd54950',
    exercise: getAllExercise[0],
    date: '2022-12-01T09:50:00.000Z',
    createAt: '2022-12-01T09:50:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: 'cab3458068f12ef2038b8ae29f6',
    exercise: getAllExercise[1],
    date: '2022-01-01T13:01:00.000Z',
    createAt: '2022-01-01T13:01:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '6e966a0f6cafa78e4aece9f0944',
    exercise: getAllExercise[2],
    date: '2022-02-02T13:02:00.000Z',
    createAt: '2022-02-02T13:02:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: 'f56fe280c5fada469a5aafecf7e',
    exercise: getAllExercise[3],
    date: '2022-03-03T13:03:00.000Z',
    createAt: '2022-03-03T13:03:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '5376a9ddc193236737a351cc6c3',
    exercise: getAllExercise[4],
    date: '2022-04-04T13:04:00.000Z',
    createAt: '2022-04-04T13:04:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: 'afa1390750a097be06f0171c83b',
    exercise: getAllExercise[5],
    date: '2022-05-05T13:05:00.000Z',
    createAt: '2022-05-05T13:05:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '7453869da47e7aa65289d47fd33',
    exercise: getAllExercise[6],
    date: '2022-06-06T13:06:00.000Z',
    createAt: '2022-06-06T13:06:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '84aebf9e9451e978faa768a1096',
    exercise: getAllExercise[7],
    date: '2022-07-07T13:07:00.000Z',
    createAt: '2022-07-07T13:07:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '584462a403cbe9c4b1e0c6efb20',
    exercise: getAllExercise[8],
    date: '2022-08-08T13:08:00.000Z',
    createAt: '2022-08-08T13:08:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '82c09739868cca25ae5cc287939',
    exercise: getAllExercise[9],
    date: '2022-09-09T13:09:00.000Z',
    createAt: '2022-09-09T13:09:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '7356dd30e901fafc9fe1c407058',
    exercise: getAllExercise[10],
    date: '2022-10-10T13:10:00.000Z',
    createAt: '2022-10-10T13:10:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  /*  */
  {
    id: 'c3324ba693e83d8fffd54950',
    exercise: getAllExercise[0],
    date: '2022-12-01T09:50:00.000Z',
    createAt: '2022-12-01T09:50:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '3458068f12ef2038b8ae29f6',
    exercise: getAllExercise[1],
    date: '2022-01-01T13:01:00.000Z',
    createAt: '2022-01-01T13:01:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '66a0f6cafa78e4aece9f0944',
    exercise: getAllExercise[2],
    date: '2022-02-02T13:02:00.000Z',
    createAt: '2022-02-02T13:02:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: 'fe280c5fada469a5aafecf7e',
    exercise: getAllExercise[3],
    date: '2022-03-03T13:03:00.000Z',
    createAt: '2022-03-03T13:03:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '6a9ddc193236737a351cc6c3',
    exercise: getAllExercise[4],
    date: '2022-04-04T13:04:00.000Z',
    createAt: '2022-04-04T13:04:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '1390750a097be06f0171c83b',
    exercise: getAllExercise[5],
    date: '2022-05-05T13:05:00.000Z',
    createAt: '2022-05-05T13:05:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '3869da47e7aa65289d47fd33',
    exercise: getAllExercise[6],
    date: '2022-06-06T13:06:00.000Z',
    createAt: '2022-06-06T13:06:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: 'ebf9e9451e978faa768a1096',
    exercise: getAllExercise[7],
    date: '2022-07-07T13:07:00.000Z',
    createAt: '2022-07-07T13:07:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '462a403cbe9c4b1e0c6efb20',
    exercise: getAllExercise[8],
    date: '2022-08-08T13:08:00.000Z',
    createAt: '2022-08-08T13:08:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  {
    id: '09739868cca25ae5cc287939',
    exercise: getAllExercise[9],
    date: '2022-09-09T13:09:00.000Z',
    createAt: '2022-09-09T13:09:00.000Z',
    series: numberRandom(1, 10),
    interval: numberRandom(20, 150),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },

]
