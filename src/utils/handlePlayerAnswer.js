import getNewQuote from "./getNewQuote";
import calcNewScore from "./calcNewScore";

const handlePlayerAnswer = async (isCorrectAnswer, setState) => {
  const newQuote = isCorrectAnswer ? await getNewQuote() : "";
  setState(prevState => {
    return {
      ...prevState,
      quote: newQuote,
      isCorrectAnswer,
      playerScore: calcNewScore(prevState, isCorrectAnswer),
    };
  });
};

export default handlePlayerAnswer;
