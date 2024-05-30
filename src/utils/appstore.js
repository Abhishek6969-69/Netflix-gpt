import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice"
import movieReducer from "./Moviesslice"
import  configReducer from "./configslice"
const appstore=configureStore({
    reducer:{
      user:userReducer,
      movie:movieReducer,
      config:configReducer,
    }
})
export default appstore;