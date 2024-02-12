import { IActivityItemDto } from './IActivityItem.type'
import { ITagDto } from './ITag.type'

export interface ITrainingDto {
  id: string | null
  name: string
  tags: ITagDto[]
  activities: IActivityItemDto[]
}
