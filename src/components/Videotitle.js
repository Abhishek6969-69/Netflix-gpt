import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import Videoplaying from './Videoplaying';
function Videotitle() {
  const movie=useSelector((state)=>state?.movie?.NowPlayingMovie,"sss");
  if(!movie) return;
  const{original_title,overview}=movie[0]
  
  return (
    <div className=' mt-24 bg-gradient-to-l from-black   md:mt-36 aspect-video  text-white md:bg-gradient-to-b from-black opacity-80 '>
      <h1 className=' text-[10px] md:text-[50px] md:font-bold mx-4'>{original_title}</h1>
      <p className='hidden  md:block w-96 mt-4 mx-4'>{overview}</p>
      <div className=' mt-6'>
      <button className=' w-16 px-2 py-2  bg-gray-700  md:w-24 md:px-6 md:py-3 rounded-lg mx-4 hover:bg-slate-600' >▶️ Play</button>
      <button className='hidden  md: bg-gray-700 w-36 px-6 py-3 rounded-lg mx-3  hover:bg-slate-600' >More Info</button>
     
      </div>
    </div>
  )
}

export default Videotitle