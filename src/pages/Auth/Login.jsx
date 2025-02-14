import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './auth.css'
import { LoginSchema } from '../../schemas/AuthSchems'
import Loader from '../../ui/Loader'
import { useNavigate } from 'react-router-dom'
import {useAuth} from '../../context/Auth'
const Login = () => {
    const [loginForm] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const {login} = useAuth()

    const [loader,setLoader] = useState(false)

    const users = [
        {
            id:1,
            email: 'Minal@gmail.com',
            role: 'Employeer'
        },
        {
            id:2,
            email : 'minal2020@gmail.com',
            role : 'JobSeeker'
        }
    ]


 
    
    const Submit = (values)=>{
       setLoader(true)

       setTimeout(()=>{
         let findUser = users.find((u)=> u.email === values.email)
         if(findUser)
         {
             login(findUser)
             navigate('/')
         }else
         {
            alert('Invalid User')
            setLoader(false)
         }
       },1000)
    }
    return (
        <Container className='mainContainer p-2'>
            <Col className='col-12 col-md-5 col-lg-5 col-sm-12'>
                    <Formik initialValues={loginForm} onSubmit={Submit} 
                   
                   enableReinitialize validationSchema={LoginSchema}>
                        {
                            () => (
                                <Row>
                                <Form className='d-flex flex-column gap-3'>
                                    <Col className='col-12 col-md-12 col-lg-12 col-sm-12'>
                                        <Field name="email" type="email" id="email" className='form-control'/>
                                    </Col>

                                    <Col className='col-12 col-md-12 col-lg-12 col-sm-12'>
                                        <Field name="password" type="password" id="password" className='form-control'/>
                                    </Col>

                                    <Col className='col-12 col-md-12 col-lg-12 col-sm-12'>
                                        <Button type='submit'>{loader ? <Loader start={loader} size={"sm"}/>: 'Login'}</Button>
                                    </Col>
                                </Form>
                        </Row>

                            )
                        }
                    </Formik>
            </Col>
        </Container>
    )
}

export default Login