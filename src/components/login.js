import React from 'react'
import Header from './header'
import { useState } from 'react'
const Login = () => {
  const[islogin,setislogin]=useState(true);
  const handleset=()=>{
    setislogin(!islogin);
  }
  return (
    <div className=' '>
      <Header />
      <div className=' absolute'>
      <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_medium.jpg" />
      </div>
     
      <form className='absolute left-0 right-0  w-[400px] mx-auto my-auto text-white mt-40 ml-6/12 p-12 bg-black opacity-80 '>
        <h1 className='my-3  mx-4  font-bold text-4xl'>{islogin?"Sign In":"Sign Up"} </h1>
       {islogin? "":<input className='my-2 p-3 w-80   mx-2 rounded bg-gray-200   ' type='text' placeholder='Full Name'/>}
        <input className='my-2 p-3 w-80   mx-2 rounded bg-gray-200   ' type='text' placeholder='Email'/>
        <input className='my-2 p-3 w-80   mx-2 rounded  ' type='password' placeholder='Password'/>
        <button className='   w-80 mt-5   mx-2 p-3 rounded bg-red-700  '>{islogin?"Sign In":"Sign Up"}</button>
        <p className='mx-4 mt-4 cursor-pointer' onClick={handleset}>{islogin?"New to Netflix?Sign up Now":" Already Registered User? sign In"}</p>
      </form>
    </div>
  )
}

export default Login;