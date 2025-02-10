import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../../components/navbar/Header'

const SelectRole = () => {
  return (
    <>
    <Header/>
    <Container style={{minHeight:'100vh', justifyContent:'center', display:'flex',alignItems:'center'}}>
        <Col className='col-12 col-md-12 col-lg-12 col-sm-12'>
          <Row className='row gap-3 justify-content-center'>
             <Col style={{cursor:"pointer"}} className='col-12 border rounded border-primary col-md-5 col-lg-5 col-sm-12'>
              <img className='img-fluid' src='/pngegg.png' alt=''/>
              <h1 className='text-center text-primary mt-3'>Job Posting</h1>
             </Col>
             <Col style={{cursor:"pointer"}} className='col-12 border rounded border-primary col-md-5 col-lg-5 col-sm-12'>
              <img className='img-fluid' src='/pngwing.com.png' alt=''/>
              <h1 className='text-center text-primary'>Job Seeker</h1>
             </Col>
          </Row>
        </Col>
    </Container>
    </>
  )
}

export default SelectRole