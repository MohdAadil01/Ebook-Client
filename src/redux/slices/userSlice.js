import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    signup: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    initializeUserFromStorage: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, signup, initializeUserFromStorage } =
  userSlice.actions;
export default userSlice.reducer;
