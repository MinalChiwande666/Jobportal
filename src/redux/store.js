import { configureStore } from "@reduxjs/toolkit";
import jobReducer from './reducer/JobReducer'

export const store = configureStore({
    reducer:{
        job: jobReducer
    }
})