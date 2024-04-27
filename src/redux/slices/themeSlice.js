import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      state === "light" ? "dark" : "light";
    },
  },
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
