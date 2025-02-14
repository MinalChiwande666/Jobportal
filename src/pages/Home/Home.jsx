import React, { useEffect } from 'react'
// import Header from '../../components/navbar/Header'
// import Search from '../../components/Search/Search'
import Job from '../../components/JobCards/Job'
import MyApp from '../MyApp/MyApp'
import DashboardEmployer from '../DashboardEmployer/DashboardEmployer'
import { useAuth } from '../../context/Auth'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const {user} = useAuth()
  const role = user?.role
  const navigate = useNavigate()
  useEffect(()=>{
    if(user === null)
    {
      navigate('/login')
    }
  },[user])
  return (
    <>
  
    <MyApp>
      {
        role === "Employeer"?<DashboardEmployer/>: <Job/>
      }
    </MyApp>
    </>
  )
}

export default Home