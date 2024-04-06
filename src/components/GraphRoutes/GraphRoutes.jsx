import { Navigate, Route, Routes } from 'react-router-dom'
import TempHarvestGraph from '../Graphs/TempHarvestGraph'
import DailyHarvestGraph from '../Graphs/DailyHarvestGraph'
import PunnetsSoldGraph from '../Graphs/PunnetsSoldGraph'
import PulpSoldGraph from '../Graphs/PulpSoldGraph'
import DeliveriesTotalGraph from '../Graphs/DeliveriesTotalGraph'
import DeliveriesPunnetsGraph from '../Graphs/DeliveriesPunnetsGraph'
import DeliveriesPulpGraph from '../Graphs/DeliveriesPulpGraph'
import IncomeGraph from '../Graphs/IncomeGraph'
import useWindowSize from '../../custom/useWindowHook'
import { getGraphHeight, getGraphWidth } from '../../utils/getGraphWidthHeight'

const GraphRoutes = () => {
  const screenWidth = useWindowSize()
  const graphWidth = getGraphWidth(screenWidth)
  const graphHeight = getGraphHeight(screenWidth)

  return (
    <Routes>
      <Route
        path='/home'
        element={<Navigate replace to='/home/temperatureAndHarvest' />}
      />
      <Route
        path='/home/temperatureAndHarvest'
        element={<TempHarvestGraph width={graphWidth} height={graphHeight} />}
      />
      <Route
        path='/home/dailyHarvest'
        element={<DailyHarvestGraph width={1000} height={500} />}
      />
      <Route
        path='/home/punnetsSold'
        element={<PunnetsSoldGraph width={1000} height={500} />}
      />
      <Route
        path='/home/pulpSold'
        element={<PulpSoldGraph width={1000} height={500} />}
      />
      <Route
        path='/home/income'
        element={<IncomeGraph width={1000} height={500} />}
      />
      <Route
        path='/home/totalDeliveries'
        element={<DeliveriesTotalGraph width={1000} height={500} />}
      />
      <Route
        path='/home/deliveriesPunnets'
        element={<DeliveriesPunnetsGraph width={1000} height={500} />}
      />
      <Route
        path='/home/deliveriesPulp'
        element={<DeliveriesPulpGraph width={1000} height={500} />}
      />
    </Routes>
  )
}

export default GraphRoutes
