import calcNewScore from "../utils/calcNewScore";
import getNewQuote from "../utils/getNewQuote";

const playerResponse = async (state, action) => {
  const newQuote = action.payload ? await getNewQuote() : "";
  const playerScore = calcNewScore(state, action.payload);

  return {
    ...state,
    isCorrectAnswer: action.payload,
    quote: newQuote,
    playerScore,
  };
};

export default playerResponse;
