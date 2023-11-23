import React from 'react'
import { isLoggedIn } from '../../authentication'
import { Navigate } from 'react-router-dom'
import PrivateSection from './PrivateSection'

export const PrivateRoute = () => {
  return (
    isLoggedIn() ? <PrivateSection/> : <Navigate to="/"/>
  )
}