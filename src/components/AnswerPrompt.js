import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import handlePlayerAnswer from "../utils/handlePlayerAnswer";

const AnswerPrompt = ({ setState }) => {
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
          onClick={() => handlePlayerAnswer(true, setState)}
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
          onClick={() => handlePlayerAnswer(false, setState)}
        >
          Nope
        </Button>
      </Grid>
    </Grid>
  );
};

export default AnswerPrompt;
