import { Notify } from 'quasar'

export default function useNotify () {
  function feedback (
    opt: {
      type: 'positive' | 'negative' | 'warning' | 'info' | 'ongoing',
      position: 'top-left' | 'top-right' | 'top' | 'bottom' | 'center',
      message: string,
      caption?: string
      progress?: boolean,
      timeout?: 5000,
    }
  ) {
    opt.progress = true

    Notify.create({
      timeout: opt.timeout,
      progress: opt.progress,
      message: opt.message,
      caption: opt.caption,
      position: opt.position,
      type: opt.type,
      actions: [
        {
          icon: 'close',
          color: 'white',
          size: 'sm',
          flat: true,
          round: true
        }
      ]
    })
  }

  return {
    feedback
  }
}
