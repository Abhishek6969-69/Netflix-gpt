import { createSlice } from "@reduxjs/toolkit";

const configslice=createSlice({
    name:"config",
    initialState:{
        showpage:false,
    },
    reducers:{
        setpage:(state)=>{
            state.showpage=! state.showpage
        },
    }
    
});
export const{setpage}=configslice.actions;
export default configslice.reducer