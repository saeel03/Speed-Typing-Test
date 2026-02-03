
import { Outlet } from 'react-router-dom'
import HeaderMain from '../components/header/HeaderMain'

const MainLayout = () => {
  return (
    <div>
        <HeaderMain/>
        <Outlet/>
      
    </div>
  )
}

export default MainLayout
