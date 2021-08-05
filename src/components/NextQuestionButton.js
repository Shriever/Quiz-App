import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { showNextQuestion } from "../features/question/questionSlice";

const NextQuestionButton = ({ refetch }) => {
  const dispatch = useDispatch();

  return (
    <Button
      variant='contained'
      color='primary'
      onClick={() => {
        refetch();
        dispatch(showNextQuestion());
      }}
    >
      Next Question
      <ArrowForwardIosIcon fontSize='small' style={{ marginLeft: "3px" }} />
    </Button>
  );
};

export default NextQuestionButton;
