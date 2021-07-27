import React, { useState } from "react";
import { Container, Grid, createTheme } from "@material-ui/core";
import Score from "../components/Score";
import Quote from "../components/Quote";
import Answer from "../components/Answer";
import Question from "../components/Question";
import AnswerPrompt from "../components/AnswerPrompt";

// LINKS TO APIS FOR THIS PROJECT
// https://jservice.io/api/random
// https://api.chucknorris.io/jokes/random

const theme = createTheme({
  palette: {
    primary: {
      main: "#9575cd",
    },
    secondary: {
      main: "#1b5e20",
    },
  },
});

const IndexPage = () => {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const [quote, setQuote] = useState("Chuck Norris is really cool.");
  const [questionText, setQuestionText] = useState("Who is this?");

  const handleAnswer = res => {
    setIsCorrectAnswer(res);
  };

  const displayNextQuestion = () => {
    setIsCorrectAnswer(null);
  };

  return (
    <Container theme={theme}>
      <Grid container justifyContent='center'>
        <Score playerScore={300} />

        <Grid
          style={{ marginBottom: "3rem" }}
          container
          alignItems='center'
          justifyContent='center'
          spacing={3}
        >
          <Grid item xs={6}>
            <Question
              questionText={questionText}
              style={{ background: theme.palette.primary.main }}
            />
          </Grid>

          <Grid item xs={6}>
            <Answer />
          </Grid>
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
    </Container>
  );
};

export default IndexPage;
