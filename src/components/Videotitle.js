import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import Videoplaying from './Videoplaying';
function Videotitle() {
  const movie=useSelector((state)=>state?.movie?.NowPlayingMovie,"sss");
  if(!movie) return;
  const{original_title,overview}=movie[0]
  
  return (
    <div className='   mt-36 aspect-video  text-white bg-gradient-to-b from-black opacity-80 '>
      <h1 className=' text-[50px] font-bold mx-4'>{original_title}</h1>
      <p className=' w-96 mt-4 mx-4'>{overview}</p>
      <div className=' mt-6'>
      <button className=' bg-gray-700 w-24 px-6 py-3 rounded-lg mx-4 hover:bg-slate-600' >▶️ Play</button>
      <button className=' bg-gray-700 w-36 px-6 py-3 rounded-lg mx-3  hover:bg-slate-600' >More Info</button>
     
      </div>
    </div>
  )
}

export default Videotitle