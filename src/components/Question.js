import React from "react";
import { Typography } from "@material-ui/core";

const Question = ({ text, value }) => {
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
