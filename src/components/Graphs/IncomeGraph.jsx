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

const IncomeGraph = ({ width, height }) => {
  const screenWidth = useWindowSize()
  const { transformedSalesDetails } = useContext(DataContext)
  const graphWidth = width ? width : getGraphWidth(screenWidth)
  const graphHeight = height ? height : getGraphHeight(screenWidth)

  return (
    <>
      <ComposedChart
        width={graphWidth}
        height={graphHeight}
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
