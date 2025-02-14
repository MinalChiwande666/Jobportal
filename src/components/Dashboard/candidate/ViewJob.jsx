import React, { useEffect, useState } from 'react'
import {formatDistanceToNow} from 'date-fns'
const ViewJob = ({id,jobdata}) => {
    const [JobData,setJobData] = useState(null)


    useEffect(()=>{
      const findJob = jobdata.find((job)=> job.id === id)
      setJobData(findJob)
    },[id,jobdata])
  return (
    <div className='d-flex flex-column gap-3'>
      <h3>{JobData?.job_title}</h3>
      <div className='d-flex align-items-center gap-2'>
        {
          JobData?.job_type.map((item,index)=>(
            <span style={{background:'lightgreen'}} className='text-success p-2 rounded'>{item}</span>
          ))
        }
      </div>
      <div className='d-flex align-items-center gap-2'>
        {
          JobData?.salary.map((item,index)=>(
            <span style={{background:'#eee'}} className='text-secondary p-2 rounded'>{item}</span>
          ))
        }
      </div>

      <div className='d-flex align-items-center gap-2'>
        {
          JobData?.experience_levels.map((item,index)=>(
            <span className='text-white bg-primary p-2 rounded'>{item}</span>
          ))
        }
      </div>

      <div className='d-flex align-items-center gap-2'>
         {/* <span>{formatDistanceToNow(JobData?.posted_on,{addSuffix:true})}</span> */}
      </div>
    </div>
  )
}

export default ViewJob