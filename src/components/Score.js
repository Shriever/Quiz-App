import React from "react";
import { Typography } from "@material-ui/core";

const Score = ({ playerScore, scoreClass }) => {
  return (
    <Typography
      className={scoreClass}
      variant='h1'
      align='center'
      background='primary'
    >
      Score: {playerScore}
    </Typography>
  );
};

export default Score;
