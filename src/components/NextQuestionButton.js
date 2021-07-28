import React from "react";
import { Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import displayNextQuestion from "../utils/displayNextQuestion";

const NextQuestionButton = ({ setState }) => {
  return (
    <Button
      variant='contained'
      color='primary'
      onClick={() => displayNextQuestion(setState)}
    >
      Next Question
      <ArrowForwardIosIcon fontSize='small' style={{ marginLeft: "3px" }} />
    </Button>
  );
};

export default NextQuestionButton;
