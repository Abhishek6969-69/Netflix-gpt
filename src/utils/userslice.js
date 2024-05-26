import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,  // Ensure initialState is defined correctly
  reducers: {
    adduser: (state, action) => {
      return action.payload;
    },
    removeuser: () => {
      return null;
    },
  },
});

export const { adduser, removeuser } = userSlice.actions;
export default userSlice.reducer;
