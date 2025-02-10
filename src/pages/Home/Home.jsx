import React from 'react'
// import Header from '../../components/navbar/Header'
// import Search from '../../components/Search/Search'
// import Job from '../../components/JobCards/Job'
import MyApp from '../MyApp/MyApp'
import DashboardEmployer from '../DashboardEmployer/DashboardEmployer'

const Home = () => {
  const role = "Employer"
  return (
    <>
    {/* <Header/>
    <Search/>
    <Job/> */}
    <MyApp>
      {
        role === "Employer"?<DashboardEmployer/>: <h1>Seeker</h1>
      }
    </MyApp>
    </>
  )
}

export default Home