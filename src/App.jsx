import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/landing/Navbar'
import Footer from './components/landing/Footer'
import HeroSection from './components/landing/HeroSection'
import About from './components/landing/About'
import MobileAppSection from './components/landing/MobileAppSection'
import Contact from './components/landing/Contact'
import Login from './components/authentication/Login'
import Signup from './components/authentication/Signup'
import ForgotPassword from './components/authentication/ForgotPassword'
import AdminDashboard from './adminDashboard/AdminDashboard'
import AdminHome from './adminDashboard/AdminHome'
import AllUsers from './adminDashboard/AllUsers'
import AdminOverview from './adminDashboard/AdminOverview'
import EmployeeOverview from './adminDashboard/EmployeeOverview'
import Billing from './adminDashboard/Billing'
import Profile from './components/Profile'
import Settings from './components/Settings'


function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<HeroSection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgot' element={<ForgotPassword />} />
        </Route>

        <Route path='/admin' element={<AdminDashboard />}>
          <Route index element={<AdminHome/>} />
          <Route path='users' element={<AllUsers/>} />
          <Route path='subAdmin' element={<AdminOverview/>} />
          <Route path='employee' element={<EmployeeOverview/>} /> 
          <Route path='billing' element={<Billing/>} />
        </Route>

        <Route path='/profile' element={<Profile/>} />
        <Route path='/settings' element={<Settings/>} />
      </Routes>




    </>
  )
}

export default App
