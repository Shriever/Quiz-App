import React from "react";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const Score = ({ scoreClass }) => {
  const { playerScore } = useSelector(state => state.playerScore);
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
