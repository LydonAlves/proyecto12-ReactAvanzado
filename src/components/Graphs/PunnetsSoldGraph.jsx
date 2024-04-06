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

const PunnetsSoldGraph = ({ width, height }) => {
  const { transformedSalesDetails } = useContext(DataContext)
  return (
    <>
      <LineChart width={width} height={height} data={transformedSalesDetails}>
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='punnetsSold'
          stroke='#ff0000'
          name='Punnets sold'
        />
        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey='date' />
        <YAxis />
      </LineChart>
    </>
  )
}

export default PunnetsSoldGraph
