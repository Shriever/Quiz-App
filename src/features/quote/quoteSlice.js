import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: "",
  },
  reducers: {
    showNewQuote: state => {
      // TODO get new quote
      state.quote = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { showNewQuote } = quoteSlice.actions;

export default quoteSlice.reducer;
