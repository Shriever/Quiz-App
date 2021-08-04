import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import { showAnswer } from "../features/question/questionSlice";

const Answer = () => {
  const dispatch = useDispatch();
  const { answer, isShowAnswer } = useSelector(state => state.question);

  if (!isShowAnswer) {
    return (
      <Button
        size='large'
        variant='contained'
        color='primary'
        onClick={() => dispatch(showAnswer())}
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
