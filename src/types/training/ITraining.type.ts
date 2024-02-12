import { ITag } from 'src/components/selects/tag/types/ITag.type'
import { IActivityItem } from '../activity/IActivityItem.type'
import { GeneratorId } from 'src/helpers/generatorId/GeneratorId.helper'

export interface ITraining {
  id: GeneratorId
  name: string
  tags: ITag[]
  activities: IActivityItem[]
}
