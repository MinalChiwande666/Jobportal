import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BasicDetailsSchema } from '../../../schemas/JobSchema';
import { useDispatch } from 'react-redux';
import Loader from '../../../ui/Loader';
import { setBasicDetails } from '../../../redux/reducer/JobReducer';
import { useNavigate } from 'react-router-dom';

const AddBasicDetails = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loader,setLoader] = useState(false)
  const [basicDetails] = useState({
    job_title: '',
    number_of_vacancy: '',  
    job_location_type: ''
  });

  const noVacancy = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    number_of_vacancy: (index + 1).toString()  
  }));

  const jobLocationType = [
    {
      id: 1,
      name: 'Remote'
    },
    {
      id: 2,
      name: 'OnSite'
    },
    {
      id: 3,
      name: "Hybrid"
    }
  ]

  return (
    <Container className="p-2 d-flex flex-column gap-3">
      <div className="bg-light p-4 rounded text-center">
        <h1>Add Jobs</h1>
      </div>
      <Formik
        initialValues={basicDetails}
        onSubmit={(values) => {
          setLoader(true)
          setTimeout(()=>{
            setLoader(false)
            dispatch(setBasicDetails(values))
            navigate('/otherDetails')
          },1000)
        }}
        validationSchema={BasicDetailsSchema}
      >
        {({ handleSubmit, values }) => (
          <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
            <div>
              <Field name="job_title" id="job_title" placeholder="Job Title" className="form-control" />
              <ErrorMessage className='text-danger' component={"div"} name='job_title' id='job_title' />
            </div>

            <div>
              <Field name="number_of_vacancy" id="number_of_vacancy" as="select" className="form-control">
                <option value="" disabled>Select Number of Vacancies</option>
                {noVacancy.map((item) => (
                  <option key={item.id} value={item.number_of_vacancy}>
                    {item.number_of_vacancy}
                  </option>
                ))}
              </Field>

              <ErrorMessage className='text-danger' component={"div"} name='number_of_vacancy' id='number_of_vacancy' />
            </div>

            <div>
              <Field name="job_location_type" id="job_location_type" as="select" className="form-control">
                <option value="" disabled>Select Job Location Type</option>
                {
                  jobLocationType.map((item, index) => (
                    <option key={index} value={item?.name}>{item?.name}</option>
                  ))
                }
              </Field>
              <ErrorMessage className='text-danger' component={"div"} name='job_location_type' id='job_location_type' />
            </div>

            <div className='d-flex align-items-center justify-content-end'>
              <button type="submit" className="btn btn-primary">{
                loader ? <Loader size={"sm"} start={loader}/>:'Submit'
                }</button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddBasicDetails;
