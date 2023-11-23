import React from 'react'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const PrivateSection = () => {
  return (
    <div style={{display: "flex"}}>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default PrivateSection