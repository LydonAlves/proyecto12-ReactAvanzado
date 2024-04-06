const findData = (salesDetails, selectedDelivery) => {
  const dataFound = salesDetails.find(
    (delivery) =>
      delivery.deliveryId.toString() === selectedDelivery.id.toString()
  )
  return dataFound
}
export default findData
