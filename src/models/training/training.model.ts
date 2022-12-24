export interface ITraining {
  id: string
  userId: string
  exerciseId: string
  date: Date
  series: number
  repetitions: number
  weight: number
  interval: number
  createAt: Date
}
