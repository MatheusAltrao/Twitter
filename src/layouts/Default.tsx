import React from 'react'
import { Outlet } from 'react-router-dom'
import News from '../components/News'
import Sidebar from '../components/Sidebar'
import './default.css'


const Default = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>

      <div className='news' >
        <News />
      </div>

    </div>
  )
}

export default Default
