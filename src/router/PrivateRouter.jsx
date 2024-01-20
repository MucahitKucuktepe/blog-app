import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../pages/Login'

const PrivateRouter = () => {
  const user= false
  return  user ? <Outlet /> : <Login />
}

export default PrivateRouter