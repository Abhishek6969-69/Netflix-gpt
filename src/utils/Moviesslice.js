import { createSlice } from "@reduxjs/toolkit";

const Movieslice=createSlice({
    name:"movie",
    initialState:{
   NowPlayingMovie:null,
   Trailer:null,
   Toprated:null,
   Upcomming:null,
   Real:null,
    },
    reducers:{
        addmovies:(state,action)=>{
         state.NowPlayingMovie=action.payload
        },
        addTrailer:(state,action)=>{
            state.Trailer=action.payload;
        },
        addToprated:(state,action)=>{
            state.Toprated=action.payload
        },
        addupcomming:(state,action)=>{
            state.Upcomming=action.payload
        },
        addreal:(state,action)=>{
            state.Real=action.payload
        },

    }
})
export const{addmovies,addTrailer,addToprated,addupcomming,addreal}=Movieslice.actions;
export default Movieslice.reducer