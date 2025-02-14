import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, Table,Button } from 'react-bootstrap'
import { generatePdf } from '../../../utils/handlepdfdownload'
import { EyeFill } from 'react-bootstrap-icons'
import ModalsUi from '../../../ui/ModalsUi'
import ViewJob from './ViewJob'
const Candidates = () => {
    const [viewJob,setViewJob] = useState(false)
    const candidates = useSelector((state)=>{return state.applyjob.candidates})
    const jobs = useSelector((state)=>{return state.job.jobs})
    const [JobId,setJobId] = useState(null)
    const handleDownLoadCv = (pdfUrl)=>{
       generatePdf(pdfUrl)
  
    }
  return (
    <Container>
       <Table borderless>
         <thead>
            <tr>
                <th>
                    Job Id
                </th>
                <th>
                    Candidate
                </th>
                <th>
                    Experience
                </th>
                <th>
                    Resume
                </th>
                <th>
                    View Job
                </th>
            </tr>
         </thead>
         <tbody>
            {
                candidates.map((item,index)=>(
                    <tr key={index}>
                        <td>{item?.jid}</td>
                        <td>{item?.username}</td>
                        <td>{item?.experience}</td>
                        <td><Button onClick={()=>handleDownLoadCv(item?.resumeFile)}>Download</Button></td>
                        <td><Button onClick={()=>{setViewJob((prev)=>!prev);setJobId(item?.jid)}}><EyeFill/></Button></td>
                    </tr>

                ))
            }
         </tbody>
       </Table>

       <ModalsUi title={"View Job"} size={"md"} open={viewJob} close={setViewJob}>
          <ViewJob  id={JobId} jobdata={jobs}/>
       </ModalsUi>
    </Container>
  )
}

export default Candidates