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

const DeliveriesTotalGraph = ({ width, height }) => {
  const { deliveriesGraphData } = useContext(DataContext)
  const dataToShow = deliveriesGraphData.slice(0, 15)

  return (
    <>
      <ComposedChart width={width} height={height} data={dataToShow}>
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
