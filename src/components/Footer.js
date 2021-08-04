import React from "react";
import Quote from "./Quote";
import AnswerPrompt from "./AnswerPrompt";
import { useSelector } from "react-redux";

const Footer = props => {
  const { isCorrectAnswer, isShowAnswer } = useSelector(
    state => state.question
  );
  const { quote } = props;

  const quoteProps = { quote };

  if (isShowAnswer === false) return <div></div>;

  if (isCorrectAnswer === null) return <AnswerPrompt />;

  return <Quote {...quoteProps} />;
};

export default Footer;
