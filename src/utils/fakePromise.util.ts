export const fakePromise = (time: number) =>
  new Promise((res) =>
    setTimeout(() => {
      res('')
    }, time)
  )
