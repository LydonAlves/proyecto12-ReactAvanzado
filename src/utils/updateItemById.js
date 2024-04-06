export const updateItemById = (array, object, setState) => {
  // console.log(object)
  let itemId = object.id
  let itemFound = false
  // console.log(itemId)
  // console.log(harvestDataState)

  const updatedItems = array.map((item) => {
    if (item.id === itemId) {
      //! this overwrites the values that have changed
      itemFound = true
      return { ...item, ...object }
    }
    return item
  })

  if (!itemFound) {
    updatedItems.push(object)
  }

  // console.log(updatedItems)
  setState(updatedItems)
}
