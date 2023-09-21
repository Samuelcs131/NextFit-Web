import { Notify } from 'quasar'
import { QPosition } from 'src/enums/quasar/position.enum'
import { QType } from 'src/enums/quasar/type.enum'

export function useNotify() {
  function feedback(opt: {
    type: `${QType}`
    position: `${QPosition}`
    title: string
    description?: string
    progress?: boolean
    timeout?: number
  }) {
    opt.progress = true

    Notify.create({
      timeout: opt.timeout || 5000,
      progress: opt.progress || true ,
      message: opt.title,
      caption: opt.description,
      position: opt.position,
      color: undefined,
      classes: 'bg-theme-paper text-body-primary',
      type: opt.type,
      iconColor: opt.type,
      actions: [
        {
          icon: 'close',
          class: 'text-body-primary',
          size: 'sm',
          flat: true,
          round: true,
        },
      ],
    })
  }

  return {
    feedback,
  }
}
