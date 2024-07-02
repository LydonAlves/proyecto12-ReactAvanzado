
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import { getGraphHeight, getGraphWidth } from "../../utils/getGraphWidthHeight"
import useWindowSize from "../../custom/useWindowHook"

const CartesianGridGraph = ({ graphData }) => {
  const screenWidth = useWindowSize()
  const { data, lineDataKey, lineName, width, height } = graphData
  const graphWidth = width ? width : getGraphWidth(screenWidth)
  const graphHeight = height ? height : getGraphHeight(screenWidth)

  return (
    <>
      <LineChart width={graphWidth} height={graphHeight} data={data}>
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey={lineDataKey}
          stroke='#ff0000'
          name={lineName}
        />
        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey='date' />
        <YAxis />
      </LineChart>
    </>
  )
}

export default CartesianGridGraph