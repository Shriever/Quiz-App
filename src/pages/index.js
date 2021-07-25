import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Score from "../components/Score";
import Quote from "../components/Quote";
import Answer from "../components/Answer";
import Question from "../components/Question";
import AnswerPrompt from "../components/AnswerPrompt";

// LINKS TO APIS FOR THIS PROJECT
// https://jservice.io/api/random
// https://api.chucknorris.io/jokes/random

const IndexPage = () => {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const [quote, setQuote] = useState("Chuck Norris is really cool.");

  const handleAnswer = res => {
    setIsCorrectAnswer(res);
  };

  const displayNextQuestion = () => {
    setIsCorrectAnswer(null);
  };

  return (
    <Grid container justifyContent='center'>
      <Score playerScore={300} />

      <Grid container justifyContent='space-around'>
        <Question />
        <Answer />
      </Grid>

      {isCorrectAnswer === null ? (
        <AnswerPrompt handleAnswer={handleAnswer} />
      ) : (
        <Quote
          isCorrectAnswer={isCorrectAnswer}
          displayNextQuestion={displayNextQuestion}
          quote={quote}
        />
      )}
    </Grid>
  );
};

export default IndexPage;
