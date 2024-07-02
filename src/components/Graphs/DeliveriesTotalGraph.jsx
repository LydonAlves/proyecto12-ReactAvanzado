import { useContext } from 'react'
import {
  ComposedChart,
  Bar,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts'
import { DataContext } from '../../context/DataContext'
import { getGraphHeight, getGraphWidth } from '../../utils/getGraphWidthHeight'
import useWindowSize from '../../custom/useWindowHook'

const DeliveriesTotalGraph = ({ width, height }) => {
  const screenWidth = useWindowSize()
  const graphWidth = width ? width : getGraphWidth(screenWidth)
  const graphHeight = height ? height : getGraphHeight(screenWidth)
  const { deliveriesGraphData } = useContext(DataContext)
  const dataToShow = deliveriesGraphData.slice(0, 15)

  return (
    <>
      <ComposedChart width={graphWidth} height={graphHeight} data={dataToShow}>
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='totalDeliveries'
          stroke='#ff0000'
          name='Total number of products delivered'
        />
        <Bar dataKey='punnets' barSize={20} fill='#413ea0' name='Punnets' />
        <Bar dataKey='pulp' barSize={20} fill='#7e7bda' name='Pulp' />

        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey='date' />
        <YAxis />
      </ComposedChart>
    </>
  )
}

export default DeliveriesTotalGraph
