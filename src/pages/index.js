import * as React from "react";
import { Grid } from "@material-ui/core";
// import { Score, Quote, Answer, Question } from "../components/";
import Score from "../components/Score";
import Quote from "../components/Quote";
import Answer from "../components/Answer";
import Question from "../components/Question";

const IndexPage = () => {
  return (
    <Grid container>
      <Score />
      <Grid container>
        <Grid item xs={6}>
          <Question />
        </Grid>
        <Grid item xs={6}>
          <Answer />
        </Grid>
      </Grid>
      <Quote />
    </Grid>
  );
};

export default IndexPage;
