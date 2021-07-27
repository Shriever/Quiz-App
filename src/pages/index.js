import React, { useState } from "react";
import { Container, Grid, createTheme } from "@material-ui/core";
import Score from "../components/Score";
import Answer from "../components/Answer";
import Question from "../components/Question";
import { calcNewScore, getNewQuestion } from "../utils/misc";
import Footer from "../components/Footer";

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
  const [state, setState] = useState({
    playerScore: 0,
    isCorrectAnswer: null,
    quote: "Chuck Norris is really cool",
    question: {
      text: "Who is this?",
      value: 300,
    },
  });

  const handlePlayerAnswer = isCorrectAnswer => {
    setState(prevState => {
      return {
        ...prevState,
        isCorrectAnswer,
        playerScore: calcNewScore(prevState, isCorrectAnswer),
      };
    });
  };

  const displayNextQuestion = () => {
    setState(prevState => {
      return {
        ...prevState,
        isCorrectAnswer: null,
        question: getNewQuestion(),
      };
    });
  };

  const { playerScore, question, quote, isCorrectAnswer } = state;
  const footerState = { quote, isCorrectAnswer };
  return (
    <Container theme={theme}>
      <Grid container justifyContent='center'>
        <Score playerScore={playerScore} />

        <Grid
          style={{ marginBottom: "3rem" }}
          container
          alignItems='center'
          justifyContent='center'
          spacing={3}
        >
          <Grid item xs={6}>
            <Question
              questionText={question.text}
              questionValue={question.value}
              style={{ background: theme.palette.primary.main }}
            />
          </Grid>

          <Grid item xs={6}>
            <Answer />
          </Grid>
        </Grid>

        <Footer
          state={footerState}
          displayNextQuestion={displayNextQuestion}
          handlePlayerAnswer={handlePlayerAnswer}
        />
      </Grid>
    </Container>
  );
};

export default IndexPage;
