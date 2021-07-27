import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";

const AnswerPrompt = ({ handlePlayerAnswer }) => {
  const handleClick = res => {
    handlePlayerAnswer(res);
  };
  return (
    <Grid
      container
      direction='row'
      alignItems='center'
      justifyContent='center'
      spacing={5}
    >
      <Grid item>
        <Button
          variant='contained'
          color='primary'
          onClick={() => handleClick(true)}
        >
          Yes
        </Button>
      </Grid>

      <Grid item>
        <Typography variant='h4'>Did you get the answer?</Typography>
      </Grid>

      <Grid item>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => handleClick(false)}
        >
          Nope
        </Button>
      </Grid>
    </Grid>
  );
};

export default AnswerPrompt;
