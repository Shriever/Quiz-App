import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Container, Grid } from "@material-ui/core";
import { Provider } from "react-redux";

import Score from "../components/Score";
import Answer from "../components/Answer";
import Question from "../components/Question";
import Footer from "../components/Footer";

import useStyles from "./../utils/styles";
import displayNextQuestion from "../utils/displayNextQuestion";
import initialState from "../utils/initialState";
import favicon from "../images/puzzle-icon.png";
import store from "./../store";

const IndexPage = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    displayNextQuestion(setState);
  }, [setState]);

  const classes = useStyles();

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
    <Provider store={store}>
      <Container>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Levi's Quiz App</title>
          <link rel='icon' type='image/png' size='16x16' href={favicon} />
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
    </Provider>
  );
};

export default IndexPage;
