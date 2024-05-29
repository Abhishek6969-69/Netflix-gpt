import React from 'react'
import Videotitle from './Videotitle'
import Videoplaying from './Videoplaying'


function Maincontainer() {
  return (
    <div className='  '>
     <div className='absolute z-30'>
       <Videotitle />
       </div>
       <div className=' absolute mt-[-80px]'>
        <Videoplaying/>
        </div>
        
        
       
       
    </div>
  )
}

export default Maincontainer