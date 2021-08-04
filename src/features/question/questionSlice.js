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
    },
    setNewQuestion: (state, action) => {
      const questionData = action.payload[0];
      const { value, question, answer } = questionData;

      state.question = { text: question, value: value || 300 };
      state.answer = answer;
    },
    playerResponded: (state, action) => {
      state.isCorrectAnswer = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showAnswer, showNextQuestion, playerResponded, setNewQuestion } =
  questionSlice.actions;

export default questionSlice.reducer;
