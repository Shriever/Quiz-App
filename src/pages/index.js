import React, { useState } from "react";

import { Container, Grid } from "@material-ui/core";
import { calcNewScore } from "../utils/misc";
import useStyles from "./../utils/styles";

import Score from "../components/Score";
import Answer from "../components/Answer";
import Question from "../components/Question";
import Footer from "../components/Footer";

// LINKS TO APIS FOR THIS PROJECT
// https://jservice.io/api/random
// https://api.chucknorris.io/jokes/random

const IndexPage = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    playerScore: 0,
    isCorrectAnswer: null,
    quote: "Chuck Norris is really cool",
    question: {
      text: "Who is this?",
      value: 300,
    },
    answer: "It's Chuck Norris!",
    isShowAnswer: false,
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

  const handleShowAnswer = () => {
    setState(prevState => {
      return { ...prevState, isShowAnswer: true };
    });
  };

  const {
    playerScore,
    question,
    quote,
    isCorrectAnswer,
    isShowAnswer,
    answer,
  } = state;
  const footerProps = {
    quote,
    isCorrectAnswer,
    handlePlayerAnswer,
    isShowAnswer,
    setState,
  };
  return (
    <Container>
      <Grid container justifyContent='center'>
        <Score playerScore={playerScore} scoreClass={classes.score} />

        <Grid
          style={{ marginBottom: "3rem" }}
          container
          alignItems='center'
          justifyContent='space-between'
          spacing={4}
        >
          <Grid item xs={5} className={classes.questionContainer}>
            <Question
              questionText={question.text}
              questionValue={question.value}
            />
          </Grid>

          <Grid item xs={5} className={classes.answerContainer}>
            <Answer
              isShowAnswer={isShowAnswer}
              answer={answer}
              style={{ margin: "0 auto" }}
              handleShowAnswer={handleShowAnswer}
            />
          </Grid>
        </Grid>

        <Footer {...footerProps} />
      </Grid>
    </Container>
  );
};

export default IndexPage;
