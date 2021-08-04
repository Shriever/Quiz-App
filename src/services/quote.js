import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quoteApi = createApi({
  reducerPath: "quoteApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.chucknorris.io/jokes/" }),
  endpoints: builder => ({
    getNewQuote: builder.query({
      query: () => "random",
    }),
  }),
});

export const { useGetNewQuoteQuery } = quoteApi;
