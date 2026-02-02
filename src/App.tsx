
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Game from './pages/Game'

import Completed from './pages/Completed'
import MainLayout from './layouts/MainLayout'
import GameLayout from './layouts/GameLayout'
import {ROUTES} from  './utils/appConstant'

function App() {
return(
  <>
  <div>
   

   <Routes>

      <Route element={<MainLayout/>}>
       <Route path={ROUTES.completed} element={<Completed/>}/>  
      </Route>

      <Route element={<GameLayout/>}>
          
          <Route path={ROUTES.home} element={<Game/>}/>
      </Route>

   </Routes>


  </div>
  </>
)

  
}

export default App
