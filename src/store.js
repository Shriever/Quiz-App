import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import playerScoreSlice from "./features/playerScore/playerScoreSlice";
import quoteSlice from "./features/quote/quoteSlice";
import questionSlice from "./features/question/questionSlice";
import { questionApi } from "./services/question";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
  reducer: {
    quote: quoteSlice,
    playerScore: playerScoreSlice,
    question: questionSlice,
    [questionApi.reducerPath]: questionApi.reducer,
  },
});
setupListeners(store.dispatch);

export default store;
