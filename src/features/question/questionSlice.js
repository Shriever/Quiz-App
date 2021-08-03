import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "question",
    initialState: {
      isCorrectAnswer: null,
      isShowAnswer: false,
      question: {
        text: "",
        value: 0,
      },
      answer: "",
    },
  reducers: {
    showAnswer: state => {
      state.isShowAnswer = true;
    },
    showNextQuestion: state => {
      state.isShowAnswer = false;
      state.isCorrectAnswer = null;

      // TODO get new question and answer
    },
    playerResponded: (state, action) => {
      state.isCorrectAnswer = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showAnswer, showNextQuestion, playerResponded } = questionSlice.actions;

export default questionSlice.reducer;
