import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Check2Circle, PenFill, TrashFill } from 'react-bootstrap-icons'
import {formatDistanceToNow} from 'date-fns'
import ModalsUi from '../../ui/ModalsUi'
import EditForm from './editform/EditForm'

const AllJobsTable = ({ jobs, Title,setTitle,Location }) => {
     const [OpenEdit,setOpenEdit] = useState(false)
     const [Id,setId] = useState(null)
    return (
        <div>
            <Table borderless className='shadow rounded'>
                <thead>
                    <tr>
                        <th className='bg-light p-3'>Job Title</th>
                        <th className='bg-light p-3'>Job Type</th>
                        <th className='bg-light p-3'>Date Posted</th>
                        <th className='bg-light p-3'>Location Type  </th>
                        <th className='bg-light p-3'>Job Status</th>
                        <th className='bg-light p-3'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs.filter((j)=>{
                            const titleMatch = Title.trim() ? j.job_title?.toLowerCase().includes(Title.toLowerCase().trim()) : true;
                            const locationMatch = Location.trim() ? j.job_location_type?.toLowerCase().includes(Location.toLowerCase().trim()) : true;

                            return titleMatch && locationMatch; // Ensures correct filtering
                        }).map((item, index) => (
                            <tr key={index}>
                                <td>{item?.job_title}</td>
                                <td>{item?.job_type}</td>
                                <td>{formatDistanceToNow(item?.posted_on,{addSuffix:true})}</td>
                                <td>{item?.job_location_type}</td>
                                <td>{item?.status}</td>
                                <td className='d-flex gap-2 align-items-center'>
                                  <Button onClick={()=>{
                                    setId(item?.id)
                                    setOpenEdit(!OpenEdit)}} variant='success'><PenFill/></Button>
                                  <Button variant='danger'><TrashFill/></Button>
                                  <Button><Check2Circle/></Button>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </Table>
            <ModalsUi size={"md"} title={"Edit Other Information"} open={OpenEdit} close={setOpenEdit}>
                <EditForm id={Id}/> 
            </ModalsUi>
        </div>
    )
}

export default AllJobsTable