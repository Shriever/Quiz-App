import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  score: {
    marginBottom: "2rem",
  },
  answerContainer: {
    borderTop: "0.3rem solid green",
    paddingTop: "6rem",
    textAlign: "center",
    backgroundColor: theme.palette.grey[300],
    borderRadius: "5px",
    height: "100%",
    "& button": {
      marginTop: theme.spacing(5),
    },
  },
  questionContainer: {
    borderTop: "0.3rem solid green",
    backgroundColor: theme.palette.grey[300],
    borderRadius: "5px",
  },
}));

export default useStyles;
