import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import AllJobsTable from './AllJobsTable'
import AlljobSearch from './AlljobSearch'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AllJobs = () => {
  const jobs = useSelector((state)=>{return state.job.jobs})
  const navigate = useNavigate()
  const [JobTitle,setJobTitle] = useState('')
  const [Location,setLocation] = useState('')
  // const [PostedDate,setPostedDate] = useState()
  return (
    <Container className='d-flex p-3 flex-column gap-4'>
         <div className='d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center gap-3'>
                <span className='fw-bold'>All Jobs</span>
                <div><Button variant='dark'>All Jobs</Button></div>
            </div>
            <div>
                <Button onClick={()=>{navigate('/addbasicdetails')}}>Post Job</Button>
            </div>
         </div>
         <AlljobSearch setTitle={setJobTitle} Title={JobTitle} Location={Location} setLocation={setLocation}/>
         <AllJobsTable Location={Location} Title={JobTitle} setTitle={setJobTitle} jobs={jobs}/>
    </Container>
  )
}

export default AllJobs