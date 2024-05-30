import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTION } from '../utils/constant';
import { addToprated, addupcomming } from '../utils/Moviesslice';
function useUpcomming() {
    const dispatch=useDispatch();
    const UpcommingApi=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTION)
      const json=await data.json();
      console.log(json.results,"toprated");
     dispatch(addupcomming(json.results))
    }  
    useEffect(()=>{
      UpcommingApi();
    },[])
}

export default useUpcomming