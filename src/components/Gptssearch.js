import React from 'react'
import Header from './header'
import { useDispatch } from 'react-redux';
import { setpage } from '../utils/configslice';
import Searchbox from './searchbox';
function Gptssearch() {
    
  
  const dispatch=useDispatch();
    const handlegptsearch=()=>{
        dispatch(setpage())
      }
  return (
    <div>
        <Header />
        <div className=" absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_medium.jpg" />
      </div>
        <div  className="relative ">
            <button className="w-24  p-2  absolute mt-4  mx-[980px]   rounded-lg   bg-blue-600   z-50   capitalize" onClick={handlegptsearch}>Gptsearch</button>
          </div>
          <div className='absolute mt-36 ml-[30%] bg-black p-2 '>
          <Searchbox />
          </div>
    </div>
  )
}

export default Gptssearch