import React from "react";
import { Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import displayNextQuestion from "../utils/displayNextQuestion";
import { useDispatch } from "react-redux";
import { showNextQuestion } from "../features/question/questionSlice";

const NextQuestionButton = () => {
  const dispatch = useDispatch();
  return (
    <Button
      variant='contained'
      color='primary'
      onClick={() => dispatch(showNextQuestion())}
    >
      Next Question
      <ArrowForwardIosIcon fontSize='small' style={{ marginLeft: "3px" }} />
    </Button>
  );
};

export default NextQuestionButton;
