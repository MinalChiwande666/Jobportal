import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { seteditDecsription } from '../../../redux/reducer/JobReducer'

const EditForm = ({id}) => {
    const dispatch = useDispatch()
    const [desc,setDecsription] = useState('')
 

  return (
    <div className='d-flex flex-column gap-4'>
    <textarea onChange={(e)=>{setDecsription(e.target.value)}} value={desc} placeholder='Description' className='form-control'></textarea>
    <Button onClick={()=>{
        dispatch(seteditDecsription({id:id, desc:desc}))
      
    }} variant='primary' className='p-2'>Edit Description</Button>
    </div>
  )
}

export default EditForm