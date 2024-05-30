import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTION } from '../utils/constant';
import { addreal } from '../utils/Moviesslice';

function useRealNowplaying() {
    const dispatch=useDispatch();
    const RealNowplayingApi=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTION)
      const json=await data.json();
      console.log(json.results,"toprated");
     dispatch(addreal(json.results))
    }  
    useEffect(()=>{
      RealNowplayingApi();
    },[])
}

export default useRealNowplaying;