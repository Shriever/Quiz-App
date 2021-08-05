import React from "react";
import { useSelector } from "react-redux";
import Quote from "./Quote";
import AnswerPrompt from "./AnswerPrompt";
import { useGetNewQuoteQuery } from "../services/quote";

const Footer = ({ refetch, questionValue }) => {
  const newQuoteRes = useGetNewQuoteQuery();
  const { isCorrectAnswer, isShowAnswer } = useSelector(
    state => state.question
  );

  if (isShowAnswer === false) return <div></div>;

  if (isCorrectAnswer === null)
    return (
      <AnswerPrompt
        refetch={newQuoteRes.refetch}
        questionValue={questionValue}
      />
    );

  return <Quote refetch={refetch} newQuoteRes={newQuoteRes} />;
};

export default Footer;
