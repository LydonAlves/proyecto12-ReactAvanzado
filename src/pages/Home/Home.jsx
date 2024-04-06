import { Outlet } from 'react-router-dom'
import GraphRoutes from '../../components/GraphRoutes/GraphRoutes'
import './Home.css'

const Home = () => {
  return (
    <section className='homeSection'>
      <div className='homeDiv'>
        <GraphRoutes />
        <Outlet />
      </div>
    </section>
  )
}

export default Home
