import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import JobCards from './JobCards'
import JobDetails from './JobDetails'
import './job.css'
const Job = () => {
  return (
    <Container className='py-4'>
        <Col className='col-12 col-md-12 col-lg-12 col-sm-12'>
         <Row className='row gap-4 justify-content-center'>
           <Col className='col-12 col-md-5 col-lg-5 col-sm-12'>
         
                <JobCards/>
            
           </Col>
           <Col className='col-12 col-md-5 col-lg-5 col-sm-12'>
             <JobDetails/>
           </Col>
         </Row>
        </Col>
    </Container>
  )
}

export default Job