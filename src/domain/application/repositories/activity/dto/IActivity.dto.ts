export interface IActivityDto {
  id: string | null
  exerciseId: string
  date: string
  series: number
  repetitions: number
  weight: number
  interval: number
  createAt: string | null
}
