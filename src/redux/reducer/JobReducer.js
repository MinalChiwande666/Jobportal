import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    job: {
        id:Math.floor(Math.random(90000) * 10000),
        job_title: '',
        number_of_vacancy: '',
        job_location_type: '',
        job_type: null,
        experience_levels: null,
        schedules: null,
        salary : null,
        benifits : null,
        description : "",
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
        },
        seteditDecsription : (state,action)=>{
            let findData = state.jobs.findIndex((j)=> j.id === action.payload.id)
            state.jobs[findData] = {
                ...state.job,
                description: action.payload.desc
            }

          
        }
    }
})

export const { setBasicDetails, setOtherDetails, setPayAndBenifits, seteditDecsription } = jobSlice.actions;
export default jobSlice.reducer