import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  location: "",
  rating: null,
  reviews: null,
  headline: "",
};

const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {
    setBusinessData: (state, action) => {
      return { ...state, ...action.payload };
    },
    updateHeadline: (state, action) => {
      state.headline = action.payload;
    },
  },
});

export const { setBusinessData, updateHeadline } = businessSlice.actions;
export default businessSlice.reducer;
