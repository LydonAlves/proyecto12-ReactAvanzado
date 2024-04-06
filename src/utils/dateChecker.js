export const dataChecker = (dataArray, date) => {
  const dataPoint = dataArray.find((dataPoint) => dataPoint.date === date)
  return dataPoint
}
