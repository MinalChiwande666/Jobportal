import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import JobCards from './JobCards'
import JobDetails from './JobDetails'
import './job.css'
import Header from '../navbar/Header'
import Search from '../Search/Search'
import { useSelector } from 'react-redux'
const Job = () => {
  const data = useSelector((d) => { return d.job.jobs })
  const [JobData, setJobdata] = useState(null)
  return (
    <>
      <Header />
      <Search />
      <Container className='py-4'>
        <Col className='col-12 col-md-12 col-lg-12 col-sm-12'>
          <Row className='row gap-4 justify-content-center'>
            <Col className='col-12 col-md-5 col-lg-5 col-sm-12'>
              <div className='d-flex flex-column gap-3'>
                {
                  data.map((item, index) => (
                    <JobCards setdata={setJobdata} key={index} data={item} />
                  ))
                }</div>

            </Col>
            <Col className='col-12 col-md-5 col-lg-5 col-sm-12'>
              {
                JobData === null ? null :
                  <JobDetails data={JobData} />
              }
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  )
}

export default Job