import { ActivityId } from 'src/domain/application/entities/activity/ActitityId.entity'
import { IActivityDto } from '../dto/IActivity.dto'
import { Activity } from 'src/domain/application/entities/activity/Activity.entity'

export class ActivityMappper {
  static toEntity(dto: IActivityDto): Activity {
    const id = dto.id ? ActivityId.create(dto.id) : ActivityId.create()

    return new Activity(
      id,
      dto.exerciseId,
      dto.date,
      dto.series,
      dto.repetitions,
      dto.weight,
      dto.interval
    )
  }

  static toEntities(dtos: IActivityDto[]): Activity[] {
    return dtos.map((dto) => {
      const id = dto.id ? ActivityId.create(dto.id) : ActivityId.create()

      return new Activity(
        id,
        dto.exerciseId,
        dto.date,
        dto.series,
        dto.repetitions,
        dto.weight,
        dto.interval
      )
    })
  }

  static toDto(entity: Activity): IActivityDto {
    const id = entity.id.createServerEntity()

    return {
      id,
      exerciseId: entity.exerciseId,
      date: entity.date,
      series: entity.series,
      repetitions: entity.repetitions,
      weight: entity.weight,
      interval: entity.interval,
      createAt: null,
    }
  }
}
