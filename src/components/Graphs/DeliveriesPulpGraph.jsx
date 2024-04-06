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

const DeliveriesPulpGraph = ({ width, height }) => {
  const { deliveriesGraphData } = useContext(DataContext)
  return (
    <>
      <LineChart width={width} height={height} data={deliveriesGraphData}>
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='pulp'
          stroke='#ff0000'
          name='Pulp delivered'
        />
        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey='date' />
        <YAxis />
      </LineChart>
    </>
  )
}
export default DeliveriesPulpGraph
