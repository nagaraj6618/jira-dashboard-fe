import React from 'react'
import {Routes,Route} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Dashboard from '../Components/Dashboard/Dashboard';
import PublicRoute from './PublicRoute';
import Login from '../Components/Login/Login';
import PrivateOTPRoute from './PrivateOTPRoute';
import OTP from '../Components/Login/OTP';
import {Navigate} from "react-router-dom"

const AppRouter = () => {
  return (
    <Routes>

      <Route element={<PrivateRoute/>}>
         <Route path="/home" element={<Dashboard/>}/>
      </Route>
      <Route element={<PublicRoute/>}>
         <Route path='/login' element={<Login/>}/>
      </Route>
      <Route element={<PrivateOTPRoute/>}>
         <Route path='/otp' element={<OTP/>}/>
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default AppRouter