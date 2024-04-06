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

const IncomeGraph = ({ width, height }) => {
  const { transformedSalesDetails } = useContext(DataContext)
  return (
    <>
      <ComposedChart
        width={width}
        height={height}
        data={transformedSalesDetails}
      >
        <Tooltip />
        <Legend />
        <Bar
          dataKey='incomePunnets'
          barSize={20}
          fill='#413ea0'
          name='Income: punnets sold'
        />
        <Bar
          dataKey='incomePulp'
          barSize={20}
          fill='#7e7bda'
          name='Income: pulp sold'
        />
        <Line
          type='monotone'
          dataKey='totalIncome'
          stroke='#ff0000'
          name='Total income on all products sold'
        />
        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey='date' />
        <YAxis tickFormatter={(value) => `R${value}`} />
      </ComposedChart>
    </>
  )
}

export default IncomeGraph
