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
import EmployeeOverview from './adminDashboard/EmployeeOverview'
import Billing from './adminDashboard/Billing'
import Profile from './adminDashboard/Profile'
import Settings from './adminDashboard/Settings'
import SubAdminOverview from './adminDashboard/SubAdminOverview'
import FormManagement from './adminDashboard/FormManagement'
import SubAdminDashboard from './subadminDashboard/SubAdminDashboard'
import SubAdminHome from './subadminDashboard/SubAdminHome'
import RequestFromAdmin from './subadminDashboard/RequestFromAdmin'
import TeamsManagement from './subadminDashboard/TeamsManagement'
import EmployeeWorkload from './subadminDashboard/EmployeeWorkload'
import AssignForm from './subadminDashboard/AssignForm'
import RequestTracking from './subadminDashboard/RequestTracking'
import Communication from './subadminDashboard/Communication'
import EmployeeDashboard from './employeeDashboard/EmployeeDashboard'
import EmployeeHome from './employeeDashboard/EmployeeHome'
import RequestInbox from './employeeDashboard/RequestInbox'
import PendingRequests from './employeeDashboard/PendingRequests'
import CompletedRequests from './employeeDashboard/CompletedRequests'
import UserDashboard from './userDashboard/UserDashboard'
import UserHome from './userDashboard/UserHome'
import UserForm from './userDashboard/UserForm'
import UserPending from './userDashboard/UserPending'
import UserHistory from './userDashboard/UserHistory'
import UserCommunication from './userDashboard/UserCommunication'


function App() {
  return (
    <>

      <Routes>
        {/* Landing */}
        <Route path='/' element={<Navbar />}>
          <Route index element={<HeroSection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgot' element={<ForgotPassword />} />
        </Route>

        {/* Admin */}
        <Route path='/admin' element={<AdminDashboard />}>
          <Route index element={<AdminHome />} />
          <Route path='users' element={<AllUsers />} />
          <Route path='subAdmin' element={<SubAdminOverview />} />
          <Route path='employee' element={<EmployeeOverview />} />
          <Route path='billing' element={<Billing />} />
          <Route path='formManagement' element={<FormManagement />} />
          <Route path='profile' element={<Profile />} />
          <Route path='settings' element={<Settings />} />
        </Route>

        {/* Sub Admin */}
        <Route path='/subAdmin' element={<SubAdminDashboard/>}>
          <Route index element={<SubAdminHome />} />
          <Route path='requests' element={<RequestFromAdmin />} />
          <Route path='teams' element={<TeamsManagement />} />
          <Route path='workload' element={<EmployeeWorkload />} />
          <Route path='assign-form' element={<AssignForm />} />
          <Route path='request-tracking' element={<RequestTracking />} />
          <Route path='communication' element={<Communication />} />
        </Route>
        
        {/* Employee */}
        <Route path='/emp' element={<EmployeeDashboard />}>
          <Route index element={<EmployeeHome />} />
          <Route path='requests' element={<RequestInbox />} />
          <Route path='pending' element={<PendingRequests />} />
          <Route path='completed' element={<CompletedRequests />} />
          <Route path='communication' element={<Communication />} />
        </Route>

        {/* User */}
        <Route path='/user' element={<UserDashboard />}>
          <Route index element={<UserHome />} />
          <Route path='form' element={<UserForm />} />
          <Route path='pending' element={<UserPending />} />
          <Route path='history' element={<UserHistory />} />
          <Route path='communication' element={<UserCommunication />} />
        </Route>

      </Routes>

    </>
  )
}

export default App
