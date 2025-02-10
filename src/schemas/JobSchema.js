import * as Yup from 'yup'

export const BasicDetailsSchema = Yup.object({
    job_title : Yup.string().required('Job Title Required'),
    number_of_vacancy : Yup.string().required('No of Vacancy Required'),
    job_location_type : Yup.string().required('Job Location Type Reqiuired')
})