import React from 'react'
import Movielist from './Movielist'
import { UseSelector, useSelector } from 'react-redux'
import useToprated from '../hooks/useToprated';
import useUpcomming from '../hooks/useUpcomming';
import useRealNowplaying from '../hooks/realNowplaying';
function SecondaryContainer() {
    const movie=useSelector((state)=>state.movie);
   useToprated();
   useUpcomming();
   useRealNowplaying();
    return (
       <div className=' bg-black  '>
       
        <Movielist title={"Popular"} movielist={movie.NowPlayingMovie} />
        <Movielist title={"TopRated"} movielist={movie. Toprated} />
        <Movielist title={"Upcomming"} movielist={movie.Upcomming} />
      
       </div> 
    )
}

export default SecondaryContainer
