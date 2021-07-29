import React from "react";
import { Button, Typography } from "@material-ui/core";
import handleShowAnswer from "../utils/handleShowAnswer";

const Answer = ({ isShowAnswer, setState, answer }) => {
  if (!isShowAnswer) {
    return (
      <Button
        size='large'
        variant='contained'
        color='primary'
        onClick={() => handleShowAnswer(setState)}
      >
        Show Answer
      </Button>
    );
  }
  return (
    <Typography variant='h3' align='center'>
      {answer}
    </Typography>
  );
};

export default Answer;
