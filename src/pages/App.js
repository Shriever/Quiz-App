import React from "react";
import { Helmet } from "react-helmet";
import { Container, Grid } from "@material-ui/core";

import Score from "../components/Score";
import Answer from "../components/Answer";
import Question from "../components/Question";
import Footer from "../components/Footer";

import useStyles from "../utils/styles";
import favicon from "../images/puzzle-icon.png";
import { useGetRandomQuestionAndAnswerQuery } from "../services/question";

const App = () => {
  const classes = useStyles();

  const { data, isLoading, refetch } = useGetRandomQuestionAndAnswerQuery();
  if (isLoading) return <h2>loading...</h2>;

  const { value, answer, question } = data[0];

  const newQuestion = { text: question, value: value || 300 };

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
            <Question {...newQuestion} />
          </Grid>

          <Grid item xs={5} className={classes.answerContainer}>
            <Answer style={{ margin: "0 auto" }} answer={answer} />
          </Grid>
        </Grid>

        <Footer refetch={refetch} questionValue={newQuestion.value} />
      
      </Grid>
    </Container>
  );
};

export default App;
