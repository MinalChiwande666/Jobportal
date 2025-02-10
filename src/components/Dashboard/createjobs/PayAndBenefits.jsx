import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Benifits from './Benifits'
import Loader from '../../../ui/Loader'
import { useDispatch } from 'react-redux'
import { setPayAndBenifits } from '../../../redux/reducer/JobReducer'
import { useNavigate } from 'react-router-dom'
const PayAndBenefits = () => {
    const [rate, setRate] = useState(0)
    const [salaryType, setSalaryType] = useState('Starting Amount')
    const [benefits, setBenifits] = useState([])
    const [basicPay, setBasicPay] = useState('0')
    const [basicPay2, setBasicPay2] = useState('0')
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const show_salary_by = [
        {
            id: 1,
            name: 'Starting Amount'
        },
        {
            id: 2,
            name: "Range"
        }
    ]

    const benifit = [
        {
            id: 1,
            name: 'OverTime Pay'
        },
        {
            id: 2,
            name: 'Performance Bonus'
        },
        {
            id: 3,
            name: 'Bonus'
        },
        {
            id: 4,
            name: 'Paid Leaves'
        }
    ]


    const handleSubmitPay = () => {
        setLoader(true)
        const addslary = salaryType === "Starting Amount"? [basicPay]: [basicPay,basicPay2]
        setTimeout(()=>{
          setLoader(false)
          dispatch(setPayAndBenifits({salary:addslary,benifits:benefits}))
          navigate('/')
        },1000)
    }


    return (
        <Container className='d-flex p-3 flex-column gap-3'>
            <div className='bg-light p-4 text-center rounded'>
                <h1>Add Job</h1>
            </div>
            <Col className='col-12 col-md-12 col-lg-12 col-sm-12'>
                <Row className='row gap-2'>
                    <h2>Pay</h2>
                    <Col className='col-12 col-md-3 col-lg-3 col-sm-12'>
                        <h4>Show Pay By</h4>
                        <select onChange={(e) => {
                            setSalaryType(e.target?.value)
                        }} className='form-control'>
                            <option disabled>Select Option</option>
                            {
                                show_salary_by.map((item, index) => (
                                    <option>{item?.name}</option>
                                ))
                            }
                        </select>
                    </Col>

                    <Col className='col-12 col-md-3 col-lg-3 col-sm-12'>
                        <h4>Amount</h4>
                        {
                            salaryType === "Starting Amount" ?
                                <input value={rate > 0 ? parseInt(basicPay) * rate : basicPay} onChange={(e) => {
                                    setBasicPay(e.target?.value)
                                }} className='p-2 border border-primary form-control rounded' /> :
                                <div className='d-flex align-items-center gap-2'>
                                    <input value={basicPay} onChange={(e) => { setBasicPay(e.target.value) }} type='text' className='p-2 border border-primary form-control rounded' />
                                    <input value={basicPay2} onChange={(e) => { setBasicPay2(e.target.value) }} type='text' className='p-2 border border-primary form-control rounded' />
                                </div>
                        }
                    </Col>

                    <Col className='col-12 col-md-2 col-lg-2 col-sm-12'>
                        {
                            salaryType === "Starting Amount" ?
                                <>
                                    <h4>Rate</h4>
                                    <input value={rate}
                                        onChange={(e) => {
                                            setRate(e.target.value)
                                        }} type='number' className='p-2 border border-primary form-control rounded' /></> :
                                null

                        }
                    </Col>
                </Row>
            </Col>
            <Benifits data={benifit} Benifit={benefits} setBenifits={setBenifits} />

            <div className='d-flex justify-content-end'>
                <Button onClick={handleSubmitPay} variant='primary'>{loader ? <Loader size={"sm"} start={loader} /> : "Submit"}</Button>
            </div>
        </Container>
    )
}

export default PayAndBenefits