import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'
function Card({carditem}) {
    
  return (
    <div className=' w-52 '>
    
        <img className='  ' src={IMG_CDN_URL+carditem.poster_path} alt='popular'/>
   
    </div>
  )
}

export default Card