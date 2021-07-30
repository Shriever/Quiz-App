import React, { useState, useEffect } from "react";

import { Container, Grid } from "@material-ui/core";
import useStyles from "./../utils/styles";

import Score from "../components/Score";
import Answer from "../components/Answer";
import Question from "../components/Question";
import Footer from "../components/Footer";
import displayNextQuestion from "../utils/displayNextQuestion";
import { Helmet } from "react-helmet";

// LINKS TO APIS FOR THIS PROJECT
// https://jservice.io/api/random
// https://api.chucknorris.io/jokes/random

const IndexPage = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    playerScore: 0,
    isCorrectAnswer: null,
    isShowAnswer: false,
    quote: "",
    question: {
      text: "",
      value: 0,
    },
    answer: "",
  });

  useEffect(() => {
    displayNextQuestion(setState);
  }, [setState]);

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
    isShowAnswer,
    setState,
  };

  return (
    <Container>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Levi's Quiz App</title>
      </Helmet>
      <Grid container justifyContent='center'>
        <Score playerScore={playerScore} scoreClass={classes.score} />

        <Grid
          style={{ marginTop: "1rem", marginBottom: "3rem" }}
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
              setState={setState}
              style={{ margin: "0 auto" }}
            />
          </Grid>
        </Grid>

        <Footer {...footerProps} />
      </Grid>
    </Container>
  );
};

export default IndexPage;
