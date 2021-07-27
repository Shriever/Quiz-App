import React from "react";
import Quote from "./Quote";
import AnswerPrompt from "./AnswerPrompt";

const Footer = ({ state, handlePlayerAnswer, displayNextQuestion }) => {
  const { quote, isCorrectAnswer } = state;
  return (
    <>
      {isCorrectAnswer === null ? (
        <AnswerPrompt handlePlayerAnswer={handlePlayerAnswer} />
      ) : (
        <Quote
          isCorrectAnswer={isCorrectAnswer}
          displayNextQuestion={displayNextQuestion}
          quote={quote}
        />
      )}
    </>
  );
};

export default Footer;
