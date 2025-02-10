import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const AlljobSearch = ({setDate,setTitle,setLocation,Date,Title,Location}) => {
  return (
    <Container>
    <Col className='col-12 col-md-12 col-lg-12 col-sm-12'>
        {/* <h4>Filter</h4> */}
     <Row className='row gap-2'>
        <Col className='col-12 col-md-4 col-lg-4 col-sm-12'>
        <div className="d-flex flex-column">
            <h5>Job Title</h5>
          <input value={Title} onChange={(e)=>{
            setTitle(e.target.value)
          }} style={{width:'100%', borderRadius:'5px', border:'none'}} type='text' className='p-3 bg-light shadow' placeholder='Job Title'/>
          </div>
        </Col>
        <Col className='col-12 col-md-4 col-lg-4 col-sm-12'>
        <div className="d-flex flex-column">
            <h5>Location</h5>
          <input value={Location} onChange={(e)=>{
            setLocation(e.target.value)
          }} style={{width:'100%', borderRadius:'5px', border:'none'}} type='text' className='p-3 bg-light shadow' placeholder='Location'/>
          </div>
        </Col>
        <Col className='col-12 col-md-4 col-lg-4 col-sm-12'>
        <div className="d-flex flex-column">
        <h5>Posted on</h5>
          <input style={{width:'100%', borderRadius:'5px', border:'none'}} type='date' className='p-3 bg-light shadow' placeholder='Posted On'/>
          </div>
        </Col>
     </Row>
    </Col>
    </Container>
  )
}

export default AlljobSearch