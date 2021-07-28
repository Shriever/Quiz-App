import React from "react";
import { Typography } from "@material-ui/core";

const Question = ({ questionText, questionValue }) => {
  return (
    <>
      <Typography variant='h4'>For {questionValue} points:</Typography>
      <br />
      <Typography variant='h3' align='center'>
        {questionText}
      </Typography>
    </>
  );
};

export default Question;
