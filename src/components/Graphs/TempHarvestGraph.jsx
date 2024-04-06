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

const TempHarvestGraph = ({ width, height }) => {
  const { harvestDataState } = useContext(DataContext)
  return (
    <>
      <LineChart width={width} height={height} data={harvestDataState}>
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
