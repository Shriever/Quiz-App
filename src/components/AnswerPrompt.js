import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { playerResponded } from "../features/question/questionSlice";
import { addQuestionValueToScore } from "../features/playerScore/playerScoreSlice";

const AnswerPrompt = () => {
  const dispatch = useDispatch();

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
          onClick={() => {
            dispatch(playerResponded(true));
            dispatch(addQuestionValueToScore());
          }}
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
          onClick={() => dispatch(playerResponded(false))}
        >
          Nope
        </Button>
      </Grid>
    </Grid>
  );
};

export default AnswerPrompt;
