import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  score: {
    marginBottom: theme.spacing(9),
  },
  answerContainer: {
    textAlign: "center",
    backgroundColor: theme.palette.grey[300],
    borderRadius: "5px",
    height: "100%",
    "& button": {
      marginTop: theme.spacing(4.25),
    },
  },
  questionContainer: {
    backgroundColor: theme.palette.grey[300],
  },
}));

export default useStyles;
