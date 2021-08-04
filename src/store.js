import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import playerScoreSlice from "./features/playerScore/playerScoreSlice";
import quoteSlice from "./features/quote/quoteSlice";
import questionSlice from "./features/question/questionSlice";
import { questionApi } from "./services/question";
import { quoteApi } from "./services/quote";

const store = configureStore({
  reducer: {
    quote: quoteSlice,
    playerScore: playerScoreSlice,
    question: questionSlice,
    [questionApi.reducerPath]: questionApi.reducer,
    [quoteApi.reducerPath]: quoteApi.reducer,
  },
});
setupListeners(store.dispatch);

export default store;
