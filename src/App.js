import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import SelectRole from './pages/Auth/SelectRole'
import AddBasicDetailsPage from './pages/DashboardEmployer/createjobpages/AddBasicDetailsPage'
import OtherDetailsPage from './pages/DashboardEmployer/createjobpages/OtherDetailsPage'
import PayAndBenifitspage from './pages/DashboardEmployer/createjobpages/PayAndBenifitspage'
import Login from './pages/Auth/Login'
import { AuthProvider } from './context/Auth'
import CandidatePage from './pages/DashboardEmployer/candidatespage/CandidatePage'

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/selectrole' element={<SelectRole />} />
          <Route path='/addbasicdetails' element={<AddBasicDetailsPage />} />
          <Route path='/otherDetails' element={<OtherDetailsPage />} />
          <Route path='/payandbenifits' element={<PayAndBenifitspage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/candidate' element={<CandidatePage />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App