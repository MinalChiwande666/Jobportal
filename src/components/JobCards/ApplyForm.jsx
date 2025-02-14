import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

import { useDispatch } from 'react-redux';
import { setApply } from '../../redux/reducer/ApplyReducer';

const ApplyForm = ({ id, setopen, user }) => {
    const [pdfUrl, setPdfUrl] = useState(null)
    const [experience,setExperience] = useState('')
    const dispatch = useDispatch()

    const handlePdf = (event) => {
        const pdfFIle = event.target.files[0]
        if (pdfFIle) {
            const url = URL.createObjectURL(pdfFIle);
            setPdfUrl(url);
        }
    }

    const handleApply = () => {
        const applyobj = {
            jid: id,
            username: user?.email,
            experience: experience,
            resumeFile: pdfUrl
        }
        dispatch(setApply(applyobj))
    }

    return (
        <div className='d-flex flex-column gap-3'>
            <input value={experience} onChange={(e)=>{
                setExperience(e.target?.value)
            }} type='text' className='form-control p-2 rounded' placeholder='Experience' />
            <input onChange={handlePdf} type='file' accept='application/pdf' />
            <Button onClick={handleApply} variant='primary'>Apply Job</Button>
        </div>
    )
}

export default ApplyForm