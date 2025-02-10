import React from 'react'
import { SendFill } from 'react-bootstrap-icons'

const JobCards = () => {
    const jobsData = [
        {
            id: 1,
            job_title: 'Customer Support Associate',
            company_name: 'Solar Topps',
            company_location: "Gautam Buddha Nagar, Uttar Pradesh",
            salary_range: ['20,000', '35,500'],
            job_type: ['Full Time'],
            job_days: ['Monday', 'Friday'],
            experience: ['1 year'],
            job: 'Customer Support',
            Active: '2 days ago'
        },
        {
            id: 2,
            job_title: 'Customer Support Associate',
            company_name: 'Solar Topps',
            company_location: "Gautam Buddha Nagar, Uttar Pradesh",
            salary_range: ['20,000', '35,500'],
            job_type: ['Full Time'],
            job_days: ['Monday', 'Friday'],
            experience: ['1 year'],
            job: 'Customer Support',
            Active: '2 days ago'
        },
        {
            id: 3,
            job_title: 'Customer Support Associate',
            company_name: 'Solar Topps',
            company_location: "Gautam Buddha Nagar, Uttar Pradesh",
            salary_range: ['20,000', '35,500'],
            job_type: ['Full Time'],
            job_days: ['Monday', 'Friday'],
            experience: ['1 year'],
            job: 'Customer Support',
            Active: '2 days ago'
        },

    ]
    return (
        <div className='d-flex flex-column gap-2'>
            {
                jobsData.map((item, index) => (
                    <div className='d-flex flex-column border rounded p-3 gap-2'>
                        <div>
                            <h4 className='fw-bold'>{item?.job_title}</h4>
                        </div>
                        <div>
                            <span className='text-secondary'>{item?.company_name}</span><br />
                            <span className='text-secondary'>{item?.company_location}</span>
                        </div>
                        <div className='d-flex flex-column gap-2 align-items-start'>
                            <div className='d-flex gap-2'><span style={{ background: 'lightgreen' }} className='p-2 fw-bold text-success rounded'>{item.salary_range.join('-')}</span> <span style={{ background: 'lightgreen' }} className='p-2 fw-bold text-success rounded'>{item?.job_type}</span></div>
                            <div style={{ background: '#eee' }} className='p-2 rounded d-flex align-items-center text-secondary'><span className='fw-bold'>{item?.job_days.join(' to ')}</span></div>
                        </div>

                        {/* <div className='d-flex align-items-center gap-2'>
                            <SendFill className='text-primary'/><span>Easy Apply</span>
                        </div> */}
                        <div className='d-flex align-items-center gap-2'>

                            <li className='text-secondary'>{item?.job}  {item?.experience[0]}</li>

                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <span className='text-secondary'>Active {item?.Active}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default JobCards