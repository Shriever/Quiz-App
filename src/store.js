// import { createStore } from "redux";
// import reducer from "./reducers/reducer";
// import initialState from "./utils/initialState";

// const store = createStore(reducer, initialState);

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import playerScoreSlice from "./features/playerScore/playerScoreSlice";
import quoteSlice from "./features/quote/quoteSlice";
import questionSlice from "./features/question/questionSlice";

export default configureStore({
  reducer: {
    quote: quoteSlice,
    playerScore: playerScoreSlice,
    question: questionSlice,
  },
});
