import React from "react";
import { Grid, Typography } from "@material-ui/core";
import NextQuestionButton from "./NextQuestionButton";
import { useSelector } from "react-redux";

const Quote = ({ refetch, newQuoteRes }) => {
  const { isCorrectAnswer } = useSelector(state => state.question);
  const { data, isLoading } = newQuoteRes;

  if (isLoading) return <p>loading...</p>;

  if (isCorrectAnswer) {
    return (
      <Grid container justifyContent='center' alignItems='flex-end' spacing={7}>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography fontweightlight variant='h4' align='center'>
                Great Job!
              </Typography>
              <Typography variant='h5' align='center'>
                Here's a Chuck Norris quote for you: <br />
              </Typography>
              <Typography variant='h4' align='center'>
                "{data.value}"
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <NextQuestionButton refetch={refetch} />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container justifyContent='center' spacing={3} alignItems='center'>
      <Grid item>
        <Typography>oops, no chuck norris for you :(</Typography>
      </Grid>
      <Grid item>
        <NextQuestionButton refetch={refetch} />
      </Grid>
    </Grid>
  );
};

export default Quote;
