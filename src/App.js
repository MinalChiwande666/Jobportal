import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import SelectRole from './pages/Auth/SelectRole'
import AddBasicDetailsPage from './pages/DashboardEmployer/createjobpages/AddBasicDetailsPage'
import OtherDetailsPage from './pages/DashboardEmployer/createjobpages/OtherDetailsPage'
import PayAndBenifitspage from './pages/DashboardEmployer/createjobpages/PayAndBenifitspage'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/selectrole' element={<SelectRole/>}/>
      <Route path='/addbasicdetails' element={<AddBasicDetailsPage/>}/>
      <Route path='/otherDetails' element={<OtherDetailsPage/>}/>
      <Route path='/payandbenifits' element={<PayAndBenifitspage/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App