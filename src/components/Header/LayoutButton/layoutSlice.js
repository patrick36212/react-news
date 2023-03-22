import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    isListActive: false,
  },
  reducers: {
    toggleIsListActive: (state) => {
      state.isListActive = !state.isListActive;
    },
  },
});

export const { toggleIsListActive } = layoutSlice.actions;

export const selectIsListActive = (state) => state.layout.isListActive;

export default layoutSlice.reducer;
