import { useContext } from 'react'
import {
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart
} from 'recharts'
import { DataContext } from '../../context/DataContext'

const PulpSoldGraph = ({ width, height }) => {
  const { transformedSalesDetails } = useContext(DataContext)
  return (
    <>
      <LineChart width={width} height={height} data={transformedSalesDetails}>
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='pulpSold'
          stroke='#ff0000'
          name='Pulp sold'
        />
        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey='date' />
        <YAxis />
      </LineChart>
    </>
  )
}

export default PulpSoldGraph
