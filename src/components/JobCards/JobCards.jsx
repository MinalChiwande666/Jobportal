import React from 'react'
import { SendFill } from 'react-bootstrap-icons'
import {formatDistanceToNow} from 'date-fns'
const JobCards = ({data,setdata}) => {
   
    return (
        <div onClick={()=>{setdata(data)}} className='d-flex flex-column gap-2'>
          
                    <div className='d-flex flex-column border rounded p-3 gap-2'>
                        <div>
                            <h4 className='fw-bold'>{data?.job_title}</h4>
                        </div>
                        <div>
                            {/* <span className='text-secondary'>{data?.company_name}</span><br />
                            <span className='text-secondary'>{data?.company_location}</span> */}
                             <span className='text-secondary'>My Company</span><br />
                             <span className='text-secondary'>Nagpur Maharashtra</span>
                        </div>
                        <div className='d-flex flex-column gap-2 align-items-start'>
                            <div className='d-flex gap-2'><span style={{ background: 'lightgreen' }} className='p-2 fw-bold text-success rounded'>{data.salary.join('-')}</span> <span style={{ background: 'lightgreen' }} className='p-2 fw-bold text-success rounded'>{data?.job_type}</span></div>
                            <div style={{ background: '#eee' }} className='p-2 rounded d-flex align-items-center text-secondary'><span className='fw-bold'>{data?.schedules}</span></div>
                        </div>

                        <div className='d-flex align-items-center gap-2'>
                            <SendFill className='text-primary'/><span>Easy Apply</span>
                        </div>
                        <div className='d-flex align-items-center gap-2'>

                            <li className='text-secondary'>{data?.job_title}  {data?.experience_levels[0]}</li>

                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <span className='text-secondary'>Active {formatDistanceToNow(data?.posted_on,{addSuffix:true})}</span>
                        </div>
                    </div>
             
        </div>
    )
}

export default JobCards