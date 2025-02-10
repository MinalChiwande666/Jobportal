// import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
// import { SearchHeartFill } from 'react-bootstrap-icons'
import './search.css'

const Search = () => {
    return (
        <Container className='searchContainer border-bottom'>
            <div className='d-flex flex-column gap-5'>
                <Col className='col-12 mx-auto col-sm-12 col-md-9 col-lg-9 '>
                    <Row className='row mx-auto p-2 justify-content-center rounded shadow border border-primary'>

                        <Col className='col-12 p-1  border-end-0  col-sm-12 col-md-5 col-lg-5'>
                            <div className='d-flex'>

                                <input style={{ width: '100%', border: 'none', outline: 'none' }} placeholder='Search Job' className='p-2' type='text' />
                            </div>
                        </Col>
                        <Col className='col-12 p-1 border-start  col-sm-12 col-md-5 col-lg-5'>
                            <div className='d-flex gap-2'>

                                <input style={{ width: '100%', border: 'none', outline: 'none' }} placeholder='Search By Location' className='p-2' type='text' />
                            </div>
                        </Col>
                        <Col className='col-12 my-auto col-md-2 col-lg-2 col-sm-12'>
                            <Button style={{ width: '100%' }}>
                                <span className='fw-bold'>Find Job</span>
                            </Button>
                        </Col>

                    </Row>
                </Col>
                <div className='text-center'>
                    <span className='text-light fs-3 fw-bold'>search for jobs....</span>
                </div>
                <div>
                    <Col className='col-12 text-center col-md-12 col-lg-12 col-sm-12'>
                        <Row className='row '>
                            <Col className='col-12 col-md-6 col-lg-6 col-sm-12'>
                                <h5>Jobs Available</h5>
                            </Col>
                            <Col className='col-12 col-md-6 col-lg-6 col-sm-12'>
                                <h5>Recently Search </h5>
                            </Col>
                        </Row>
                    </Col>
                </div>

            </div>
        </Container>
    )
}

export default Search