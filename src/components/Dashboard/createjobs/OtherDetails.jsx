import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from '../../../ui/Loader'
import { setOtherDetails } from '../../../redux/reducer/JobReducer'
const OtherDetails = () => {
  const jobData = useSelector((state)=>{return state.job.job}) 
  console.log(jobData, 'job data ')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [job_types, setJobTypes] = useState([])
  const [experience, setExperience] = useState([])
  const [schedule, setSchedule] = useState([])
  const [loader, setLoader] = useState(false)

  const job_type_tabs = [
    {
      id: 1,
      name: 'Full Time'
    },
    {
      id: 2,
      name: 'Part Time'
    },
    {
      id: 3,
      name: 'Contract'
    },
    {
      id: 4,
      name: "internship"
    }
  ]

  const experience_level = [
    {
      id: 1,
      name: 'Fresher'
    },
    {
      id: 2,
      name: '1 Year'
    },
    {
      id: 3,
      name: '2 Year'
    }
  ]

  const schedule_job = [
    {
      id: 1,
      name: 'Monday-Saturday'
    },
    {
      id: 2,
      name: '8 Hours'
    },
    {
      id: 3,
      name: 'Monday-Friday'
    },
    {
      id: 4,
      name: 'Weekend Off'
    },
    {
      id: 5,
      name: '4 Hours'
    }
  ]


  const handleJobDetails = ()=>{
    setLoader(true)

    setTimeout(()=>{
     setLoader(false)
     dispatch(setOtherDetails({job_type:job_types,experience_levels:experience,schedules:schedule}))
     console.log(jobData, 'job Data')
     navigate('/payandbenifits')
    },1000)
  }
  return (
    <Container className="p-2 d-flex flex-column gap-3">
      <div className="bg-light p-4 rounded text-center">
        <h1>Add Jobs</h1>
      </div>
      <div className='d-flex flex-column  gap-3'>

        {/* Job Type */}
        <div className='gap-2'>
          <h4>Job Type*</h4>
          <div className='d-flex align-items-center gap-3'>
            {
              job_type_tabs.map((item, index) => (
                <Button onClick={() => {
                  if (job_types.includes(item?.name)) {
                    setJobTypes((j) =>
                      j.filter((t) => t !== item?.name)
                    )
                  } else {
                    setJobTypes((prev) => [...prev, item?.name])
                  }
                }} variant={job_types.includes(item?.name) ? 'dark' : 'outline-dark'} key={index}>{item?.name}</Button>
              ))
            }
          </div>
        </div>

        {/* Experience  */}
        <div className='gap-2'>
          <h4>Experience Level*</h4>
          <div className='d-flex align-items-center gap-3'>
            {
              experience_level.map((item, index) => (
                <Button onClick={() => {
                  if (experience.includes(item?.name)) {
                    setExperience((j) =>
                      j.filter((t) => t !== item?.name)
                    )
                  } else {
                    setExperience((prev) => [...prev, item?.name])
                  }
                }} variant={experience.includes(item?.name) ? 'dark' : 'outline-dark'} key={index}>{item?.name}</Button>
              ))
            }
          </div>
        </div>

        {/* Schedule */}
        <div className='gap-2'>
          <h4>Schedule*</h4>
          <div className='d-flex align-items-center gap-3'>
            {
              schedule_job.map((item, index) => (
                <Button onClick={() => {
                  if (schedule.includes(item?.name)) {
                    setSchedule((j) =>
                      j.filter((t) => t !== item?.name)
                    )
                  } else {
                    setSchedule((prev) => [...prev, item?.name])
                  }
                }} variant={schedule.includes(item?.name) ? 'dark' : 'outline-dark'} key={index}>{item?.name}</Button>
              ))
            }
          </div>
        </div>


      </div>
      <div className='d-flex align-items-center justify-content-end'>
        <Button onClick={handleJobDetails} variant='primary'>{loader? <Loader size={"sm"} start={loader}/>:"Continue" }</Button>
      </div>
    </Container>
  )
}

export default OtherDetails