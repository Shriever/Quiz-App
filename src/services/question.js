import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jservice.io/api/",
  }),
  endpoints: builder => ({
    getRandomQuestionAndAnswer: builder.query({
      query: () => "random",
    }),
  }),
});

export const { useGetRandomQuestionAndAnswerQuery } = questionApi;
