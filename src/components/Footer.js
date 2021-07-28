import React from "react";
import Quote from "./Quote";
import AnswerPrompt from "./AnswerPrompt";

const Footer = props => {
  const { quote, isCorrectAnswer, handlePlayerAnswer, isShowAnswer, setState } =
    props;

  const quoteProps = { isCorrectAnswer, quote, setState };

  if (isShowAnswer === false) return <div></div>;

  if (isCorrectAnswer === null)
    return <AnswerPrompt handlePlayerAnswer={handlePlayerAnswer} />;

  return <Quote {...quoteProps} />;
};

export default Footer;
