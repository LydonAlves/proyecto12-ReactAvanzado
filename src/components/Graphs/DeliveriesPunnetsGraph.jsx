import {
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart
} from 'recharts'
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'

const DeliveriesPunnetsGraph = ({ width, height }) => {
  const { deliveriesGraphData } = useContext(DataContext)
  return (
    <>
      <LineChart width={width} height={height} data={deliveriesGraphData}>
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='punnets'
          stroke='#ff0000'
          name='Punnets delivered'
        />
        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey='date' />
        <YAxis />
      </LineChart>
    </>
  )
}

export default DeliveriesPunnetsGraph
