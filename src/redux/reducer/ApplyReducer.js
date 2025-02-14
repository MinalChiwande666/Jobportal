import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    candidate:{
        jid: '',
        username : '',
        experience : '',
        resumeFile : ''
    },
    candidates : []
} 


const ApplyJobSlice = createSlice({
    name:'ApplyJob',
    initialState,
    reducers:{
        setApply : (state,action)=>{
             state.candidate = action.payload
             state.candidates.push(action.payload)
        }
    }
})

export const {setApply} = ApplyJobSlice.actions
export default ApplyJobSlice.reducer