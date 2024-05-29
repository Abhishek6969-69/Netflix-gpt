import { createSlice } from "@reduxjs/toolkit";

const Movieslice=createSlice({
    name:"movie",
    initialState:{
   NowPlayingMovie:null,
   Trailer:null,
    },
    reducers:{
        addmovies:(state,action)=>{
         state.NowPlayingMovie=action.payload
        },
        addTrailer:(state,action)=>{
            state.Trailer=action.payload;
        }
    }
})
export const{addmovies,addTrailer}=Movieslice.actions;
export default Movieslice.reducer