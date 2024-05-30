import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTION } from '../utils/constant';
import { addToprated } from '../utils/Moviesslice';
function useToprated() {
    const dispatch=useDispatch();
    const TopRatedApi=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTION)
      const json=await data.json();
      console.log(json.results,"toprated");
     dispatch(addToprated(json.results))
    }  
    useEffect(()=>{
      TopRatedApi();
    },[])
}

export default useToprated