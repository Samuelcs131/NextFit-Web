for(let num = 0; num < 10; num++){

  console.log(`
  {
    id: '${num}',
    exerciseId: '${num}',
    date: new Date().toString(),
    createAt: new Date().toString(),
    series: numberRandom(1, 10),
    interval: numberRandom(60, 200),
    repetitions: numberRandom(1, 20),
    weight: numberRandom(1, 20),
  },
  `)
}
