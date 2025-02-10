import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    job: {
        job_title: '',
        number_of_vacancy: '',
        job_location_type: '',
        job_type: null,
        experience_levels: null,
        schedules: null,
        salary : null,
        benifits : null,
        posted_on : new Date().toISOString(),
        status: 'Draft'
    },
    jobs:[]
}


const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        setBasicDetails: (state, action) => {
          
            state.job = {
                ...state.job,
                ...action.payload
            }
        },
        setOtherDetails: (state, action) => {
            state.job = {
                ...state.job,
                ...action.payload
            }
        },
        setPayAndBenifits: (state, action) => {
            state.job = {
                ...state.job,
                ...action.payload
            }

            state.jobs.push({...state.job,...action.payload})
        }
    }
})

export const { setBasicDetails, setOtherDetails, setPayAndBenifits } = jobSlice.actions;
export default jobSlice.reducer