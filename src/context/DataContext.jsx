import { createContext, useState } from 'react'
import {
  deliveryDetailsArray,
  harvestData,
  salesArray
} from '../utils/harvestData'

export const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [harvestDataState, setHarvestDataState] = useState(harvestData)
  const [deliveryDetails, setDeliveryDetails] = useState(deliveryDetailsArray)
  const [salesDetails, setSalesDetails] = useState(salesArray)

  const transformedSalesDetails = salesDetails.map((sale) => {
    const incomePunnets = sale.punnetsSold * sale.pricePunnets
    const incomePulp = sale.pulpSold * sale.pricePulp
    const totalIncome = incomePunnets + incomePulp
    return {
      ...sale,
      totalIncome,
      incomePunnets,
      incomePulp
    }
  })

  const deliveriesGraphData = deliveryDetailsArray.map((details) => {
    const totalDeliveries = details.punnets + details.pulp
    return {
      ...details,
      totalDeliveries
    }
  })

  return (
    <DataContext.Provider
      value={{
        harvestDataState,
        setHarvestDataState,
        deliveryDetails,
        setDeliveryDetails,
        salesDetails,
        setSalesDetails,
        transformedSalesDetails,
        deliveriesGraphData
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
