export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * max) + min
}

export const generateValues = (): number[][] => {
  const nums: number[][] = []
  const tempNumbers: number[] = []
  let min: number = 1
  for (let i = 1; i < 6; i++) {
    while (tempNumbers.length < 5) {
      if (i == 3 && tempNumbers.length == 2) {
        tempNumbers.push(0)
      }
      const temp = getRandomInt(min, 15)
      if (!tempNumbers.includes(temp)) {
        tempNumbers.push(temp)
      }
    }
    nums.push(tempNumbers.slice())
    tempNumbers.splice(0)
    min += 15
  }
  return nums
}

export const getInitialOpenedResults = () => [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, true, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
]

export const getColumnResults = (openedResults, index) => {
  return openedResults[index]
}

export const getRowResults = (openedResults, index) => {
  return openedResults.map(x => x[index])
}

export const getResults = (openedResults): boolean[][] => {
  return [
    getColumnResults(openedResults, 0),
    getColumnResults(openedResults, 1),
    getColumnResults(openedResults, 2),
    getColumnResults(openedResults, 3),
    getColumnResults(openedResults, 4),
    getRowResults(openedResults, 0),
    getRowResults(openedResults, 1),
    getRowResults(openedResults, 2),
    getRowResults(openedResults, 3),
    getRowResults(openedResults, 4),
    [openedResults[0][0], openedResults[1][1], openedResults[2][2], openedResults[3][3], openedResults[4][4]],
    [openedResults[0][4], openedResults[1][3], openedResults[2][2], openedResults[3][1], openedResults[4][0]],
  ]
}

export const calcBingoCounts = (openedResults) => {
  let count = 0
  const res = getResults(openedResults)
  res.forEach(x => {
    if (x.filter(value => value == true).length == 5) {
      count++
    }
  })
  return count
}

export const calcReachCounts = (openedResults) => {
  let count = 0
  const res = getResults(openedResults)
  res.forEach(x => {
    if (x.filter(value => value == true).length == 4) {
      count++
    }
  })
  return count
}
