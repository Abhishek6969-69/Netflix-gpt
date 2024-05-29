import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addmovies } from "../utils/Moviesslice";

const Usemovies=()=>{
    const dispatch=useDispatch();
  const PlayingmovieApi=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTION);
    const json=await data.json();
    console.log(json.results);
   dispatch(addmovies(json.results))
  }  
  useEffect(()=>{
    PlayingmovieApi();
  },[])
}
export default Usemovies