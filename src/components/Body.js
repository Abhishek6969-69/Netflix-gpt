import React from 'react'
import Login from './login'
import Browse from './browse'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const Body = () => {
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
  return (
    <div>
       <RouterProvider router={approuter} />
       <div>
    
    </div>
          
          </div>
  )
}

export default Body