import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import DailyHarvest from './pages/DailyHarvest/DailyHarvest'
import MarketDeliveries from './pages/MarketDeliveries/MarketDeliveries'
import Sales from './pages/Sales/Sales'
import DateProvider from './context/DateContext'
import DataProvider from './context/DataContext'
import NavigationSidebar from './components/SideBar/NavigationSidebar'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <DateProvider>
        <DataProvider>
          <NavigationSidebar />
          <main>
            <Header />
            <Routes>
              <Route path='/*' element={<Home />} />
              <Route path='/daily-harvest' element={<DailyHarvest />} />
              <Route path='/market-deliveries' element={<MarketDeliveries />} />
              <Route path='/sales' element={<Sales />} />
            </Routes>
          </main>
        </DataProvider>
      </DateProvider>
    </>
  )
}

export default App
