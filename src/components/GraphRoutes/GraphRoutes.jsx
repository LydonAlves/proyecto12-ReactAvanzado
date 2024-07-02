import { Navigate, Route, Routes } from 'react-router-dom'
import TempHarvestGraph from '../Graphs/TempHarvestGraph'
import { DataContext } from '../../context/DataContext'
import { useContext } from 'react'
import CartesianGridGraph from '../Graphs/CartesianGridGraph'
import IncomeGraph from '../Graphs/IncomeGraph'
import DeliveriesTotalGraph from './../Graphs/DeliveriesTotalGraph';

const GraphRoutes = () => {
  const { harvestDataState, transformedSalesDetails, deliveriesGraphData } = useContext(DataContext)

  const routes = [
    {
      path: '/home/temperatureAndHarvest',
      element: <TempHarvestGraph />
    },
    {
      path: '/home/dailyHarvest',
      graphData: {
        data: harvestDataState,
        lineDataKey: 'bucketsHarvested',
        name: 'Buckets harvested',
      },
      element: <CartesianGridGraph />
    },
    {
      path: '/home/punnetsSold',
      graphData: {
        data: transformedSalesDetails,
        lineDataKey: 'punnetsSold',
        name: 'Punnets sold',
      },
      element: <CartesianGridGraph />
    },
    {
      path: '/home/pulpSold',
      graphData: {
        data: transformedSalesDetails,
        lineDataKey: 'pulpSold',
        name: 'Pulp sold',
      },
      element: <CartesianGridGraph />
    },
    {
      path: '/home/income',
      element: <IncomeGraph />
    },
    {
      path: '/home/totalDeliveries',
      element: <DeliveriesTotalGraph />
    },
    {
      path: '/home/deliveriesPunnets',
      graphData: {
        data: deliveriesGraphData,
        lineDataKey: 'punnets',
        name: 'Punnets delivered',
      },
      element: <CartesianGridGraph />
    },
    {
      path: '/home/deliveriesPulp',
      graphData: {
        data: deliveriesGraphData,
        lineDataKey: 'pulp',
        name: 'Pulp delivered',
      },
      element: <CartesianGridGraph />
    }
  ];


  return (
    <Routes>
      <Route
        path='/'
        element={<Navigate replace to='/home/temperatureAndHarvest' />}
      />
      <Route
        path='/home'
        element={<Navigate replace to='/home/temperatureAndHarvest' />}
      />
      {routes.map((route, index) => {
        const Element = route.element.type;
        const elementProps = route.graphData ? { graphData: route.graphData } : {};

        return (
          <Route
            key={index}
            path={route.path}
            element={<Element {...elementProps} />}
          />
        );
      })}
    </Routes>

  )
}

export default GraphRoutes
