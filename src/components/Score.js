import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const theme = createTheme();

theme.typography.h1 = {
  fontSize: "5rem",
};

const Score = ({ playerScore }) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant='h1' align='center'>
        Score: {playerScore}
      </Typography>
    </ThemeProvider>
  );
};

export default Score;
