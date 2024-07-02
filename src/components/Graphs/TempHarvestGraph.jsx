import { useContext } from 'react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import { DataContext } from '../../context/DataContext'
import { getGraphHeight, getGraphWidth } from '../../utils/getGraphWidthHeight'
import useWindowSize from '../../custom/useWindowHook'

const TempHarvestGraph = ({ width, height }) => {
  const screenWidth = useWindowSize()
  const { harvestDataState } = useContext(DataContext)
  const graphWidth = width ? width : getGraphWidth(screenWidth)
  const graphHeight = height ? height : getGraphHeight(screenWidth)

  return (
    <>
      <LineChart width={graphWidth} height={graphHeight} data={harvestDataState}>
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='maxTemp'
          stroke='#ff0000'
          name='Maximum temperature'
        />
        <Line
          type='monotone'
          dataKey='bucketsHarvested'
          stroke='#5584d8'
          name='Number of buckets harvested'
        />
        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey='date' />
        <YAxis />
      </LineChart>
    </>
  )
}

export default TempHarvestGraph
