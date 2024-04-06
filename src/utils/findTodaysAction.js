const findTodaysAction = (harvestDataState, currentDate) => {
  return harvestDataState.find((item) => item.date === currentDate.toString())
}
export default findTodaysAction
