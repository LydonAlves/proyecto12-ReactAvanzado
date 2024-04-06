export const deleteItemById = (array, object, setState) => {
  const id = object.id
  const updatedArray = array.filter((item) => item.id != id)

  setState(updatedArray)
}
