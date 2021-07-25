import React from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";

const Quote = ({ isCorrectAnswer, displayNextQuestion, quote }) => {
  const handleClick = () => {
    displayNextQuestion();
  };
  if (isCorrectAnswer) {
    return (
      <Grid container justifyContent='center' alignItems='center' spacing={3}>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h4' align='center'>
                Great Job!
              </Typography>
            </Grid>
            Here's a Chuck Norris quote for you: "{quote}"
          </Grid>
        </Grid>

        <Grid item>
          <Button
            variant='contained'
            color='primary'
            onClick={displayNextQuestion}
          >
            Next Question -{">"}
          </Button>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container justifyContent='center' spacing={3} alignItems="center">
      <Grid item>
        <Typography>oops, no chuck norris for you :(</Typography>
      </Grid>
      <Grid item>
        <Button
          variant='contained'
          color='primary'
          onClick={displayNextQuestion}
        >
          Next Question -{">"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Quote;
