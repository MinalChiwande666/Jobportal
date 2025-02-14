import React, { useState } from 'react'
import './job.css'
import { Button } from 'react-bootstrap'
import ModalUi from '../../ui/ModalsUi'
import {useAuth} from '../../context/Auth'
import { BoxArrowInUpRight, BriefcaseFill, CreditCard2BackFill, GeoAltFill } from 'react-bootstrap-icons'
import ApplyForm from './ApplyForm'
const JobHeader = ({ data }) => {
  const [open,setOpen] = useState(false)
  const {user} = useAuth()
  return (
    <div className='d-flex flex-column border border-bottom align-items-start gap-2 p-3'>
      <h3>{data?.job_title}</h3>
      <span className='text-secondary'>Nagpur, Maharashtra</span>
      <Button onClick={()=>{setOpen((prev)=>!prev)}} variant='primary' className='p-2 d-flex gap-2 align-items-center'>Apply now <BoxArrowInUpRight /></Button>
      <ModalUi title={"Apply Form"} size={"md"} open={open} close={setOpen}>
        <ApplyForm id={data?.id} setopen={setOpen} user={user}/>
      </ModalUi>
    </div>
  )
}

const JobLocation = ({data})=>{
  return(
    <div className='p-3 d-flex flex-column gap-3 border-bottom'>
        <h3>Location</h3>
        <div className='d-flex align-items-center gap-2'>
           <GeoAltFill className='text-secondary'/>
           <span className='text-secondary'>Nagpur, Maharashtra</span>
        </div>
    </div>
  )
}

const JobDescription = ({data})=>{
  return(
   <div className='d-flex p-3 flex-column gap-3'>
     <h3>Description</h3>
     <span>{data.description}</span>
   </div>
  )
}
const JobDetails = ({ data }) => {

  return (
    <div className='d-flex flex-column rounded border'>
      <JobHeader data={data} />

      <div className='d-flex p-3 border-bottom flex-column gap-3'>
        <h2>Job Details</h2>
        <div className='d-flex flex-column gap-3'>
          <div className='d-flex align-items-center gap-4'>
            <CreditCard2BackFill />
            <div className='d-flex gap-2 flex-column'>
              <span className='fw-bold'>Pay</span>
              <span style={{ background: 'lightgreen' }} className='text-success p-2 rounded'>{data?.salary.join('-')}</span>
            </div>
          </div>

          <div className='d-flex align-items-center gap-4'>
            <BriefcaseFill />
            <div className='d-flex gap-2 flex-column'>
              <span className='fw-bold'>job type</span>
              {
                data.job_type.map((item,index)=>(
                  <span key={index} className='text-dark p-2 bg-light rounded'>{item}</span>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <JobLocation/>

      <JobDescription data={data}/>

      <div className='p-3'>
         <span className='text-secondary d-flex align-items-center gap-2'>Work Location : {data?.job_location_type}</span>
      </div>
    </div>
  )
}

export default JobDetails