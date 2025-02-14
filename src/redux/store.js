import { configureStore } from "@reduxjs/toolkit";
import jobReducer from './reducer/JobReducer'
import ApplyJobReducer from './reducer/ApplyReducer'
export const store = configureStore({
    reducer:{
        job: jobReducer,
        applyjob : ApplyJobReducer
    }
})