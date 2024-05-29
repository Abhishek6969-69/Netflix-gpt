import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice"
import movieReducer from "./Moviesslice"
const appstore=configureStore({
    reducer:{
      user:userReducer,
      movie:movieReducer,
    }
})
export default appstore;