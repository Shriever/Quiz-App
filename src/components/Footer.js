import React from "react";
import Quote from "./Quote";
import AnswerPrompt from "./AnswerPrompt";
import { useSelector } from "react-redux";

const Footer = () => {
  const { isCorrectAnswer, isShowAnswer } = useSelector(
    state => state.question
  );

  if (isShowAnswer === false) return <div></div>;

  if (isCorrectAnswer === null) return <AnswerPrompt />;

  return <Quote />;
};

export default Footer;
