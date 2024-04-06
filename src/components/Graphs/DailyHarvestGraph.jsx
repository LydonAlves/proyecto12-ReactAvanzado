import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'

const DailyHarvestGraph = ({ width, height }) => {
  const { harvestDataState } = useContext(DataContext)

  return (
    <>
      <LineChart width={width} height={height} data={harvestDataState}>
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='bucketsHarvested'
          stroke='#ff0000'
          name='Buckets harvested'
        />
        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey='date' />
        <YAxis />
      </LineChart>
    </>
  )
}

export default DailyHarvestGraph
