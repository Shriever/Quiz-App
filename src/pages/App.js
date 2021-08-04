import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Container, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Score from "../components/Score";
import Answer from "../components/Answer";
import Question from "../components/Question";
import Footer from "../components/Footer";

import useStyles from "../utils/styles";
import displayNextQuestion from "../utils/displayNextQuestion";
import initialState from "../utils/initialState";
import favicon from "../images/puzzle-icon.png";
import { useGetRandomQuestionAndAnswerQuery } from "../services/question";
import { setNewQuestion } from "../features/question/questionSlice";

const App = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    displayNextQuestion(setState);
  }, [setState]);

  const classes = useStyles();

  const { data, error, isLoading } = useGetRandomQuestionAndAnswerQuery();
  const dispatch = useDispatch();
  if (data) {
    dispatch(setNewQuestion(data));
  }
  const { quote } = state;

  return (
    <Container>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Levi's Quiz App</title>
        <link rel='icon' type='image/png' size='16x16' href={favicon} />
      </Helmet>

      <Grid container justifyContent='center'>
        <Score scoreClass={classes.score} />

        <Grid
          style={{ marginTop: "1rem", marginBottom: "3rem" }}
          container
          alignItems='center'
          justifyContent='space-between'
          spacing={4}
        >
          <Grid item xs={5} className={classes.questionContainer}>
            <Question />
          </Grid>

          <Grid item xs={5} className={classes.answerContainer}>
            <Answer style={{ margin: "0 auto" }} />
          </Grid>
        </Grid>

        <Footer quote={quote} />
      </Grid>
    </Container>
  );
};

export default App;
