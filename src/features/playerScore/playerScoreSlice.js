import { createSlice } from "@reduxjs/toolkit";

export const playerScoreSlice = createSlice({
  name: "playerScore",
  initialState: {
    playerScore: 0,
  },
  reducers: {
    addQuestionValueToScore: (state, action) => {
      state.playerScore += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addQuestionValueToScore } = playerScoreSlice.actions;

export default playerScoreSlice.reducer;
