import React from "react";
import { Button, Typography } from "@material-ui/core";

const Answer = ({ isShowAnswer, handleShowAnswer, answer }) => {
  if (!isShowAnswer) {
    return (
      <Button size="large" variant='contained' color='primary' onClick={handleShowAnswer}>
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
