import React from "react";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const Question = () => {
  const { text, value } = useSelector(state => state.question.question);

  return (
    <>
      <Typography variant='h4'>For {value} points:</Typography>
      <br />
      <Typography variant='h3' align='center'>
        {text}
      </Typography>
    </>
  );
};

export default Question;
