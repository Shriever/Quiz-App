import React from "react";
import { Container, Typography } from "@material-ui/core";

const Question = ({questionText}) => {
  return (
    <>
      <Typography variant='h4'>For 500 points:</Typography>
      <br />
      <Typography variant='h3' align="center">
        {questionText}
      </Typography>
    </>
  );
};

export default Question;
