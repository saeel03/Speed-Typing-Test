import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'


const GameLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default GameLayout
