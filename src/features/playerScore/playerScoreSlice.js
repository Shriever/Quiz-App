import { createSlice } from "@reduxjs/toolkit";

export const playerScoreSlice = createSlice({
  name: "playerScore",
  initialState: {
    playerScore: 0,
  },
  reducers: {
    addQuestionValueToScore: state => {
      //   state.playerScore += state.question.value;
      state.playerScore++;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addQuestionValueToScore } = playerScoreSlice.actions;

export default playerScoreSlice.reducer;
