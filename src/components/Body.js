import React, { useEffect } from 'react'
import Login from './login'
import Browse from './browse'
import { Provider, useDispatch } from 'react-redux'
import appstore from '../utils/appstore'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { adduser, removeuser } from '../utils/userslice'
const Body = () => {
  const dispatch=useDispatch();
    const approuter=createBrowserRouter([
      {
        path:"/",
        element:<Login />
      },
      {
        path:"/browse",
        element:<Browse />
      }
    ])
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
         
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email} = user;
          dispatch(adduser({uid:uid,email:email}));
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeuser());
        }
      });
    },[])
  return (
    <div>
     
       <RouterProvider router={approuter} />
     
       <div>
    
    </div>
          
          </div>
  )
}

export default Body